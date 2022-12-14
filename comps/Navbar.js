import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/Logo.png" width={161} height={32} />
        </Link>
      </div>
      <div className={open? "dark-screen" : "not-active"} onClick={()=>{setOpen(false)}}></div>
      <div className={open? "links open" : "links"}>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/market">
          <a className={router.pathname === "/market" ? "active" : ""}>
            Market
          </a>
        </Link>
        <Link href="/explore">
          <a className={router.pathname === "/explore" ? "active" : ""}>
            Explore
          </a>
        </Link>
        <Link href="/explore">
          <a className={router.pathname === "/explore" ? "active" : ""}>
            Exhibition
          </a>
        </Link>
        <Link href="/explore">
          <a className={router.pathname === "/explore" ? "active" : ""}>
            Artist & Collectors
          </a>
        </Link>
        <Link href="/explore">
          <a className={router.pathname === "/explore" ? "active" : ""}>
            Community <Image src="/Vector.png" width={17.41} height={10.12} />
          </a>
        </Link>
        <Link href="/explore">
          <a className="btn">Connect Wallet</a>
        </Link>
      </div>
      <div className="hamburger">
        <Image src="/navbar-hamburger.png" width={60} height={50} onClick={()=>{setOpen(!open)}} />
      </div>
    </nav>
  );
};

export default Navbar;
