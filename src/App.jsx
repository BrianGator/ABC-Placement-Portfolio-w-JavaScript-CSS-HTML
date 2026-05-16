/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  ArrowUp, 
  Quote,
  Home,
} from 'lucide-react';

export default function App() {
  const [recommendations, setRecommendations] = useState([
    {
      name: "Alex Johnson",
      message: "Brian is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are top-notch. He's a great teammate and always willing to help others."
    },
    {
      name: "Sarah Williams",
      message: "Working with Brian was a pleasure. He has a deep understanding of modern web technologies and was able to translate our complex requirements into a seamless user experience. Highly recommended!"
    },
    {
      name: "Michael Chen",
      message: "Brian's technical expertise in full-stack development is impressive. He helped us optimize our backend services and improved our app performance significantly. A truly talented professional."
    }
  ]);

  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setRecommendations([...recommendations, { name: newName || 'Anonymous', message: newMessage }]);
      setNewName('');
      setNewMessage('');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5', experience: '4 years experience' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript', experience: '3 years experience' },
    { name: 'Java', logo: 'https://cdn.simpleicons.org/java', experience: '2 years experience' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react', experience: '3 years experience' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs', experience: '2.5 years experience' },
    { name: 'CSS', logo: 'https://cdn.simpleicons.org/css3', experience: '4 years experience' },
  ];

  const projects = [
    {
      title: "Eco-Track Dashboard",
      description: "Developed a comprehensive sustainability tracking dashboard for small businesses using React, D3.js, and Node.js. It features real-time carbon footprint calculations and predictive analytics for energy consumption reduction."
    },
    {
      title: "Pulse-Connect Social Hub",
      description: "Built a specialized networking platform for medical professionals with encrypted messaging and peer-review capabilities. Integrated complex search algorithms allowing doctors to find specialists based on case history and expertise."
    },
    {
      title: "Omni-Scribe Cloud Editor",
      description: "Created a collaborative, real-time document editor supporting markdown and version control. Implemented using Operational Transformation (OT) for conflict resolution and integrated with multiple cloud storage providers."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Task 1 & 2: Header and Nav */}
      <nav id="navbar" className="fixed top-0 w-full bg-[#5D00B1] text-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-50 shadow-lg">
        <div id="profile-name" className="flex flex-col mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Brian McCarthy</h1>
          <div className="flex items-center space-x-4 mt-1 text-xs opacity-90">
            <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> brian.mc@example.com</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +13456764598</span>
          </div>
        </div>
        
        <div className="flex space-x-6 items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-white hover:scale-110 transition-transform">
            <Home className="w-5 h-5" />
          </a>
          {['About', 'Project Details', 'Skills', 'Recommendations'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white hover:font-bold hover:underline transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section / About Me (Task 3) */}
      <section id="about" className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/portfolio-avatar/400/400" 
            alt="Brian McCarthy" 
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-purple-100"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-5xl font-bold text-[#5D00B1] mb-6 flex items-center">
            Hi, I'm Brian McCarthy! 👋
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-2xl">
            I am a results-driven full-stack developer with over 4 years of experience building scalable web applications. My passion lies in creating elegant, user-centric solutions that solve real-world problems. With a strong foundation in both frontend and backend technologies, I thrive in collaborative environments that challenge me to grow and innovate. I have extensive experience working with cloud platforms like AWS and IBM Cloud, ensuring robust deployment and performance.
          </p>
        </div>
      </section>

      {/* Skills Section (Task 4) */}
      <section id="skills" className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5D00B1] mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <motion.div 
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-100"
              >
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-4" referrerPolicy="no-referrer" />
                <h3 className="font-bold mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500">{skill.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (Task 5) */}
      <section id="project-details" className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5D00B1] mb-12">Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                <ul className="list-disc pl-6 text-gray-600 text-lg">
                  <li>{project.description}</li>
                </ul>
                {index < projects.length - 1 && <hr className="mt-12 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section (Task 6 & 7) */}
      <section id="recommendations" className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5D00B1] mb-12">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {recommendations.map((rec, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg relative border border-purple-50"
                >
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-purple-100 -z-0" />
                  <p className="italic text-gray-600 mb-6 relative z-10 leading-relaxed">
                    "{rec.message}"
                  </p>
                  <div className="font-bold text-gray-800">— {rec.name}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Form */}
          <div className="mt-20 max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-purple-50">
            <h3 className="text-2xl font-bold text-center mb-8">Leave a Recommendation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name (Optional)" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <textarea 
                  required
                  placeholder="Message" 
                  rows={4}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="bg-white text-[#5D00B1] border-2 border-[#5D00B1] px-12 py-3 rounded-lg font-bold hover:bg-[#5D00B1] hover:text-white transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Task 8: Home Icon (Back to top) */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
            <AnimatePresence>
              {isHomeHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mb-2 bg-gray-800 text-white text-xs py-1 px-3 rounded shadow-lg"
                >
                  Home
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
              className="bg-[#5D00B1] text-white p-4 rounded-full shadow-2xl hover:bg-purple-700 transition-colors flex items-center justify-center"
              title="Home"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Task 9: Popup Confirmation */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl z-[100] flex items-center space-x-3 pointer-events-none"
          >
            <span className="font-bold">Thank you for submitting a recommendation!</span>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Footer */}
      <footer className="bg-[#5D00B1] text-white py-12 px-6 text-center">
        <p className="opacity-80">© 2024 Brian McCarthy | Powered by ABC Consultants Seattle</p>
      </footer>
    </div>
  );
}
