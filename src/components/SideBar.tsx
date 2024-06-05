import React, {useState} from "react";
import TokenIcon from '@mui/icons-material/Token';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NavElement from './nav-element';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
export const SideBar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return(
        <>
            <div className="py-5 hidden lg:flex flex-col w-[350px] min-h-screen">
                <img src="/logo.svg" alt="logo" className="w-[100px] ml-auto mr-auto"/>
                <div className="mt-10 flex flex-col space-y-10 text-white text-base font-semibold mx-10">
                    <div className="flex items-center space-x-4  cursor-pointer hover:text-green-500">
                        <TokenIcon />
                        <NavElement
                            label="Token Creator"
                            href="/"
                            navigationStarts={() => setIsNavOpen(false)}
                        />
                    </div>
                    <div className="flex items-center space-x-4 cursor-pointer hover:text-green-500">
                        <SettingsIcon />
                        <NavElement
                            label="Token Manager"
                            href="/basics"
                            navigationStarts={() => setIsNavOpen(false)}
                        />
                    </div>
                    <div className="flex items-center space-x-4 cursor-pointer hover:text-green-500">
                        <RocketLaunchIcon />
                        <NavElement
                            label="Launch Your Token"
                            href="/"
                            navigationStarts={() => setIsNavOpen(false)}
                        />
                    </div>
                    <div className="flex items-center space-x-4 cursor-pointer hover:text-green-500">
                        <SwapHorizIcon />
                        <NavElement
                            label="Swap"
                            href="/"
                            navigationStarts={() => setIsNavOpen(false)}
                        />
                    </div>
                </div>
                <div className="mt-auto flex flex-col space-y-10 mb-5 text-white text-base font-semibold mx-10">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={1} className="flex items-center space-x-4  cursor-pointer hover:text-green-500">
                            <PeopleIcon />
                            <p>Community</p>
                        </div>
                        <ul tabIndex={1} className="p-2 shadow menu dropdown-content left-36 bottom-0 bg-gray-700 rounded-box sm:w-36">
                            <li>
                                <div className="form-control bg-opacity-100 flex flex-row">
                                    <label className="cursor-pointer label hover:text-green-500">
                                        <TelegramIcon />
                                        <a href="https://t.me/+zzQAGDSSyBplOTI8" target="_blank" rel="noreferrer" className="ml-4">Telegram</a>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-control bg-opacity-100 flex flex-row">
                                    <label className="cursor-pointer label hover:text-green-500">
                                        <XIcon />
                                        <a href="https://twitter.com/Eonify_web3" target="_blank" rel="noreferrer" className="ml-4">Twitter</a>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-control bg-opacity-100 flex flex-row">
                                    <label className="cursor-pointer label hover:text-green-500">
                                        <EmailIcon />
                                        <a href="mailto:support@eonify.space" target="_blank" rel="noreferrer" className="ml-4">Mail</a>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4 cursor-pointer hover:text-green-500">
                        <AssignmentIcon />
                        <p>Docs</p>
                    </div>
                </div>
            </div>
        </>
    )
}
