import Image1 from "../assets/image6.png"
import Image2 from "../assets/image4.png"
import Image3 from "../assets/image5.png"
import Image4 from "../assets/image3.png"

type Collection = {
  image: string;
  name: string;
  rate: number;
}

const Collections: Collection[] = [
  {
    image: `${Image1}`,
    name: "Cyber Punk",
    rate: 68,
  },
  {
    image: `${Image2}`,
    name: "Durolost Ball - Uper",
    rate: 68,
  },
  {
    image: `${Image3}`,
    name: "Space X Wipper",
    rate: 68,
  },
  {
    image: `${Image4}`,
    name: "Snoop Dogg",
    rate: 68,
  },
]

export default Collections;