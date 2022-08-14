import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="infoContainer">
        <div>
          <Image src="/Logo.png" width={161} height={32} />
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            tristique placerat eleifend aliquam pellentesque facilisis ultrices.
            Imperdiet mus urna egestas at tellus.
          </div>
        </div>
        <div>
            <div className="infoHeader">About</div>
            <div className="infoLinks">
            <Link href='/'><a>About Us</a></Link>
            <Link href='/'><a>Our Services</a></Link>
            <Link href='/'><a>How It Works</a></Link>
            <Link href='/'><a>Support</a></Link>
            <Link href='/'><a>Become a Partner</a></Link>
            </div>
        </div>
        <div>
            <div className="infoHeader">Comunity</div>
            <div className="infoLinks">
            <Link href='/'><a>Token</a></Link>
            <Link href='/'><a>Discussion</a></Link>
            <Link href='/'><a>Voting</a></Link>
            <Link href='/'><a>Blog</a></Link>
            <Link href='/'><a>Help Center</a></Link>
            </div>
        </div>
        <div>
            <div className="infoHeader">Social Media</div>
            <div className="infoLinks">
            <Link href='/'><a>Facebook</a></Link>
            <Link href='/'><a>Instagram</a></Link>
            <Link href='/'><a>Twitter</a></Link>
            </div>
        </div>
      </div>
      <div className="condition">
        <div>Privacy Policy</div>
        <div>Terms and Condition</div>
        <div className="copyright">Copyright Tanah Air Studio</div>
      </div>
    </footer>
  );
};

export default Footer;
