// Home.jsx
import React from "react"
import AudioPlayer from "../components/AudioPlayer"
import ShowCard from "../components/ShowCard"
import ScheduleTable from "../components/ScheduleTable"
import { Link } from "react-router-dom"

const featuredShows = [
  {
    id: 1,
    title: "Morning Jazz",
    host: "Alice",
    description: "Smooth jazz to start your day.",
    image: "/assets/images/jazz.jpg",
  },
  // ...more featured shows...
]

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 container mx-auto p-4">
      <section className="max-w-3xl mx-auto mt-6">
        <AudioPlayer streamUrl="https://stream.example.com/live.mp3" />
      </section>
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Upcoming Shows</h2>
        <ScheduleTable />
      </section>
      <section className="text-center my-10">
        <Link
          to="/schedule"
          className="bg-primary text-white px-6 py-3 rounded text-xl font-semibold shadow"
        >
          Listen Now
        </Link>
      </section>
    </main>
    <Footer />
  </div>
)

export default Home
