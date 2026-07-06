import {VscDeveloperTools} from "react-icons/vsc";
import {
  GithubOriginal,
  VercelOriginal,
  FigmaOriginal,
  CanvaOriginal,
  PhotoshopOriginal,
  ReactOriginal,
  NextjsOriginal,
  AxiosPlain,
} from "devicons-react";
import {RiDashboardHorizontalLine} from "react-icons/ri";
import {RiDashboard2Line} from "react-icons/ri";
import {BsDatabaseCheck} from "react-icons/bs";

interface TeactType {
  iconTech: React.ElementType;
}

export interface ServiceTypes {
  icon: React.ElementType;
  name: string;
  description: string;
  tech: TeactType[];
}

export const serviceData: ServiceTypes[] = [
  {
    name: "WEB DEVELOPMENT",
    description:
      "Building responsive, high-performance, and scalable web applications using Next.js and React, focusing on clean code, modern architecture, and exceptional user experiences.",
    icon: VscDeveloperTools,
    tech: [{iconTech: GithubOriginal}, {iconTech: VercelOriginal}],
  },
  {
    name: "UI/UX DESIGN",
    description:
      "Crafting intuitive user interfaces and engaging digital experiences using Figma, transforming complex wireframes into pixel-perfect, accessible, and user-centric frontend layouts.",
    icon: RiDashboardHorizontalLine,
    tech: [
      {iconTech: CanvaOriginal},
      {iconTech: FigmaOriginal},
      {iconTech: PhotoshopOriginal},
    ],
  },
  {
    name: "PERFORMANCE",
    description:
      "Optimizing web performance to achieve flawless Lighthouse scores, fast loading times, and smooth rendering through code splitting, image optimization, and efficient rendering strategies.",
    icon: RiDashboard2Line,
    tech: [{iconTech: ReactOriginal}, {iconTech: NextjsOriginal}],
  },
  {
    name: "API INTEGRATION",
    description:
      "Connecting frontend interfaces with powerful backend services and third-party APIs using Axios to ensure seamless, asynchronous data fetching and dynamic content delivery.",
    icon: BsDatabaseCheck,
    tech: [{iconTech: AxiosPlain}],
  },
];
