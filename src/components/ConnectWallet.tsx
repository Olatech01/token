import React from "react";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const ConnectWallet: React.FC = () => {
  return (
    <>
      <div className="w-full rounded-lg border border-green-500 p-5 mb-5">
        <div
          className="text-2xl font-semibold text-center"
          style={{
            background:
              "linear-gradient(45deg, #14f195 0, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          To access the Dapp, please connect your wallet.
        </div>
        <WalletMultiButtonDynamic
          className="ml-auto mr-auto btn-sm hover:text-green-600 rounded-btn text-base mt-5 hover:"
          style={{
            background:
              "linear-gradient(45deg, #14f195, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff)",
          }}
        />
      </div>
    </>
  );
};
