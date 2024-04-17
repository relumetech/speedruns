import { Header26 } from "@/components/Header26";
import { Layout236 } from "@/components/Layout236";
import { Logo1 } from "@/components/Logo1";
import { Navbar2 } from "@/components/Navbar2";
import { HiArrowNarrowRight, HiArrowRight } from "react-icons/hi";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar2
        logo={{ src: "/logo-vesto.svg" }}
        links={[
          {
            title: "Products",
            url: "#",
            subLinks: [
              { title: "Yield", url: "#" },
              { title: "Cash Positioning", url: "#" }
            ],
          },
          { title: "Customers", url: "#" },
          { title: "Blog", url: "#" },
          { title: "About", url: "#" },
          
        ]}
        buttons={[
          {
            title: "Sign in",
            size: "sm",
            variant: "tertiary"
          },
          {
            title: "Schedule a demo",
            size: "sm",
            variant: "primary"
          },
        ]}
      />
      <Header26 
        heading="All of your company's financial accounts in one view" 
        description="Connect and control all of your global business accounts from one dashboard." 
        buttons={[
          {
            title: "Schedule a demo",
            variant: "primary",
            iconRight: <HiArrowRight />

          },
        ]}
        image={{
          src: "/hero.png",
          alt: "Vesto Accounting software screenshot"
        }}
      />
      <Logo1 />
      <Layout236 />
    </main>
  );
}
