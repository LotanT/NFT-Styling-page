import Head from "next/head";
import Image from "next/image";
import Bid from "../comps/homePage/Bid";
import Item from "../comps/homePage/Item";
import Work from "../comps/homePage/Work";
import styles from "../styles/Home.module.css";

export default function Home() {
  const item = {
    pic: "/imageToSell.png",
    header: "Geometrical heart-fire dispersion",
    itemDescription:
      "A fragmental dispersion of the heart. I used many photoshop geometrical brushes with different random size and opacity, in order to emphatize the contrast between front and background spaces, enhancing better the main subject exposure.",
    tags: [
      "Blue Color",
      "Cold",
      "Crypto Art",
      "Blue Filter",
      "Defragmentation",
      "Hexagon",
      "Light",
      "Motion",
      "Sparks",
      "Edition 1 of 1",
    ],
    artist: "CameronWill",
    owner: "Williamson",
    priceETH: 0.4435,
    priceUSD: 1.231,
  };
  return (
    <>
      <Head>
        <title>NFT page</title>
      </Head>
      <div>
        <Item item={item} />
        <div className={styles.containerBH}>
          <div className={styles.BHwidth}>
            <div className={styles.BidHistoryHeader}>
              <Image src="/HistoryIcon.png" width={24} height={24} />
              <div className={styles.BHTitle}>History</div>
              <div className={styles.BHArrow}>
                <Image src="/ArrowChevronUp.png" width={32} height={32} />
              </div>
            </div>
            <div>
              <Bid
                name="Cameron Williamson"
                src="/user1.png"
                bid="1"
                date="June 20 2021, 06:30 AM"
              />
              <Bid
                name="Esther Howard"
                src="/user2.png"
                bid="1.5"
                date="June 20 2021, 06:35 AM"
              />
              <Bid
                name="Jacob Jones"
                src="/user3.png"
                bid="1.7"
                date="June 20 2021, 06:47 AM"
              />
              <Bid
                name="Jenny Wilson"
                src="/user4.png"
                bid="1.4"
                date="June 20 2021, 06:55 AM"
              />
            </div>
          </div>
          <div className={styles.BHwidth}>
            <div className={styles.BidHistoryHeader}>
              <Image src="/ChartIcon.png" width={32} height={32} />
              <div className={styles.BHTitle}>Bids</div>
              <div className={styles.BHArrow}>
                <Image src="/ArrowChevronUp.png" width={32} height={32} />
              </div>
            </div>
            <div>
              <Bid
                name="Cameron Williamson"
                src="/user5.png"
                bid="1"
                date="June 20 2021, 06:30 AM"
              />
              <Bid
                name="Esther Howard"
                src="/user6.png"
                bid="1"
                date="June 20 2021, 06:30 AM"
              />
              <Bid
                name="Jenny Wilson"
                src="/user7.png"
                bid="1"
                date="June 20 2021, 06:30 AM"
              />
              <Bid
                name="Marvin McKinney"
                src="/user8.png"
                bid="1"
                date="June 20 2021, 06:30 AM"
              />
            </div>
          </div>
        </div>
        <div className={styles.moreWorksContainer}>
          <div className={styles.moreWorksHeaderContainer}>
            <div className={styles.moreWorksHeader}>
              More Works by CameronWill
            </div>
            <div className={styles.moreWorksBtn}>See All</div>
          </div>
          <div className={styles.moreWorks}>
            <Work
              src="/work1.png"
              tag="Pink"
              artist="Cameron Williamson"
              bid="0.4435"
              endTime="10h 12m 32s"
            />
            <Work
              src="/work2.png"
              tag="Joy"
              artist="Cameron Williamson"
              bid="0.4435"
              endTime="10h 12m 32s"
            />
            <Work
              src="/work3.png"
              tag="Ariel"
              artist="Cameron Williamson"
              bid="0.4435"
              endTime="10h 12m 32s"
            />
          </div>
        </div>
        <div className={styles.userEmailContainer}>
          <div className={styles.userEmailHeader}>
            Stay in the loop on CryptoArt and NFTs
          </div>
          <div className={styles.userEmaildec}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </div>
          <div className={styles.userEmailContact}>
            <input className={styles.userEmailInput} placeholder='Your Email'/>
            <div className={styles.userEmailBtn}>Subscribe</div>
          </div>
        </div>
      </div>
    </>
  );
}
