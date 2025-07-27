import React, { useState } from "react";

const mockSchedule = [
  { day: "Monday", time: "10:00", title: "Morning Jazz", host: "Alice" },
  { day: "Monday", time: "12:00", title: "Rock Hour", host: "Bob" },
  // ...more mock data...
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ScheduleTable = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [search, setSearch] = useState("");

  const filtered = mockSchedule.filter(
    (s) =>
      s.day === selectedDay &&
      (s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.host.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="rounded border px-2 py-1"
        >
          {days.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search shows or hosts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border px-2 py-1 flex-1"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Program</th>
              <th className="px-4 py-2">Host</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length ? (
              filtered.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{item.time}</td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.host}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No programs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
