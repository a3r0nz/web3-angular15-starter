import { Token } from "../models/token";
import { CHAIN_IDS } from "./chains";

export const WRAPPED_NATIVE_CURRENCY = {
  [CHAIN_IDS.BITKUB_CHAIN]: new Token(
    CHAIN_IDS.BITKUB_CHAIN,
    "0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5",
    18,
    "KKUB",
    "Wrapped KUB",
    true
  ),
  [CHAIN_IDS.BITKUB_CHAIN_TESTNET]: new Token(
    CHAIN_IDS.BITKUB_CHAIN_TESTNET,
    "0x1de8A5c87d421f53eE4ae398cc766e62E88e9518",
    18,
    "KKUB",
    "Wrapped KUB",
    true
  ),
};

export const MAIN_USD_CURRENCY = {
  [CHAIN_IDS.BITKUB_CHAIN]: new Token(
    CHAIN_IDS.BITKUB_CHAIN,
    "0x7d984C24d2499D840eB3b7016077164e15E5faA6",
    18,
    "KUSDT",
    "Bitkub-Peg USDT"
  ),
  [CHAIN_IDS.BITKUB_CHAIN_TESTNET]: new Token(
    CHAIN_IDS.BITKUB_CHAIN_TESTNET,
    "0xa3103C37fE1bF0f181b10632Ee20B73346BFE6c0",
    18,
    "KUSDT",
    "Bitkub-Peg USDT"
  ),
};
