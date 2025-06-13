"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const Services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.',
    href: ""
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.',
    href: ""
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.',
    href: ""
  },
]

import { motion } from "framer-motion";

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: {delay:
          2.4, duration: 0.4, ease: "easeIn"}
        }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            
        >

          {Services.map((service, index)=> {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex items-center gap-60">
                <div className="text-5xl font-extrabold text-outline
                 text-transparent  group-hover:text-luke transition-all
                 duration-500">
                  {service.num}</div>
                <Link 
                href={service.href}
                className="w-[78px] h-[70px] rounded-full bg-white
                group-hover:bg-luke transition-all duration-500 flex
                justify-center items-center hover:-rotate-45"
                
                >
                  <BsArrowDownRight className="text-background text-3xl"/>
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-luke transition-all duration-500">
                {service.title}
                </h2>
              {/*description*/}
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 2-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default services
