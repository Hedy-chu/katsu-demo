import { rewardsControllerContract, provider } from '@/utils/config';

// 定义事件的类型
interface RewardsClaimedEvent {
  user: string;
  reward: string;
  to: string;
  claimer: string;
  amount: bigint;
}
// txhash 0x7505588c532b7285794de72fef695b14244b1775d797e446ff89338793a407f3
export async function getLatestRewardsClaimed(): Promise<RewardsClaimedEvent | null> {
  const filter = rewardsControllerContract.filters.RewardsClaimed();
  let blockNumber = 10000;
  let find = true;
  let events;

  while (find) {
    events = await rewardsControllerContract.queryFilter(filter, blockNumber);
    if (events.length > 0) {
      find = false;
    } else {
      blockNumber -= 10000;
      if (blockNumber < 0) {
        console.log('No RewardsClaimed events found.');
        return null;
      }
    }
  }
  console.log(`Found ${events.length} RewardsClaimed events .`);

  let latestEvent;
  for (let index = events.length - 1; index >= 0; index--) {
    const event = events[index];
    const { amount } = event.args as RewardsClaimedEvent;
    if (amount > 0) {
      latestEvent = event;
      break;
    }
  }

  if (!latestEvent) {
    console.log('No non-zero RewardsClaimed events found.');
    return null;
  }

  const block = await provider.getBlock(latestEvent?.blockNumber);
  if (!block) {
    throw new Error('Block not found');
  }
  const { timestamp } = block;
  latestEvent = latestEvent.args as RewardsClaimedEvent;

  console.log('Latest RewardsClaimed Event:');
  console.log(`User: ${latestEvent.user}`);
  console.log(`Reward: ${latestEvent.reward}`);
  console.log(`To: ${latestEvent.to}`);
  console.log(`Claimer: ${latestEvent.claimer}`);
  console.log(`Amount: ${latestEvent.amount.toString()}`);
  console.log(`Last ClaimTime: ${timestamp}`);

  return latestEvent;
}
