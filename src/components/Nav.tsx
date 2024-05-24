import { useState } from "react"
import { AiOutlineYoutube } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaBars, FaInstagram, FaTimes, FaWhatsapp } from "react-icons/fa";

function NavLinks() {
  return (
    <>
      <a className="px-2 py-1 rounded-md  hover:bg-white hover:text-[#df1b1b]" href="#home">Home</a>
      <a className="px-2 py-1 rounded-md  hover:bg-white hover:text-[#df1b1b]" href="#about">Sobre</a>
      <a className="px-2 py-1 rounded-md  hover:bg-white hover:text-[#df1b1b]" href="#projects">Trabalhos</a>
      <a className="px-2 py-1 rounded-md  hover:bg-white hover:text-[#df1b1b]" href="#feedbacks">Feedbacks</a>
    </>
  )
}

function Contacts() {
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  function toggleContacts() {
    setIsContactsOpen(!isContactsOpen);
  }
  return (
    <div>
      <button className="flex items-center gap-1 px-2 py-1 text-end rounded-lg hover:bg-[#df1b1b] hover:text-white "
        onClick={toggleContacts}>
          < BiChevronDown className="rotate-90 md:rotate-0" />
        <p>Contatos</p>
        <ul className="relative">
          {isContactsOpen &&
            (
              <div className="flex flex-col gap-3 right-28 text-xl -bottom-7 absolute text-white bg-[#df1b1b] rounded-md md:flex-row md:-bottom-[65px] md:right-[-10px] ">
                <a className="p-2 rounded-full hover:bg-white hover:text-[#df1b1b]" href="https://www.instagram.com/walassi_silva/" target="_blank"><FaInstagram /></a>
                <a className="p-2 rounded-full hover:bg-white hover:text-[#df1b1b]" href="https://www.youtube.com/" target="_blank"><AiOutlineYoutube /></a>
                <a className="p-2 rounded-full hover:bg-white hover:text-[#df1b1b]" href="https://wa.me/+553186482092" target="_blank"><FaWhatsapp /></a>
                <a className="p-2 rounded-full hover:bg-white hover:text-[#df1b1b]" href="#" target="_blank"><CgMail /></a>
              </div>
            )}
        </ul>
      </button>
    </div>
  )
}

// flex gap-4 right-0 text-xl top-6 absolute text-white bg-rose-400 rounded-md
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="w-1/2 flex justify-end">
        <ul className="hidden w-full md:flex justify-between items-end relative" >
          <NavLinks />
          <Contacts />
        </ul>
        <div className="md:hidden ">
          <button onClick={toggleNavbar} >
            {isOpen ? <FaTimes className="size-8" /> : <FaBars className="size-8" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="dark:text-black flex flex-col items-end basis-full p-2 absolute right-1 top-14 ml-4 shadow border border-t-0 bg-white rounded-b-md">

          <div className="flex flex-col justify-center"
            onClick={() => setIsOpen(false)}>
            <NavLinks />
          </div>
          <Contacts />
        </div>
      )}
    </>
  )
}

