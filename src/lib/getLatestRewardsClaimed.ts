import { rewardsControllerContract, provider } from '@/utils/config';

interface RewardsClaimedEvent {
  user: string;
  reward: string;
  to: string;
  claimer: string;
  amount: bigint;
}
// txhash 0x7505588c532b7285794de72fef695b14244b1775d797e446ff89338793a407f3
export async function getLatestRewardsClaimed(userAddress: string): Promise<RewardsClaimedEvent | null> {
  const filter = rewardsControllerContract.filters.RewardsClaimed(userAddress);

  const events = await rewardsControllerContract.queryFilter(filter);
  if (events.length <= 0) {
    console.log('No RewardsClaimed events found.');
    return null;
  }
  console.log(`Found ${events.length} RewardsClaimed events .`);

  let latestEvent;
  const allEvents = [];
  for (let index = events.length - 1; index >= 0; index--) {
    const event = events[index];
    const { amount } = event.args as RewardsClaimedEvent;

    if (!latestEvent) {
      if (amount > 0) {
        console.log('First non-zero RewardsClaimed event found.');
        latestEvent = event;
        allEvents.push(event);
        console.log(`latestEvent txhash:`, latestEvent.transactionHash);
      }
    } else if (latestEvent && event.transactionHash === latestEvent.transactionHash) {
      console.log(`event.txhash: ${event.transactionHash}`);
      allEvents.push(event);
    } else {
      console.log('Different txhash, breaking the loop.');
      break;
    }
  }

  if (!latestEvent) {
    console.log('No non-zero RewardsClaimed events found.');
    return null;
  }

  const block = await provider.getBlock(latestEvent.blockNumber);
  if (!block) {
    throw new Error('Block not found');
  }
  const { timestamp } = block;
  latestEvent = latestEvent.args as RewardsClaimedEvent;
  console.log(allEvents);

  for (let index = 0; index < allEvents.length; index++) {
    const event = allEvents[index];
    const { amount, reward, to, claimer } = event.args as RewardsClaimedEvent;
    console.log(`Reward: ${reward}`); // reward 地址
    console.log(`To: ${to}`);
    console.log(`Claimer: ${claimer}`);
    // Amount：领取的最小单位，没有精度处理，需要通过reward获得decimals，然后除以10**decimals，再乘以amount，得到领取的数量
    // 再通过oracle获得usd价格，乘以数量，得到领取的usd金额
    console.log(`event.amount: ${amount}`);
    console.log(`Last ClaimTime: ${timestamp}`);
    console.log(`event.txhash: ${event.transactionHash}`);
  }

  return latestEvent;
}
