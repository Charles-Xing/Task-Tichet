import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4 text-white">
        <Link href="/">
          <AiOutlineHome className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <HiOutlineTicket className="icon"/>
        </Link>
      </div>
      <div>
        <p className=" text-default-text">Welcome</p>
      </div>
    </nav>
  );
};

export default Nav;
