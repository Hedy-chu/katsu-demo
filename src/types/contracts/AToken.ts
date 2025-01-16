/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ATokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ATOKEN_REVISION"
      | "DOMAIN_SEPARATOR"
      | "EIP712_REVISION"
      | "PERMIT_TYPEHASH"
      | "POOL"
      | "RESERVE_TREASURY_ADDRESS"
      | "UNDERLYING_ASSET_ADDRESS"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "decimals"
      | "decreaseAllowance"
      | "getIncentivesController"
      | "getPreviousIndex"
      | "getScaledUserBalanceAndSupply"
      | "handleRepayment"
      | "increaseAllowance"
      | "initialize"
      | "mint"
      | "mintToTreasury"
      | "name"
      | "nonces"
      | "permit"
      | "rescueTokens"
      | "scaledBalanceOf"
      | "scaledTotalSupply"
      | "setIncentivesController"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "transferOnLiquidation"
      | "transferUnderlyingTo"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "BalanceTransfer"
      | "Burn"
      | "Initialized"
      | "Mint"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ATOKEN_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EIP712_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "RESERVE_TREASURY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentivesController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPreviousIndex",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handleRepayment",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintToTreasury",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rescueTokens",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledBalanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setIncentivesController",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOnLiquidation",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferUnderlyingTo",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ATOKEN_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EIP712_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "RESERVE_TREASURY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentivesController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreviousIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleRepayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintToTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rescueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIncentivesController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOnLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferUnderlyingTo",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BalanceTransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    value: bigint,
    index: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [
    from: AddressLike,
    target: AddressLike,
    value: BigNumberish,
    balanceIncrease: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    target: string,
    value: bigint,
    balanceIncrease: bigint,
    index: bigint
  ];
  export interface OutputObject {
    from: string;
    target: string;
    value: bigint;
    balanceIncrease: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [
    underlyingAsset: AddressLike,
    pool: AddressLike,
    treasury: AddressLike,
    incentivesController: AddressLike,
    aTokenDecimals: BigNumberish,
    aTokenName: string,
    aTokenSymbol: string,
    params: BytesLike
  ];
  export type OutputTuple = [
    underlyingAsset: string,
    pool: string,
    treasury: string,
    incentivesController: string,
    aTokenDecimals: bigint,
    aTokenName: string,
    aTokenSymbol: string,
    params: string
  ];
  export interface OutputObject {
    underlyingAsset: string;
    pool: string;
    treasury: string;
    incentivesController: string;
    aTokenDecimals: bigint;
    aTokenName: string;
    aTokenSymbol: string;
    params: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    caller: AddressLike,
    onBehalfOf: AddressLike,
    value: BigNumberish,
    balanceIncrease: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    onBehalfOf: string,
    value: bigint,
    balanceIncrease: bigint,
    index: bigint
  ];
  export interface OutputObject {
    caller: string;
    onBehalfOf: string;
    value: bigint;
    balanceIncrease: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AToken extends BaseContract {
  connect(runner?: ContractRunner | null): AToken;
  waitForDeployment(): Promise<this>;

  interface: ATokenInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ATOKEN_REVISION: TypedContractMethod<[], [bigint], "view">;

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  EIP712_REVISION: TypedContractMethod<[], [string], "view">;

  PERMIT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  POOL: TypedContractMethod<[], [string], "view">;

  RESERVE_TREASURY_ADDRESS: TypedContractMethod<[], [string], "view">;

  UNDERLYING_ASSET_ADDRESS: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<
    [
      from: AddressLike,
      receiverOfUnderlying: AddressLike,
      amount: BigNumberish,
      index: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getIncentivesController: TypedContractMethod<[], [string], "view">;

  getPreviousIndex: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  getScaledUserBalanceAndSupply: TypedContractMethod<
    [user: AddressLike],
    [[bigint, bigint]],
    "view"
  >;

  handleRepayment: TypedContractMethod<
    [user: AddressLike, onBehalfOf: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      initializingPool: AddressLike,
      treasury: AddressLike,
      underlyingAsset: AddressLike,
      incentivesController: AddressLike,
      aTokenDecimals: BigNumberish,
      aTokenName: string,
      aTokenSymbol: string,
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  mint: TypedContractMethod<
    [
      caller: AddressLike,
      onBehalfOf: AddressLike,
      amount: BigNumberish,
      index: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  mintToTreasury: TypedContractMethod<
    [amount: BigNumberish, index: BigNumberish],
    [void],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  permit: TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  rescueTokens: TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  scaledBalanceOf: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  scaledTotalSupply: TypedContractMethod<[], [bigint], "view">;

  setIncentivesController: TypedContractMethod<
    [controller: AddressLike],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferOnLiquidation: TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferUnderlyingTo: TypedContractMethod<
    [target: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ATOKEN_REVISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EIP712_REVISION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PERMIT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "POOL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RESERVE_TREASURY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UNDERLYING_ASSET_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [
      from: AddressLike,
      receiverOfUnderlying: AddressLike,
      amount: BigNumberish,
      index: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getIncentivesController"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getPreviousIndex"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getScaledUserBalanceAndSupply"
  ): TypedContractMethod<[user: AddressLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "handleRepayment"
  ): TypedContractMethod<
    [user: AddressLike, onBehalfOf: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      initializingPool: AddressLike,
      treasury: AddressLike,
      underlyingAsset: AddressLike,
      incentivesController: AddressLike,
      aTokenDecimals: BigNumberish,
      aTokenName: string,
      aTokenSymbol: string,
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [
      caller: AddressLike,
      onBehalfOf: AddressLike,
      amount: BigNumberish,
      index: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintToTreasury"
  ): TypedContractMethod<
    [amount: BigNumberish, index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rescueTokens"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "scaledBalanceOf"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "scaledTotalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setIncentivesController"
  ): TypedContractMethod<[controller: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOnLiquidation"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferUnderlyingTo"
  ): TypedContractMethod<
    [target: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "BalanceTransfer"
  ): TypedContractEvent<
    BalanceTransferEvent.InputTuple,
    BalanceTransferEvent.OutputTuple,
    BalanceTransferEvent.OutputObject
  >;
  getEvent(
    key: "Burn"
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "BalanceTransfer(address,address,uint256,uint256)": TypedContractEvent<
      BalanceTransferEvent.InputTuple,
      BalanceTransferEvent.OutputTuple,
      BalanceTransferEvent.OutputObject
    >;
    BalanceTransfer: TypedContractEvent<
      BalanceTransferEvent.InputTuple,
      BalanceTransferEvent.OutputTuple,
      BalanceTransferEvent.OutputObject
    >;

    "Burn(address,address,uint256,uint256,uint256)": TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    "Initialized(address,address,address,address,uint8,string,string,bytes)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Mint(address,address,uint256,uint256,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
