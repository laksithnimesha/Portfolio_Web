import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
       xl:pt-8 xl:pb-24">
          
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 font-semibold">
              Hello I'm <br /> <span className="text-luke"> Berry Allan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-foreground/80">
              I’m a motivated Software Engineer with hands-on 
              experience in web development using HTML, CSS,
               JavaScript, React.js, PHP, and MySQL. 
            </p>
            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" 
              size="lg" 
              className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-luke rounded-full flex justify-center items-center
                text-luke text-base hover:bg-luke hover:text-background hover:transition all duration-500"/>
              </div>
            </div>
          </div>
            {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
