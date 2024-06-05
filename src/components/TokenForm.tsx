import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa6";


function TokenForm() {
  const [description, setDescription] = useState("");
  const [tokenName, setTokenName] = useState("")
  const [symbol, setSymbol] = useState("")
  const [urls, setUrls] = useState({
    website: "",
    twitter: "",
    telegram: "",
    discord: "",
    youtube: "",
    tiktok: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUrls((prevUrls) => ({ ...prevUrls, [name]: value }));
  };
  
  return (
    <div className="flex items-start w-full gap-8">
      <div className="lg:w-[50%] w-full">
        <form action="">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="" className="text-[14px] text-white">
              Token Name (ex.Eonify)
            </label>
            <input
              type="text"
              className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
              placeholder="Token Name"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="" className="text-[14px] text-white">
              Symbol (Max 5, ex. ENF)
            </label>
            <input
              type="text"
              className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
              placeholder="Symbol Name"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="text-[14px] text-white">
              Description (Optional)
            </label>
            <textarea
              name=""
              className=" outline-none text-white bg-transparent mt-[6px] w-full  rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
              placeholder="Description"
              required
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols={30}
              rows={6}
            ></textarea>
          </div>
          </div>

          <div className="pt-10">
            <label htmlFor="" className="text-[14px] text-white">
              Extensions (Optional)
            </label>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
                placeholder="Webiste URL"
                value={urls.website}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
                placeholder="Twitter URL"
                value={urls.twitter}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
                placeholder="Telegram Group URL"
                name="telegram"
                value={urls.telegram}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
                placeholder="Discord URL"
                value={urls.discord}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
                placeholder="Youtube URL"
                value={urls.youtube}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className=" outline-none text-white bg-transparent mt-[6px] w-full h-10 sm:h-11 rounded-lg text-[14px] pl-3 sm:pl-[14px] border border-green-500"
                placeholder="Tiktok URL"
                value={urls.tiktok}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div className="lg:w-[50%] w-full">
        <div className="flex items-center gap-3">
          <div>
            image
            {/* image selected in the file input field will be displayed here and will also display on the input field */}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-[14px] text-white">
              {tokenName}
            </h2>
            <h2 className="font-semibold text-[14px] text-white">
              {symbol}
            </h2>
          </div>
        </div>

        <div
          className="text-2xl pt-6 font-bold"
          style={{
            background:
              "linear-gradient(45deg, #14f195 0, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Social Channels
        </div>

        <div>
          {urls.website && <a href={urls.website} target="_blank" rel="noopener noreferrer"><img src="/path/to/website-logo.png" alt="Website" /></a>}
          {urls.twitter && <a href={urls.twitter} target="_blank" rel="noopener noreferrer"><img src="/path/to/twitter-logo.png" alt="Twitter" /></a>}
          {urls.telegram && <a href={urls.telegram} target="_blank" rel="noopener noreferrer"><FaTelegram /></a>}
          {urls.discord && <a href={urls.discord} target="_blank" rel="noopener noreferrer"><img src="/path/to/discord-logo.png" alt="Discord" /></a>}
          {urls.youtube && <a href={urls.youtube} target="_blank" rel="noopener noreferrer"><img src="/path/to/youtube-logo.png" alt="YouTube" /></a>}
          {urls.tiktok && <a href={urls.tiktok} target="_blank" rel="noopener noreferrer"><img src="/path/to/tiktok-logo.png" alt="TikTok" /></a>}
        </div>

        <p className="font-semibold text-[14px] pt-6 text-white flex gap-1">
          <p>{description}</p>
        </p>

        <div className="flex flex-col gap-3 pt-10 text-white">
          <div className="flex items-center gap-3">
            <span>Mint Authority :</span>
            <p>Disabled</p>
          </div>
          <div className="flex items-center gap-3">
            <span>Update Authority :</span>
            <p>Disabled</p>
          </div>
          <div className="flex items-center gap-3">
            <span>Freeze Authority :</span>
            <p>Disabled</p>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex items-center gap-3 text-white">
            <span> Tags :</span>
            <p>Memecoin</p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-[13px]">Special Image (ex. Square size 128*128 or larger is recommended - max 1MB) </h2>
          <div className="border border-green-500 h-[20vh] flex items-center justify-center rounded-2xl">
            <input type="file" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <label htmlFor="">Token decimals</label>
          <input type="text" className="border-green-500 border bg-transparent py-2 rounded-xl"/>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <label htmlFor="">Supply</label>
          <input type="text" className="border-green-500 border bg-transparent py-2 rounded-xl"/>
        </div>
        <div className="text-white flex flex-col gap-2">
          <h2>OPtions</h2>
          <div className="flex items-center gap-3">
            <div className="relative inline-block w-8 h-4 cursor-pointer rounded-full">
              <input
                type="checkbox"
                id=":r0:"
                className="peer appearance-none w-8 h-4 absolute bg-gray-400 rounded-full cursor-pointer transition-colors duration-300 checked:bg-green-500 peer-checked:border-gray-900 peer-checked:before:bg-gray-900 switch-material"
              />
              <label
                htmlFor=":r0:"
                className="bg-white w-5 h-5 border border-blue-gray-100 rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              >
                <div
                  className="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full"
                  style={{ position: "relative", overflow: "hidden" }}
                ></div>
              </label>
            </div>
            <h2>Revoke Freeze Authority</h2>
          </div>
          <div  className="flex items-center gap-3">
            <div className="relative inline-block w-8 h-4 cursor-pointer rounded-full">
              <input
                type="checkbox"
                id=":r0:"
                className="peer appearance-none w-8 h-4 absolute bg-gray-400 rounded-full cursor-pointer transition-colors duration-300 checked:bg-green-500 peer-checked:border-gray-900 peer-checked:before:bg-gray-900 switch-material"
              />
              <label
                htmlFor=":r0:"
                className="bg-white w-5 h-5 border border-blue-gray-100 rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              >
                <div
                  className="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full"
                  style={{ position: "relative", overflow: "hidden" }}
                ></div>
              </label>
            </div>
            <h2>Revoke Mint Authority (Fixed Supply)</h2>
          </div>
          <div  className="flex items-center gap-3">
            <div className="relative inline-block w-8 h-4 cursor-pointer rounded-full">
              <input
                type="checkbox"
                id=":r0:"
                className="peer appearance-none w-8 h-4 absolute bg-gray-400 rounded-full cursor-pointer transition-colors duration-300 checked:bg-green-500 peer-checked:border-gray-900 peer-checked:before:bg-gray-900 switch-material"
              />
              <label
                htmlFor=":r0:"
                className="bg-white w-5 h-5 border border-blue-gray-100 rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              >
                <div
                  className="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full"
                  style={{ position: "relative", overflow: "hidden" }}
                ></div>
              </label>
            </div>
            <h2>Revoke Metadata Update Authority (Make it immutable)</h2>
          </div>
        </div>
        <button className="text-white style={{background: 'linear-gradient(45deg, #14f195, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff)'}}">Create Token</button>
      </div>
    </div>
  );
}

export default TokenForm;
