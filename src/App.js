import image1 from './image/beginner_image.jpg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <section id="home">
              <h2>Welcome to e2mc</h2>
              <p>Learn English with our comprehensive and interactive courses.</p>
              <img src={image1} alt="Learning English" />
              <p>Our courses are designed to help you improve your English skills at all levels. Whether you are a beginner or looking to refine your advanced skills, we have the right course for you.</p>
            </section>
          } />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

