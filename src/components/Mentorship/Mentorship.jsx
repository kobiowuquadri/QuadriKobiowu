import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const Mentorship = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const mentorshipAreas = [
    {
      icon: FaLightbulb,
      title: "Career Transition",
      description: "Learn how to break into tech from any background, just like I did."
    },
    {
      icon: FaRocket,
      title: "Full Stack Development",
      description: "Practical guidance on both frontend and backend technologies."
    },
    {
      icon: FaUsers,
      title: "Project Building",
      description: "Learn to build real-world projects from start to finish."
    },
    {
      icon: FaChalkboardTeacher,
      title: "Best Practices",
      description: "Develop good coding habits and engineering practices."
    }
  ];

  return (
    <section id="mentorship" className="bg-primary-bg py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text font-poppins">Mentorship Program</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Program Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-accent text-xl font-bold mb-6 font-poppins">Why Join My Mentorship Program?</h3>
            <p className="text-secondary-text mb-8 font-poppins">
              Having started from scratch and successfully transitioned into tech through CapacityBay's program, 
              I'm passionate about helping others achieve the same transformation. My mentorship focuses on practical, 
              real-world skills that helped me succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {mentorshipAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary-bg p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <area.icon className="text-accent text-2xl mb-4" />
                  <h4 className="text-primary-text font-bold mb-2 font-poppins">{area.title}</h4>
                  <p className="text-secondary-text text-sm font-poppins">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary-bg p-8 rounded-lg"
          >
            <h3 className="text-accent text-xl font-bold mb-6 font-poppins">Apply for Mentorship</h3>
            <form 
              action="https://formsubmit.co/kobiowuq@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Mentorship Application" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-primary-text mb-2 font-poppins">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  className="w-full px-4 py-2 bg-primary-bg border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-primary-text font-poppins"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-text mb-2 font-poppins">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="w-full px-4 py-2 bg-primary-bg border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-primary-text font-poppins"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-primary-text mb-2 font-poppins">Years of Experience</label>
                <select
                  id="experience"
                  name="Experience"
                  required
                  className="w-full px-4 py-2 bg-primary-bg border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-primary-text font-poppins"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-primary-text mb-2 font-poppins">What are your goals?</label>
                <textarea
                  id="goals"
                  name="Goals"
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-primary-bg border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-primary-text font-poppins"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent text-primary-bg py-3 px-6 rounded-md font-bold hover:bg-accent/90 transition-colors duration-300 font-poppins"
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