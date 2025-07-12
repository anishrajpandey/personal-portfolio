'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import { toast } from 'react-toastify';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';

export default function NewJournalPage() {
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');

  const [dateString, setDateString] = useState('');
  const [entryText, setEntryText] = useState('');

  useEffect(() => {
    if (year && month && day) {
      const formatted = new Date(year, month - 1, day).toDateString();
      setDateString(formatted);
    }
  }, [year, month, day]);

  const handleSave = async () => {
    if (!entryText.trim()) {
      toast.error("Journal entry is empty!");
      return;
    }

    try {
      toast.info("Generating PDF...");

      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      doc.setFontSize(18);
      doc.text(`Journal Entry - ${dateString}`, 15, 20);
      doc.setFontSize(12);
      doc.text(doc.splitTextToSize(entryText, 180), 15, 35);

      const pdfBlob = doc.output("blob");

      toast.info("Uploading to Cloudinary...");

      const file = new File([pdfBlob], `journal-${dateString}.pdf`, {
        type: 'application/pdf',
      });

      const formData = new FormData();
      formData.append('file', file);
       formData.append('upload_preset', 'my_journals'); // 👈 Replace this
      formData.append('folder', 'journals'); 

      const cloudinaryRes = await fetch(
        'https://api.cloudinary.com/v1_1/dmdr1uk6m/auto/upload', // 👈 Replace this
        {
          method: 'POST',
          body: formData
        }
      );
      if (!cloudinaryRes.ok) {
        throw new Error("Cloudinary upload failed");
      }

      const cloudinaryData = await cloudinaryRes.json();
      const cloudUrl = cloudinaryData.secure_url;

      toast.success("Uploaded to Cloudinary!");

      // Save journal metadata to Firestore
      await addDoc(collection(db, "journals"), {
        name: `Journal - ${dateString}`,
        date: new Date(year, month - 1, day).toISOString(),
        url: cloudUrl,
        energyLevel: 6, // Optional: Replace with actual user input
        text: entryText,
      });

      toast.success("Journal saved to Firebase!");

      setEntryText('');
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while saving the journal.");
    }
  };

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
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          className="flex-grow w-full p-6 rounded-2xl bg-white/50 text-black text-lg sm:text-xl outline-none resize-none shadow-inner focus:ring-2 focus:ring-black transition-all"
        />

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}
