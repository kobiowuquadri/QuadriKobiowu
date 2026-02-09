import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const Mentorship = () => {
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
    <section id="mentorship" className="bg-primary-bg py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex items-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text font-poppins">Mentorship Program</h2>
          <div className="h-[1px] bg-border-color flex-grow ml-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Program Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-accent text-2xl font-bold mb-6 font-poppins">Why Join My Mentorship Program?</h3>
            <p className="text-secondary-text mb-10 font-poppins text-lg leading-relaxed">
              Having started from scratch and successfully transitioned into tech through CapacityBay's program,
              I'm passionate about helping others achieve the same transformation. My mentorship focuses on practical,
              real-world skills that helped me succeed.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {mentorshipAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary-bg p-6 rounded-xl border border-border-color hover:border-accent transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="text-accent text-xl" />
                  </div>
                  <h4 className="text-primary-text font-bold mb-2 font-poppins text-lg">{area.title}</h4>
                  <p className="text-secondary-text text-sm font-poppins leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary-bg p-8 md:p-10 rounded-2xl border border-border-color shadow-2xl"
          >
            <h3 className="text-accent text-2xl font-bold mb-2 font-poppins">Apply for Mentorship</h3>
            <p className="text-secondary-text mb-8 font-poppins text-sm">Fill out the form below to get started.</p>

            <form
              action="https://formsubmit.co/kobiowuq@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Mentorship Application" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">Years of Experience</label>
                <div className="relative">
                  <select
                    id="experience"
                    name="Experience"
                    required
                    className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins appearance-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-primary-bg">Select experience level</option>
                    <option value="0-1" className="bg-primary-bg">0-1 years</option>
                    <option value="1-3" className="bg-primary-bg">1-3 years</option>
                    <option value="3-5" className="bg-primary-bg">3-5 years</option>
                    <option value="5+" className="bg-primary-bg">5+ years</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-accent">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="goals" className="block text-primary-text mb-2 font-poppins text-sm font-semibold">What are your goals?</label>
                <textarea
                  id="goals"
                  name="Goals"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-primary-text font-poppins resize-none transition-all duration-300"
                  placeholder="Tell me about what you want to achieve..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent text-primary-bg py-4 px-6 rounded-lg font-bold hover:bg-accent/90 transition-colors duration-300 font-poppins shadow-lg shadow-accent/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship; 