
import axios from "axios";
import React, { useState} from "react";

const ReviewCard = ({ movieID }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviewData = async (movieID) => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/reviews/${movieID}/`
      );
      console.log("Review DATA:", response.data);
      setReviews(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleButton = () => {
    fetchReviewData(movieID);
  };

  return (
    <div>
        {console.log(reviews)}
      {reviews.length !== 0 ? (
        reviews.map((review) => {
          return (
            <div>
              <h1>{review.user.username}</h1>
              <p>{review.text}</p>
            </div>
          );
        })
      ) : (
        <button onClick={handleButton}>Reviews!</button>
      )}
    </div>
  );
};

export default ReviewCard;
