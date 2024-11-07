import { Button } from "@/components/ui/button";

// components

import Photo from "@/components/Photo";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full scale-1">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello, I'm <br />{" "}
              <span className="text-accent">Kirill Amirov</span>
            </h1>
            <span className="text-xl ">Full-stack Developer</span>
            <p className="max-w-[500px] mb-9 text-white/80 mt-6">
              I am a freelance developer specializing in building seamless,
              high-performance web applications using Next.js and the latest
              technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link href="/work">My projects</Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <Link href="/contact">Connect with me</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
