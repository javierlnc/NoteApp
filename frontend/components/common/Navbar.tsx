import { NextPage } from "next";
import Image from "next/image";

const Navbar: NextPage = ({}) => {
  return (
    <header className="w-full  absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4">
        <div>
          <Image
            src="/logo.svg"
            alt="sneakers logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
