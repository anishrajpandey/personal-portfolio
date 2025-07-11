'use client';

import { useMemo, useState } from 'react';
import { journalData } from '../data';
import { createCalendar, getLocalTimeZone } from '@internationalized/date';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JournalCalendar() {
  const calendar = useMemo(() => createCalendar('gregory'), []);
  const timeZone = getLocalTimeZone();
  const now = new Date();

  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [direction, setDirection] = useState(0);

  const dateToEntryMap = useMemo(() => {
    const map = {};
    journalData.forEach((entry) => {
      const parsedDate = new Date(entry.date);
      const key = parsedDate.toDateString();
      map[key] = entry;
    });
    return map;
  }, []);

  const daysInMonth = calendar.getDaysInMonth({ year, month: month + 1, day: 1 });
  const firstDayOfMonth = new Date(year, month, 1);
  const firstWeekday = firstDayOfMonth.getDay();

  const grid = Array.from({ length: firstWeekday + daysInMonth }, (_, i) => {
    const day = i - firstWeekday + 1;
    return day > 0 ? new Date(year, month, day) : null;
  });

  const goToMonth = (monthIndex) => {
    const newDate = new Date(year, monthIndex);
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth());
  };

  const handlePrevMonth = () => {
    setDirection(-1);
    goToMonth(month - 1);
  };

  const handleNextMonth = () => {
    setDirection(1);
    goToMonth(month + 1);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getShape = (day) => {
    const shapes = [
      <svg key="circle" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" /></svg>,
      <svg key="square" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" /></svg>,
      <svg key="triangle" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l8 16H4z" /></svg>,
      <svg key="star" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.39 7.26L22 9.27l-5.6 4.73L18.18 22 12 18.27 5.82 22l1.78-7.99L2 9.27l7.61-1.01z"/></svg>
    ];
    return shapes[day % shapes.length];
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-10 px-4">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={handlePrevMonth} className="text-pink-400 hover:text-pink-300">
          <ChevronLeft size={28} />
        </button>
        <div className="text-3xl font-bold relative">
          <select
            value={month}
            onChange={(e) => goToMonth(parseInt(e.target.value))}
            className="bg-gray-900 text-white font-bold rounded-md px-3 py-1"
          >
            {monthNames.map((m, idx) => (
              <option key={m} value={idx}>{m}</option>
            ))}
          </select>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="ml-2 w-32 bg-gray-900 text-white font-bold rounded-md px-2 py-1"
          />
        </div>
        <button onClick={handleNextMonth} className="text-pink-400 hover:text-pink-300">
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 w-full max-w-4xl text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="text-pink-400 font-semibold text-lg">{d}</div>
        ))}

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${month}-${year}`}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.3 }}
            className="col-span-7 grid grid-cols-7 gap-2"
          >
            {grid.map((date, idx) => {
              if (!date) return <div key={idx} />;
              const key = date.toDateString();
              const entry = dateToEntryMap[key];
              const hasEntry = !!entry;

              const isToday =
                date.getDate() === now.getDate() &&
                date.getMonth() === now.getMonth() &&
                date.getFullYear() === now.getFullYear();

              return (
                <div
                  key={key}
                  onClick={() => {
                    if (hasEntry) window.open(entry.url, '_blank');
                  }}
                  className={`rounded-xl h-20 flex flex-col justify-center items-center cursor-pointer transition-all relative group
                    ${
                      hasEntry
                        ? 'bg-pink-600 hover:bg-pink-700 shadow-lg'
                        : 'bg-gray-800 text-gray-400'
                    }
                    ${isToday ? 'border-2 border-white' : ''}`}
                >
                  <span className="text-lg font-bold">{date.getDate()}</span>
                  {hasEntry && (
                    <>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 scale-90 origin-bottom group-hover:scale-100 transition-transform">
                        <span className="text-xs font-semibold px-2 py-1 bg-pink-700 rounded-md shadow-md whitespace-nowrap">
                          {entry.name.length > 20 ? entry.name.slice(0, 20) + '...' : entry.name}
                        </span>
                      </div>
                      <div className="mt-1">{getShape(date.getDate())}</div>
                    </>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}