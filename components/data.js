import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  NewspaperIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/announce.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Informasi Ibadah Sepekan",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Ibadah Umum",
      desc: "Hari Minggu: 09.00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Keluarga",
      desc: "Hari Rabu: 19.00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Pelkat PA",
      desc: "Hari Minggu: 09.00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Pelkat PT",
      desc: "Hari Minggu: 09.00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Pelkat GP",
      desc: "Hari Minggu: 09:00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Pelkat PKB",
      desc: "Hari Kamis: 19.00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Pelkat PKP",
      desc: "Hari Selasa: 19.00 WIB.",
      icon: <NewspaperIcon />,
    },
    {
      title: "Ibadah Pelkat PKLU",
      desc: "Hari Senin: 19.00 WIB.",
      icon: <NewspaperIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
