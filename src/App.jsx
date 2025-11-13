import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="font-bold text-xl">Airica Patiño</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/skills" className="hover:text-blue-600">Skills</Link>
        <Link to="/education" className="hover:text-blue-600">Education</Link>
        <Link to="/internship" className="hover:text-blue-600">Internship</Link>
        <Link to="/trainings" className="hover:text-blue-600">Trainings</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">I am Airica S. Patiño, a Web Developer ready to start my career!</p>
    </motion.div>
  );
}

function Skills() {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} className="p-8">
      <h2 className="text-2xl font-bold mb-3">Skills</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Python, PHP</li>
        <li>MySQL</li>
        <li>HTML, CSS, JavaScript, Bootstrap, React</li>
        <li>Laravel</li>
        <li>Git</li>
      </ul>
    </motion.div>
  );
}

function Education() {
  return (
    <motion.div initial={{ x: 100 }} animate={{ x: 0 }} className="p-8">
      <h2 className="text-2xl font-bold mb-3">Education</h2>
      <p>Bachelor of Science in Information Technology</p>
      <p>Brokenshire College (2020–2024)</p>
    </motion.div>
  );
}

function Internship() {
  return (
    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="p-8">
      <h2 className="text-2xl font-bold mb-3">Internship Experience</h2>
      <p>PCBEE Davao – Intern (486 hours)</p>

      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Diagnose hardware/software issues</li>
        <li>Laptop repair</li>
        <li>Web-based ordering system development</li>
      </ul>
    </motion.div>
  );
}

function Trainings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8">
      <h2 className="text-2xl font-bold mb-3">Seminars & Trainings</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>PLDT Infoteach Outreach Program (2017)</li>
        <li>Modular Programming Training (2017)</li>
        <li>Python Trainings (2022)</li>
        <li>Leadership Training (2022)</li>
        <li>Laravel 101 (2022)</li>
        <li>MCITS 2023</li>
      </ul>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/trainings" element={<Trainings />} />
      </Routes>
    </Router>
  );
}
