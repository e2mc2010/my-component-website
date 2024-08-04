import React from 'react';
import aboutImage from '../image/image3.jpg';

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      <img src={aboutImage} alt="About e2mc" style={{ width: '100%', height: 'auto' }} />
      <p>e2mc is dedicated to providing high-quality English learning courses to students worldwide. Our mission is to empower individuals with the language skills they need to succeed in their personal and professional lives.</p>
      
      <h3>Our Mission</h3>
      <p>At e2mc, our mission is to make English learning accessible and engaging for everyone. We strive to create a supportive and inclusive environment where students can thrive and achieve their language goals.</p>
      
      <h3>Our Values</h3>
      <ul>
        <li><strong>Excellence:</strong> We are committed to delivering top-notch educational content and experiences.</li>
        <li><strong>Innovation:</strong> We continuously innovate to provide the best learning tools and resources.</li>
        <li><strong>Inclusivity:</strong> We believe in creating a welcoming and inclusive community for all learners.</li>
        <li><strong>Support:</strong> We offer personalized support to help our students succeed.</li>
      </ul>
      
      <h3>Our History</h3>
      <p>Founded in [Year], e2mc has grown from a small startup into a global leader in English education. Our journey began with a simple goal: to help people communicate effectively in English. Over the years, we have expanded our course offerings and developed innovative learning solutions to meet the needs of our diverse student base.</p>
      
      <h3>Meet Our Team</h3>
      <p>Our team is comprised of experienced educators, language experts, and passionate professionals dedicated to helping you succeed. We work tirelessly to create engaging and effective learning experiences for our students.</p>
      
      <h3>Why Choose e2mc?</h3>
      <ul>
        <li><strong>Expert Instructors:</strong> Learn from qualified and experienced teachers.</li>
        <li><strong>Comprehensive Curriculum:</strong> Access a wide range of courses designed to suit all levels and needs.</li>
        <li><strong>Flexible Learning:</strong> Study at your own pace with our flexible online courses.</li>
        <li><strong>Community Support:</strong> Join a vibrant community of learners and receive support from peers and mentors.</li>
      </ul>
      
      <h3>Contact Us</h3>
      <p>We'd love to hear from you! Whether you have questions about our courses or need support, our team is here to help. Get in touch with us at <a href="mailto:info@e2mc.com">info@e2mc.com</a>.</p>
    </section>
  );
};

export default About;
