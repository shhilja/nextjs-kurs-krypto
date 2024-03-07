import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/bitcoin.svg" alt="Dogecoin" />,
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <Icon component="img" src="/icons/solana.svg" alt="Dogecoin" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <Icon component="img" src="/icons/ethereum.svg" alt="Dogecoin" />,
  },
  {
    symbol: "SHIB",
    name: "Shiba Inu",
    icon: <Icon component="img" src="/icons/shiba-inu.svg" alt="Dogecoin" />,
  },
];
