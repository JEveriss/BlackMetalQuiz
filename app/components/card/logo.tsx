import Image from "next/image";
import image1 from "../../data/BlackMetalLogos/1.jpg";
import image2 from "../../data/BlackMetalLogos/2.jpg";
import image3 from "../../data/BlackMetalLogos/3.jpg";
import image4 from "../../data/BlackMetalLogos/4.jpg";
import image5 from "../../data/BlackMetalLogos/5.jpg";
import image6 from "../../data/BlackMetalLogos/6.jpg";
import image7 from "../../data/BlackMetalLogos/7.jpg";
import image8 from "../../data/BlackMetalLogos/8.jpg";
import image9 from "../../data/BlackMetalLogos/9.jpg";
import image10 from "../../data/BlackMetalLogos/10.jpg";
import image11 from "../../data/BlackMetalLogos/11.jpg";
import image12 from "../../data/BlackMetalLogos/12.jpg";
import image13 from "../../data/BlackMetalLogos/13.jpg";
import image14 from "../../data/BlackMetalLogos/14.jpg";
import image15 from "../../data/BlackMetalLogos/15.jpg";
import image16 from "../../data/BlackMetalLogos/16.jpg";
import image17 from "../../data/BlackMetalLogos/17.jpg";
import image18 from "../../data/BlackMetalLogos/18.jpg";
import image19 from "../../data/BlackMetalLogos/19.jpg";
import image20 from "../../data/BlackMetalLogos/20.jpg";
import image21 from "../../data/BlackMetalLogos/21.jpg";
import image22 from "../../data/BlackMetalLogos/22.jpg";
import image23 from "../../data/BlackMetalLogos/23.jpg";
import image24 from "../../data/BlackMetalLogos/24.jpg";
import image25 from "../../data/BlackMetalLogos/25.jpg";
import image26 from "../../data/BlackMetalLogos/26.jpg";
import styles from "./card.module.css";
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
];

type Props = { imageID: number; name: string };

export function Logo({ imageID, name }: Props) {
  return (
    <Image
      height={400}
      className={styles.image_wrapper}
      // layout="responsive"
      alt={name}
      src={images[imageID - 1]}
    ></Image>
  );
}
