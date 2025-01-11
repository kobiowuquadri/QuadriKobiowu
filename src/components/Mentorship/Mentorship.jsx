import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const Mentorship = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const mentorshipAreas = [
    {
      icon: FaLightbulb,
      title: "Technical Leadership",
      description: "Learn how to transition from a developer to a technical leader."
    },
    {
      icon: FaRocket,
      title: "Career Growth",
      description: "Navigate your career path in tech with strategic guidance."
    },
    {
      icon: FaUsers,
      title: "Team Management",
      description: "Develop skills to lead and inspire engineering teams."
    },
    {
      icon: FaChalkboardTeacher,
      title: "Technical Skills",
      description: "Enhance your technical knowledge and best practices."
    }
  ];

  return (
    <section id="mentorship" className="bg-[#0A192F] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[#64FFDA] font-mono">07.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6] font-poppins">Mentorship Program</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Program Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[#64FFDA] text-xl font-bold mb-6 font-poppins">Why Join My Mentorship Program?</h3>
            <p className="text-[#8892B0] mb-8 font-poppins">
              As a CTO and technical leader, I'm passionate about helping the next generation of tech leaders grow. 
              My mentorship program is designed to provide personalized guidance based on real-world experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {mentorshipAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-[#112240] p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <area.icon className="text-[#64FFDA] text-2xl mb-4" />
                  <h4 className="text-[#CCD6F6] font-bold mb-2 font-poppins">{area.title}</h4>
                  <p className="text-[#8892B0] text-sm font-poppins">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#112240] p-8 rounded-lg"
          >
            <h3 className="text-[#64FFDA] text-xl font-bold mb-6 font-poppins">Apply for Mentorship</h3>
            <form 
              action="https://formsubmit.co/kobiowuq@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Mentorship Application" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-[#CCD6F6] mb-2 font-poppins">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  className="w-full px-4 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] text-[#CCD6F6] font-poppins"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#CCD6F6] mb-2 font-poppins">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="w-full px-4 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] text-[#CCD6F6] font-poppins"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-[#CCD6F6] mb-2 font-poppins">Years of Experience</label>
                <select
                  id="experience"
                  name="Experience"
                  required
                  className="w-full px-4 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] text-[#CCD6F6] font-poppins"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-[#CCD6F6] mb-2 font-poppins">What are your goals?</label>
                <textarea
                  id="goals"
                  name="Goals"
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-[#0A192F] border border-[#233554] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FFDA] text-[#CCD6F6] font-poppins"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#64FFDA] text-[#0A192F] py-3 px-6 rounded-md font-bold hover:bg-[#64FFDA]/90 transition-colors duration-300 font-poppins"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply for Mentorship
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship; 