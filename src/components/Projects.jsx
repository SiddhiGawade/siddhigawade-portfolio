import React from 'react';
import './Projects.css';
import vEyeImage from '../assests/virtual-eye.png';
import eleganceImage from '../assests/elegance.png';
import labroomsImage from '../assests/labrooms.png';
import eduAIImage from '../assests/EduAI.png';
import impactLinkImage from '../assests/ImpactLink.png';
import cftcImage from '../assests/CFTC.png';

const Projects = () => {
  const projects = [
    {
      title: "Virtual Eye 2.0",
      description: "Advanced computer vision app combining YOLO object detection with BLIP scene understanding. Features real-time analysis, natural language descriptions, and audio narration.",
      tags: ["Python", "YOLOv8", "Streamlit", "PyTorch"],
      liveLink: "#",
      codeLink: "https://github.com/SiddhiGawade/VirtualEye2.0",
      image: vEyeImage
    },
    {
      title: "Elegance",
      description: "Specialized e-commerce platform for selling and renting high-quality earrings. Features a hybrid inventory system for purchases and rentals with refundable deposits. Built with Node.js, Express, MongoDB, and Docker.",
      tags: ["Node.js", "Express.js", "MongoDB", "Docker", "Next.js"],
      liveLink: "#",
      codeLink: "https://github.com/SiddhiGawade/Elegance",
      image: eleganceImage
    },
    {
      title: "LabRooms",
      description: "Collaborative workspace for real-time code sharing, file management, and team communication. Features syntax highlighting, whiteboard, and secure Cloudinary storage.",
      tags: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      codeLink: "https://github.com/Chiragchaudhari2005/LabRooms",
      image: labroomsImage
    },
    {
      title: "EduAI",
      description: "A personalized AI-driven learning path dashboard that generates personalized learning paths based on user goals, skill levels, and career aspirations. Features include curated resources, progress tracking, gamification elements like badges and leaderboards, and community-driven peer collaboration.",
      tags: ["React.js", "Tailwind CSS", "ShadCN UI", "Express.js", "MongoDB", "Firebase", "Python", "LangFlow", "TensorFlow"],
      liveLink: "#",
      codeLink: "https://github.com/Yashparmar1125/EduAI",
      image: eduAIImage
    },
    {
      title: "ImpactLink",
      description: "A platform connecting volunteers with NGOs based on interests, skills, and availability. Implemented a seamless matching system for optimized volunteer placement. Features include task discovery, progress tracking, certification management, and campaign monitoring.",
      tags: ["Node.js", "Express.js", "MongoDB", "Flask"],
      liveLink: "#",
      codeLink: "https://github.com/Yashparmar1125/ImpactLink",
      image : impactLinkImage
    },
    {
      title: "C.F.T.C - Charge For The Charged",
      description: "Final Year Project built using Android Studio and Firebase. A platform for buying and selling electricity, featuring a DialogFlow-powered chatbot for enhanced user navigation and interaction. Hosted through Netlify.",
      tags: ["Android Studio", "Firebase", "DialogFlow", "Netlify"],
      liveLink: "#",
      codeLink: "#",
      image : cftcImage
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>Some Things I've Built</p>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              {index < 5 ? (
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.codeLink} className="project-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;