import { CgMail } from "react-icons/cg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

export function Footer() {
    return (
        <footer>
            <div className=" flex flex-col md:flex-row justify-center items-center md:justify-around font-semibold gap-4 p-4 bg-zinc-100 w-full ">
                Paisagens
                <nav>
                    <ul className="flex gap-4">
                        <li className="size-8 p-1 bg-zinc-300 rounded-full cursor-pointer hover:bg-zinc-700 hover:text-white" >
                            <a className="mx-auto size-full flex items-center justify-center"
                                href="https://www.instagram.com/walassi_silva/" target="_blank"><FaInstagram /></a>
                        </li>
                        <li className="size-8 p-1 bg-zinc-300 rounded-full cursor-pointer hover:bg-zinc-700 hover:text-white">
                            <a className="mx-auto size-full flex items-center justify-center"
                                href="https://www.youtube.com/" target="_blank"><AiOutlineYoutube /></a>
                        </li>
                        <li className="size-8 p-1 bg-zinc-300 rounded-full cursor-pointer hover:bg-zinc-700 hover:text-white">
                            <a className="mx-auto size-full flex items-center justify-center"
                                href="https://wa.me/+553186482092" target="_blank"><FaWhatsapp /></a>
                        </li>
                        <li className="size-8 p-1 bg-zinc-300 rounded-full cursor-pointer hover:bg-zinc-700 hover:text-white">
                            <a className="mx-auto size-full flex items-center justify-center"
                                href="" target="_blank"><CgMail /></a>
                        </li>
                    </ul>


                </nav>
                <div>
                    <span>Copyright © 2024 - <a className="underline" href="https://www.linkedin.com/in/walassi-silva"
                        target="_blank">WalassiSilva</a></span>
                </div>
            </div>
        </footer>
    )
}