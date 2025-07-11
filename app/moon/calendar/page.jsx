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
    let newYear = year;
    let newMonth = monthIndex;
    if (monthIndex < 0) {
      newYear = year - 1;
      newMonth = 11;
    } else if (monthIndex > 11) {
      newYear = year + 1;
      newMonth = 0;
    }
    setYear(newYear);
    setMonth(newMonth);
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

  const isJuly = month === 6; // July index is 6

  return (
   <div
    className="min-h-screen text-white flex flex-col items-center py-10 px-4 relative overflow-hidden"
    style={{
      backgroundColor: '#32325d',
      backgroundImage: isJuly ? "url('/moon.jpg')" : "url('/moon.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
      <div className="flex items-center gap-4 mb-6 z-10">
        <button onClick={handlePrevMonth} className="text-pink-400 hover:text-pink-300">
          <ChevronLeft size={28} />
        </button>
        <div className="text-3xl font-bold relative flex items-center">
          <select
            value={month}
            onChange={(e) => goToMonth(parseInt(e.target.value, 10))}
            className="bg-gray-900 text-white font-bold rounded-md px-3 py-1"
          >
            {monthNames.map((m, idx) => (
              <option key={m} value={idx}>{m}</option>
            ))}
          </select>
          <input
            type="number"
            value={year}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val)) setYear(val);
            }}
            className="ml-2 w-32 bg-gray-900 text-white font-bold rounded-md px-2 py-1"
            min={1970}
            max={2100}
          />
        </div>
        <button onClick={handleNextMonth} className="text-pink-400 hover:text-pink-300">
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 w-full max-w-4xl text-center z-10">
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
              const hasEntry = Boolean(entry);

              const isToday =
                date.getDate() === now.getDate() &&
                date.getMonth() === now.getMonth() &&
                date.getFullYear() === now.getFullYear();

              // Special July 11 check
              const isJuly11 = month === 6 && date.getDate() === 11;

              return (
                <div
                  key={key}
                  onClick={() => {
                    if (hasEntry) window.open(entry.url, '_blank');
                  }}
                  className={`
                    rounded-xl h-20 flex flex-col justify-center items-center cursor-pointer transition-all relative group
                    ${hasEntry ? 'bg-pink-600 hover:bg-pink-700 shadow-lg' : 'bg-gray-800 text-gray-400'}
                    ${isToday ? 'border-2 border-white' : ''}
                    ${isJuly11 ? 'border-4 border-yellow-400 shadow-[0_0_10px_5px_rgba(252,211,77,0.75)] bg-yellow-500' : ''}
                  `}
                  title={isJuly11 ? '🎂 Birthday! July 11' : undefined}
                >
                  <span className="text-lg font-bold flex items-center justify-center gap-1">
                    {date.getDate()}
                    {isJuly11 && <span role="img" aria-label="Birthday cake">🎂</span>}
                  </span>
                  {hasEntry && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 scale-90 origin-bottom group-hover:scale-100 transition-transform">
                      <span className="text-xs font-semibold px-2 py-1 bg-pink-700 rounded-md shadow-md whitespace-nowrap">
                        {entry.name.length > 20 ? `${entry.name.slice(0, 17)}...` : entry.name}
                      </span>
                    </div>
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
