"use client";

import { Info } from 'lucide-react';
import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss, 
  SiNextdotjs 
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

// About data
const about = {
  title: 'About me',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.",
  info: [
    { fieldName: "Name", fieldValue: "Berry Allan" },
    { fieldName: "Phone", fieldValue: "(+94) 345 699 610" },
    { fieldName: "Experience", fieldValue: "12+ Years" },
    { fieldName: "Skype", fieldValue: "Berry Allan" },
    { fieldName: "Nationality", fieldValue: "American" },
    { fieldName: "Email", fieldValue: "1234@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English" },
  ]
};

// Experience data
const experience = {
  icon: 'assets/resume/badge.svg',
  title: 'My experience',
  description: "ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.",
  items: [
    { company: "Tech Solutions Inc.", position: "Full Stack Developer", duration: "2022 - Present" },
    { company: "E-commerce Startup", position: "Web Developer", duration: "2021 - 2022" },
    { company: "Creative Labs", position: "Frontend Developer", duration: "2020 - 2021" },
    { company: "Code Works", position: "Intern", duration: "2019 - 2020" },
  ]
};

// Education data
const education = {
  icon: 'assets/resume/cap.svg',
  title: 'My Education',
  description: "ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.",
  items: [
    { Institute: "Online Platform Course", Degree: "Full Stack Developer", duration: "2021 - Present" },
    { Institute: "SL Engineering", Degree: "Web Developer", duration: "2020 - 2021" },
    { Institute: "Tech Institute", Degree: "Frontend Development", duration: "2019 - 2020" },
    { Institute: "Techno Lab", Degree: "Computer Science", duration: "2017 - 2019" },
  ]
};

// Skills data
const skills = {
  title: "My Skills",
  description: "ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum, assumenda.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaFigma />, name: "figma" },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 text-white/60"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
  {[
    { label: 'Experience', value: 'experience' },
    { label: 'Education', value: 'education' },
    { label: 'Skills', value: 'skills' },
    { label: 'About Me', value: 'about' }
  ].map((tab) => (
    <TabsTrigger
      key={tab.value}
      value={tab.value}
      className="w-full text-left px-4 py-3 rounded-md transition-all font-medium capitalize
        data-[state=active]:bg-luke data-[state=active]:text-black
        hover:bg-luke hover:text-[#000000]"
    >
      {tab.label}
    </TabsTrigger>
  ))}
</TabsList>


          {/* Content */}
          <div className="min-h-[70vh] w-full">

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/68 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#3c3c3c50] h-[184px] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-luke">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-luke"></span>
                          <p className="text-white/68">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/ mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-luke">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-luke"></span>
                          <p className="text-white/68">{item.Institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/68 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] text-white/75">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-luke transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
