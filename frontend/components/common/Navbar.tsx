import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Navbar: NextPage = ({}) => {
  return (
    <header className="w-full  absolute z-10 ">
      <nav className="max-w-[1440px] border-b-2 border-grayish mx-auto flex justify-between sm:px-16 px-6 py-4">
        <Menu>
          <MenuButton
            className={"md:hidden inline-flex items-center gap-2 rounded-md"}
          >
            <Image src={"/icon-menu.svg"} alt="menu" width={24} height={24} />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className={
              "flex flex-col gap-3 p-8 w-40 min-h-screen origin-right rounded-lg shadow-lg text-sm/6 transition duration-500 ease-out [--anchor-gap:var(--spacing-1)]"
            }
          >
            <MenuItem>
            <Link href={"/"} className="Navbar__nav-link">
            Login
          </Link>
            </MenuItem>
            <MenuItem>
            <Link href={"/"} className="Navbar__nav-link">
            Register
          </Link>
            </MenuItem>
            <MenuItem>
            <Link href={"/"} className="Navbar__nav-link">
            About
          </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
        <div>
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/icon-notes.svg"
                alt="Notes logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <span className=" ml-1 font-semibold text-[24px] text-black">
                NoteApp
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden gap-2 md:flex">
          <Link href={"/auth/login"} className="Navbar__nav-link">
            Login
          </Link>
          <Link href={"/auth/register"} className="Navbar__nav-link">
            Register
          </Link>
          <Link href={"/"} className="Navbar__nav-link">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
