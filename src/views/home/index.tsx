// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { ConnectWallet } from "components/ConnectWallet";

// Components
import { RequestAirdrop } from "../../components/RequestAirdrop";
import pkg from "../../../package.json";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";
import TokenCreator from "components/TokenCreator";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="flex flex-col gap-5">
       <TokenCreator /> 
      <div className="w-full rounded-lg border border-green-500 p-5">
        <div
          className="text-2xl font-semibold"
          style={{
            background:
              "linear-gradient(45deg, #14f195 0, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Create your own Solana Token
        </div>
        <div className="text-base font-medium text-white mt-5">
          Creating a Solana Token is a breeze with our straightforward process –
          no coding skills needed. Tailor your Solana Token to perfection in
          less than 5 minutes and at a budget-friendly price.
        </div>
        <div
          className="text-xl font-semibold mt-10"
          style={{
            background:
              "linear-gradient(45deg, #14f195 0, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          How to use our Solana Token Creator ?
        </div>
        <div className="text-base font-medium text-white mt-5 flex flex-col space-y-1">
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Connect your Solana wallet.</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>
              Choose the desired network (Devnet or mainnet) by clicking on the
              settings icon in the upper right corner
            </div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Name your Token</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Choose a symbol (max 5 characters).</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Select the number of decimals (from 0 to 9).</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Add a brief description.</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Upload your token logo (PNG).</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>Set the token Supply.</div>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div>
              Click on &quot;Create your token&quot;, confirm the transaction,
              and await your tokens.
            </div>
          </div>
        </div>
        <div className="text-base font-medium text-white mt-5">
          The token creation fee is 0.3 SOL, covering all SPL Token Creation
          expenses. The process is quick, taking only a few seconds once
          initiated. Upon completion, you&quot;ll find the total token supply in
          your wallet. 🎉
        </div>
        <div className="text-base font-medium text-white mt-5">
          Manage your token effortlessly through your wallet, adjusting supply
          or freezing it as necessary. Enjoy the simplicity and
          cost-effectiveness of Solana Token creation with our user-friendly
          platform.
        </div>
      </div>
    </div>
  );
};
