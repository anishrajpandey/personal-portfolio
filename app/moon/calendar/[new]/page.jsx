'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NewJournalPage() {
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');

  const [dateString, setDateString] = useState('');

  useEffect(() => {
    if (year && month && day) {
      const formatted = new Date(year, month - 1, day).toDateString();
      setDateString(formatted);
    }
  }, [year, month, day]);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-black flex flex-col items-center justify-start p-4 sm:p-6 md:p-12"
      style={{ backgroundImage: `url('/journalBack.jpg')` }}
    >
      <div className="w-full max-w-6xl rounded-3xl p-4 sm:p-6 md:p-10 flex flex-col flex-grow bg-transparent">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center drop-shadow-lg">
          ✍️ Journal Time
        </h1>
        {dateString && (
          <p className="text-lg sm:text-xl mb-6 text-center drop-shadow">
            Writing for <strong>{dateString}</strong>
          </p>
        )}

        <textarea
          placeholder="Let your thoughts breathe..."
          className="flex-grow w-full p-6 rounded-2xl bg-white/50 text-black text-lg sm:text-xl outline-none resize-none shadow-inner focus:ring-2 focus:ring-black transition-all"
        />

        <div className="flex justify-end mt-6">
          <button
            onClick={() => alert('Journal saved!')}
            className="px-6 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}
