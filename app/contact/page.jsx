"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "berry@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Code Corner, Tech Town 132546",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="min-h-screen bg-[#1c1c22] text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Form */}
          <div className="w-full xl:w-2/3">
            <form className="flex flex-col gap-6 p-10 bg-[#2a2f3a] rounded-xl shadow-lg">
              <h3 className="text-4xl font-bold text-luke">
                Let's work together
              </h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                tenetur, voluptates similique at aperiam.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" required />
                <Input type="text" placeholder="Lastname" required />
                <Input type="email" placeholder="Email address" required />
                <Input type="tel" placeholder="Phone number" required />
              </div>

              {/* Select */}
              <div>
                <Select>
                  <SelectTrigger className="w-full bg-[#1c1c22] text-white border border-purple-400">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1b1c22] text-white">
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Optional: Message */}
              <Textarea
                placeholder="    Your message"
                className="bg-[#1b1c22] text-white"
                rows={4}
              />

              <Button className="bg-white/25 hover:bg-luke text-white">
                Submit
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6">
            {info.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-luke text-xl mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
