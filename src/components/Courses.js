import images from '../image/image2.jpg';
import React, { useState } from 'react';

const CourseReview = ({ courseName }) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleReviewSubmit = () => {
    setReviews([...reviews, { text: reviewText, rating }]);
    setReviewText('');
    setRating(0);
  };

  return (
    <div>
      <h4>Reviews for {courseName}</h4>
      <div>
        <label>Rating: </label>
        <select value={rating} onChange={handleRatingChange}>
          <option value="0">Select...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea 
          value={reviewText} 
          onChange={(e) => setReviewText(e.target.value)} 
          placeholder="Write a review"
        ></textarea>
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.rating} stars</strong>: {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses">
      <h2>Our Courses</h2>
      <p>Explore our range of English learning courses designed to suit all levels.</p>
      <img src={images} alt="Courses" />
      <ul>
        <li>
          <h3>Beginner English</h3>
          <p>This course is perfect for those who are just starting their English learning journey. You will learn the basics of grammar, vocabulary, and conversation.</p>
          <CourseReview courseName="Beginner English" />
        </li>
        <li>
          <h3>Intermediate English</h3>
          <p>For those who have a basic understanding of English, this course will help you improve your grammar and vocabulary, and practice more complex conversations.</p>
          <CourseReview courseName="Intermediate English" />
        </li>
        <li>
          <h3>Advanced English</h3>
          <p>This course is designed for advanced learners who want to refine their skills and achieve fluency. You will engage in advanced grammar, vocabulary, and discussions.</p>
          <CourseReview courseName="Advanced English" />
        </li>
        <li>
          <h3>Business English</h3>
          <p>Learn the language of business. This course covers business terminology, formal communication, and professional etiquette to help you succeed in the corporate world.</p>
          <CourseReview courseName="Business English" />
        </li>
      </ul>
    </section>
  );
};

export default Courses;
