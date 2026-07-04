import React from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import {IoIosArrowRoundForward} from "react-icons/io";
import Image from "next/image";
import {cn} from "@/lib/utils";

const projectsData = [
  {
    id: 1,
    name: "Shining Wing",
    live: "shining-wing.vercel.app",
    github: "https://github.com/herihermansyah/shining-wing",
    thumbnail: "/shiningwing.png",
    about:
      "Small shoe store with a good reputation (quality, elegant, polished), mainly targeting millennials.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "Motion"},
      {id: 1.3, name: "swiper"},
      {id: 1.4, name: "tailwindCss"},
      {id: 1.5, name: "typescript"},
    ],
  },
  {
    id: 2,
    name: "Movie Finder OMDB",
    live: "https://movie-finder-omdb-five.vercel.app/",
    github: "https://github.com/herihermansyah/movie-finder-omdb",
    thumbnail: "/moviefinder.png",
    about:
      "Movie Finder OMDB — a fast and responsive movie search app built with Next.js and TypeScript. Powered by OMDB API, TailwindCSS, Axios, and Framer Motion for smooth and interactive UI.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "Motion"},
      {id: 1.3, name: "axios"},
      {id: 1.4, name: "tailwindCss"},
      {id: 1.5, name: "typescript"},
      {id: 1.6, name: "mui/material"},
    ],
  },
  {
    id: 3,
    name: "Next.js FakeStore E-Commerce",
    live: "https://fakestore-ecommerce-bice.vercel.app/",
    github: "https://github.com/herihermansyah/next.js-fakeStore-e-commerce",
    thumbnail: "/fakestore.png",
    about:
      "Next.js FakeStore E-Commerce A frontend practice project built with Next.js and DummyJSON. Includes product listing, product detail, cart page, and dummy checkout. Uses Tailwind, shadcn, Swiper, Axios, and Lucide icons to create a simple e-commerce experience.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.3, name: "axios"},
      {id: 1.4, name: "tailwindCss"},
      {id: 1.5, name: "typescript"},
    ],
  },
  {
    id: 4,
    name: "Next Analytics Dashboard",
    live: "https://next-analytics-dashboard-rosy.vercel.app/",
    github: "https://github.com/herihermansyah/next-analytics-dashboard",
    thumbnail: "/dashboard.png",
    about:
      "next-analytics-dashboard is an analytics admin dashboard built with Next.js, TailwindCSS, Recharts, Axios, and Framer Motion. It delivers interactive data visualizations, smooth animations, and a fully responsive layout for a modern analytics experience.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.3, name: "axios"},
      {id: 1.4, name: "tailwindCss"},
      {id: 1.5, name: "typescript"},
      {id: 1.5, name: "zod"},
      {id: 1.6, name: "motion"},
      {id: 1.7, name: "next-themes"},
    ],
  },
  {
    id: 5,
    name: "Enterprise Auth Prisma Boilerplate",
    live: "https://enterprise-auth-prisma-boilerplate.vercel.app/",
    github:
      "https://github.com/herihermansyah/enterprise-auth-prisma-boilerplate",
    thumbnail: "/auth.png",
    about:
      "A Production-ready Next.js 15 Authentication system featuring Auth.js v5, Prisma ORM, and Upstash Redis Rate-Limiting. Implemented with Role-Based Access Control (RBAC) and Middleware security layers.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.3, name: "axios"},
      {id: 1.4, name: "tailwindCss"},
      {id: 1.5, name: "typescript"},
      {id: 1.5, name: "zod"},
      {id: 1.6, name: "next-auth"},
      {id: 1.7, name: "next-themes"},
      {id: 1.8, name: "tailwind-merge"},
      {id: 1.9, name: "class-variance-authority"},
    ],
  },
  {
    id: 6,
    name: "Minimize Landing Page",
    live: "https://minimize-landing-page.vercel.app/",
    github: "https://github.com/herihermansyah/Minimize-Landing-Page",
    thumbnail: "/nexcent.png",
    about:
      "A modern landing page implementation, converted from Figma design to clean code using Next.js and Tailwind CSS. Focused on design precision and high performance.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
      {id: 1.4, name: "motion"},
    ],
  },
  {
    id: 7,
    name: "Traveling Landing Page (Figma to Next.js)",
    live: "https://landing-page-travelling.vercel.app/",
    github: "https://github.com/herihermansyah/landing-page-travelling",
    thumbnail: "/salty.png",
    about:
      "A high-performance, pixel-perfect landing page conversion built with the latest web technologies. This project focuses on translating complex Figma designs into a clean, responsive, and SEO-friendly user interface.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
      {id: 1.4, name: "swiper"},
    ],
  },
  {
    id: 8,
    name: "modern financial landing page",
    live: "https://finance-landing-page-five.vercel.app/",
    github: "https://github.com/herihermansyah/finance-landing-page",
    thumbnail: "/finanxe.png",
    about:
      "Modern Finance Landing Page built with Next.js 16 (App Router), React 19, and Tailwind CSS 4. Focused on high performance, clean UI, and SEO-friendly architecture.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
    ],
  },
  {
    id: 9,
    name: "Cafe Street Landing Page",
    live: "https://cafe-street-landing-page.vercel.app/",
    github: "https://github.com/herihermansyah/cafe-street-landing-page",
    thumbnail: "/cafe.png",
    about:
      "A modern, responsive Cafe Landing Page built with Next.js 16, Tailwind CSS 4, and Shadcn UI.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
      {id: 1.4, name: "shadcn"},
      {id: 1.5, name: "tailwind-merge"},
    ],
  },
  {
    id: 10,
    name: "Banquee - SaaS & Bank Website",
    live: "https://banquee-sass-and-bank-website.vercel.app/",
    github: "https://github.com/herihermansyah/banquee-sass-and-bank-website",
    thumbnail: "/banquee.png",
    about:
      "A high-performance banking platform interface crafted for speed and responsiveness. Built using the latest Next.js 16 and Tailwind CSS 4, featuring a modular component architecture with Radix UI and Shadcn.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
      {id: 1.4, name: "shadcn"},
      {id: 1.5, name: "tailwind-merge"},
    ],
  },
  {
    id: 11,
    name: "Modern Education Landing Page",
    live: "https://education-website-landing-page-eta.vercel.app/",
    github: "https://github.com/herihermansyah/education-website-landing-page",
    thumbnail: "/educare.png",
    about:
      "Education Landing Page – A modern, high-performance, and fully responsive educational platform landing page. Built with Next.js 16, TypeScript, and Tailwind CSS 4. Featuring a clean UI powered by Shadcn UI and smooth animations with tw-animate-css.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
      {id: 1.4, name: "shadcn"},
      {id: 1.5, name: "tailwind-merge"},
    ],
  },
  {
    id: 12,
    name: "Monito Pets E-commerce",
    live: "https://monito-pets-ecommerce.vercel.app/",
    github: "https://github.com/herihermansyah/monito-pets-ecommerce",
    thumbnail: "/monito.png",
    about:
      "Monito Pets E-commerce is a modern web application designed for a seamless shopping experience. Built with a focus on performance and scalability, it features a fully responsive UI and utilizes the latest React 19 capabilities.",
    tech: [
      {id: 1.1, name: "NextJs"},
      {id: 1.2, name: "tailwindCss"},
      {id: 1.3, name: "typescript"},
      {id: 1.4, name: "tailwind-merge"},
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-15">
      <Wrapper className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-charcoal-gray-100 capitalize">
            Projects
          </h2>
          <Link
            href={"/projects"}
            className="text-orange/80 font-semibold flex items-center gap-1 capitalize"
          >
            <span>See all projects</span>
            <span>
              <IoIosArrowRoundForward size={25} />
            </span>
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            {projectsData.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "border border-charcoal-gray rounded-xl p-4 flex flex-col gap-2 items-center justify-center",
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-md w-50 h-50 bg-purple border-2 border-orange flex items-center justify-center",
                    item.id % 2 === 0 && "bg-orange",
                    "p-4"
                  )}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="object-cover object-top rounded-md"
                    priority
                  />
                </div>
                <h3 className="text-[18px] text-charcoal-gray-100 line-clamp-1 font-semibold text-center">
                  {item.name}
                </h3>
                <p className="text-[14px] text-charcoal-gray/50 line-clamp-3 text-center">
                  {item.about}
                </p>
                <div className="flex items-center justify-between gap-5">
                  <Link
                    href={item.live}
                    className="text-clear-off-white bg-purple rounded-md text-[10px] font-bold p-1.5 capitalize"
                  >
                    live demo
                  </Link>
                  <Link
                    href={item.github}
                    className="text-clear-off-white bg-orange rounded-md text-[10px] font-bold p-1.5 capitalize"
                  >
                    github
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
