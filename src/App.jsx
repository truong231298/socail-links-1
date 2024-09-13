import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCode } from 'react-icons/fa';
import avatar from './assets/images/avatar-Jessica.jpeg';

export default function App() {
  const socials = [
    { name: 'GitHub', icon: FaGithub, link: 'https://github.com' },
    { name: 'Frontend Mentor', icon: FaCode, link: 'https://www.frontendmentor.io' },
    { name: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com' },
    { name: 'Twitter', icon: FaTwitter, link: 'https://twitter.com' },
    { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 flex justify-center items-center p-4">
      <section className="sm:w-96 w-full p-6 rounded-lg bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex flex-col justify-center items-center">
          {/* Profile Image with subtle hover effect */}
          <img src={avatar} alt="Jessica Randall's avatar" className="w-28 h-28 object-cover rounded-full mb-4 shadow-lg hover:scale-105 transition-transform duration-300"/>
          
          {/* Name and Subtitle */}
          <h1 className="text-white text-2xl font-semibold">Jessica Randall</h1>
          <h2 className="text-green-300 mt-1">London, United Kingdom</h2>
          <p className="text-gray-400 mt-2 italic text-center">"Front-end developer and avid reader."</p>
        </div>

        {/* Social Media Links with Icons */}
        <div className="flex flex-col gap-4 mt-6">
          {socials.map((social, index) => {
            const Icon = social.icon; // Dynamic Icon Component
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-slate-700 w-full text-white py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                <Icon className="mr-2" /> {social.name}
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
