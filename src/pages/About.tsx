import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">YANTRIKA 2026</span>
        </h1>
        <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed text-left space-y-6">
          <p className="text-xl text-center font-medium text-gray-800 mb-12">
            A FEST BUILT TO CREATE, COMPETE & CONNECT
          </p>
          <p>
            YANTRIKA 2026 is the annual technical and techno-cultural festival organized by the Department of Computer Science and Engineering, School of Engineering & Technology, DRIEMS University. Scheduled for October 08–09, 2026, it is designed to be the ultimate platform for aspiring engineers, technologists, gamers, and creatives.
          </p>
          <p>
            Over two action-packed days, thousands of students will gather on the DRIEMS University campus to push the boundaries of innovation. From high-stakes robotics racing in YantraRush to intense coding debugging in BugVidhwans, YANTRIKA provides a competitive environment to test real-world skills.
          </p>
          <p>
            But we are more than just a tech fest. Through events like NirtyaSpandan and Drishya, we celebrate creativity and cultural expression, recognizing that true innovation lies at the intersection of technology and art.
          </p>
          <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
            <h3 className="text-2xl font-display font-black mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To foster a culture of technological excellence, creative problem-solving, and collaborative learning among the next generation of creators and innovators.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
