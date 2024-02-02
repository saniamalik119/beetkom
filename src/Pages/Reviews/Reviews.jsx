import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { reviewsHead as header } from "../../components/data";
import { GetReviews } from "../../api/api";
import Search from "../../components/Search";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const renderReviews = async () => {
      try {
        const response = await GetReviews();
        const reviewsData = response.data?.data;
        setReviews(reviewsData); // Fix here: Use reviewsData instead of reviews
        console.log(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews data:", error);
      }
    };

    renderReviews();
  }, []);

  const rowRenderer = (product) => {
    const { id, rating, feedback } = product;
    const searchResults = [id, rating, feedback].filter(
      (field) => typeof field === "string"
    );

    const matchesSearchTerm = searchResults.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!matchesSearchTerm) {
      return null;
    }
    return (
      <>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {id}
        </td>
        <td className="px-6 py-4">{rating}</td>
        <td className="px-6 py-4">{feedback}</td>

        <td className="px-6 py-4 text-right">
          <a
            href={product.editLink}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </>
    );
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} />
      <Table headers={header} data={reviews} rowrender={rowRenderer} />
    </div>
  );
};

export default Reviews;
