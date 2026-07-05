import {
  CanvaOriginal,
  Css3Plain,
  FigmaOriginal,
  FramermotionOriginal,
  GithubOriginal,
  Html5Plain,
  JavascriptOriginal,
  NextjsOriginal,
  PhotoshopOriginal,
  ReactOriginal,
  SwiperOriginal,
  TailwindcssOriginal,
  VercelOriginal,
  VscodeOriginal,
} from "devicons-react";

export interface SkillsType {
  name: string;
  icon: React.ElementType;
}

export const langugeData: SkillsType[] = [
  {name: "Javascript", icon: JavascriptOriginal},
  {name: "html", icon: Html5Plain},
  {name: "css", icon: Css3Plain},
];

export const frameworkData: SkillsType[] = [
  {name: "react", icon: ReactOriginal},
  {name: "nextjs", icon: NextjsOriginal},
];

export const stylingData: SkillsType[] = [
  {name: "tailwindcss", icon: TailwindcssOriginal},
  {name: "motion", icon: FramermotionOriginal},
  {name: "swiper", icon: SwiperOriginal},
];

export const developmentData: SkillsType[] = [
  {name: "vs code", icon: VscodeOriginal},
  {name: "github", icon: GithubOriginal},
  {name: "vercel", icon: VercelOriginal},
];

export const designToolsData: SkillsType[] = [
  {name: "figma", icon: FigmaOriginal},
  {name: "canva", icon: CanvaOriginal},
  {name: "photoshop", icon: PhotoshopOriginal},
];
