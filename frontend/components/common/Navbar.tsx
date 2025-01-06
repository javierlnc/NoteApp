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
              "flex flex-col w-40 min-h-screen origin-right rounded-lg shadow-lg p-1 text-sm/6 transition duration-500 ease-out [--anchor-gap:var(--spacing-1)]"
            }
          >
            <MenuItem>
              <Link href={"/"}>Collections</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/"}>Men</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/"}>Women</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/"}>About</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/"}>Contac</Link>
            </MenuItem>
          </MenuItems>
        </Menu>
        <div>
          <Image
            src="/icon-notes.svg"
            alt="Notes logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="hidden md:flex">
          <Link href={"/"}>Collections</Link>
          <Link href={"/"}>Men</Link>
          <Link href={"/"}>Women</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contac</Link>
        </div>
        <div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
