import React from "react";
import TokenForm from "./TokenForm";

function TokenCreator() {
  return (
    <div className="w-full rounded-lg border border-green-500 p-5">
      <div className="flex md:flex-row flex-col md:items-center gap-4 md:justify-between">
        <div
          className="text-2xl font-bold"
          style={{
            background:
              "linear-gradient(45deg, #14f195 0, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Solana Token Creator
        </div>

        <div className="bg-[#181E25] relative flex items-center p-1 gap-4 rounded-lg">
          <button
            className=" btn-md hover:text-green-600 rounded-btn text-xl font-semibold  hover:"
            style={{
              background:
                "linear-gradient(45deg, #14f195, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff)",
            }}
          >
            SPL Token
          </button>
          <h2 className="text-xl hover:cursor-not-allowed font-semibold text-white text-opacity-20">
            SPL Token 2022
          </h2>
          <div className="absolute -top-3 -right-3 bg-[#00C6FF] px-2 rounded-2xl">
            Soon
          </div>
        </div>
      </div>

      <div
        className="text-2xl font-semibold"
        style={{
          background:
            "linear-gradient(45deg, #14f195 0, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff 100%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Token Information
      </div>

      <p className="text-base text-white mt-4 sm:mt-6">
        This information is stored on <strong>Arweave</strong> throught{" "}
        <strong>Bundlr</strong> + Metaplex Metadata Standard.
      </p>
      <div className="pt-6">
        <TokenForm />
      </div>
    </div>
  );
}

export default TokenCreator;
