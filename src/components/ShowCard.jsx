import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
    <img
      src={show.image}
      alt={show.title}
      className="rounded mb-2 w-full h-40 object-cover"
      loading="lazy"
    />
    <h3 className="text-lg font-bold mb-1">{show.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{show.host}</p>
    <p className="text-sm text-gray-700 dark:text-gray-200 flex-1">{show.description}</p>
    <Link
      to={`/shows/${show.id}`}
      className="mt-3 inline-block bg-primary text-white px-4 py-1 rounded text-center"
    >
      Details
    </Link>
  </div>
);

export default ShowCard;
