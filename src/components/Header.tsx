
import { Logo } from "./Logo";
import { Nav } from "./Nav";
export function Header() {

  return (

    <header className=" bg-white font-semibold px-4  rounded-md flex w-full flex-wrap sticky top-0 z-20 mx-auto  items-center justify-between shadow md:px-10">
      <Logo />
      <Nav />
    </header>
  )
}