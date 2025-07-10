"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {journalData} from "./data"; // Adjust the import path as necessary

const journalEntries = journalData;

function MoonJournalCalendar() {
  const [value, setValue] = useState(new Date());

  const journalMap = journalEntries.reduce((acc, entry) => {
    acc[entry.date] = entry;
    return acc;
  }, {});

  const tileContent = ({ date, view }) => {
    const iso = format(date, "yyyy-MM-dd");
    if (view === "month" && journalMap[iso]) {
      return (
        <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 mx-auto" title="Journal available"></div>
      );
    }
    return null;
  };

  const onClickDay = (date) => {
    const iso = format(date, "yyyy-MM-dd");
    // console.log("Clicked date:", journalData)
    console.log(journalMap)
    if (journalMap[iso]) {
      console.log(journalMap[iso].url)
      window.open(journalMap[iso].url, "_blank");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10 font-mono">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">🌙 Moon Journal Calendar</h1> */}
      <div className="flex justify-center">
        <Calendar
          onChange={setValue}
          value={value}
          tileContent={tileContent}
          onClickDay={onClickDay}
          tileClassName={({ date, view }) => {
            const iso = format(date, "yyyy-MM-dd");
            if (view === "month" && journalMap[iso]) {
              return "cursor-pointer hover:bg-indigo-700 transition-colors duration-200";
            }
            return "";
          }}
          className="!bg-gray-800 text-white rounded-lg shadow-lg p-2 border-none [&_.react-calendar__tile]:rounded-xl [&_.react-calendar__tile--now]:bg-indigo-900 [&_.react-calendar__tile--active]:bg-indigo-700 [&_.react-calendar__tile--active]:text-white [&_.react-calendar__tile--hover]:bg-indigo-600"
        />
      </div>
      <div className="mt-10 flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Moon_and_Apollo_17_Lunar_Module.jpg/640px-Moon_and_Apollo_17_Lunar_Module.jpg"
          alt="Moon Theme"
          className="rounded-xl w-full max-w-xl shadow-lg opacity-80"
        />
      </div>
    </div>
  );
}

export default MoonJournalCalendar;
