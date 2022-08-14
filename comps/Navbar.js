import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" width={161} height={32} />
        </Link>
      </div>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/market">
        <a className={router.pathname === "/market" ? "active" : ""}>Market</a>
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
    </nav>
  );
};

export default Navbar;
