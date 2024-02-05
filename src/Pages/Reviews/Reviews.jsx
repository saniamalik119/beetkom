import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { reviewsHead as header } from "../../components/data";
import { GetReviews } from "../../api/api";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { id: property_id } = useParams();
console.log("Property ID:", property_id);

  useEffect(() => {
   
    const renderReviews = async (property_id) => {
      try {
        const response = await GetReviews(property_id);
        const reviewsData = response.data?.data;
        console.log(reviewsData)
        setReviews(reviewsData); // Fix here: Use reviewsData instead of reviews
        console.log(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews data:", error);
      }
    };

    renderReviews(property_id);
  }, [property_id]);


  const calculateTimeAgo = (createdOn) => {
    const now = new Date();
    const createdDate = new Date(createdOn);
    const timeDifference = now - createdDate;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const renderStars = (rating) => {
    const ratingLength = Math.round(rating);
    
    // Array.from to create an array of the specified length
    return (
      <p className="text-black outline-none border-none">
        {Array.from({ length: ratingLength }, (_, index) => (
          <span key={index}>⭐</span>
        ))}
      </p>
    );
  };
  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} />
      {reviews && reviews.length > 0 ? (
  <div className="w-full p-20">
    {reviews.map((review, index) => (
      <div key={index} className="bg-[#f1fffe] w-140 p-10 mb-8">
        <p className="text-gray-500 mb-4">{calculateTimeAgo(review.created_on)}</p>
        <p className="mb-2">{renderStars(review.rating)}</p>
        <p className="font-semibold uppercase">review: </p>
        <p>{review?.feedback}</p>
      </div>
    ))}
  </div>
) : (
  <>
    No reviews found
  </>
)}

    </div>
  );
};

export default Reviews;
