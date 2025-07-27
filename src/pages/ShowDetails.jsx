import React from "react";
import { useParams } from "react-router-dom";
import ShowCard from "../components/ShowCard";

const mockShow = {
  id: 1,
  title: "Morning Jazz",
  host: "Alice",
  description: "Smooth jazz to start your day.",
  image: "/assets/images/jazz.jpg",
  isLive: true,
  nextStart: Date.now() + 3600 * 1000,
  related: [
    // ...related shows...
  ],
};

const ShowDetails = () => {
  const { id } = useParams();
  // Fetch show by id in real app
  const show = mockShow;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img
        src={show.image}
        alt={show.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold">{show.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
        Host: {show.host}
      </p>
      <p className="mb-4">{show.description}</p>
      {show.isLive ? (
        <button className="bg-primary text-white px-4 py-2 rounded">
          Listen Live
        </button>
      ) : (
        <div className="text-gray-700 dark:text-gray-200 mb-4">
          Next show starts in:{" "}
          <span className="font-bold">1h 0m</span>
        </div>
      )}
      <h2 className="text-2xl font-bold mt-8 mb-4">Related Episodes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {show.related.map((r) => (
          <ShowCard key={r.id} show={r} />
        ))}
      </div>
    </div>
  );
};

export default ShowDetails;
