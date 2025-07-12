import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const filePath = path.join(process.cwd(), 'moon', 'calendar', 'data.js');

    // Load the existing data
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Extract the current array
    const arrayMatch = fileContent.match(/const journalEntries = (\[.*\]);/s);
    if (!arrayMatch) {
      return new Response(JSON.stringify({ error: 'Invalid data format' }), { status: 400 });
    }

    const currentData = JSON.parse(arrayMatch[1]);

    // Append new entry
    const updatedData = [
      ...currentData,
      {
        url: body.url,
        name: body.name,
        date: body.date,
        energyLevel: body.energyLevel ?? 5,
      },
    ];

    // Format and rewrite the file
    const newContent = `export const journalEntries = ${JSON.stringify(updatedData, null, 2)};\n`;

    fs.writeFileSync(filePath, newContent);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to update journal data' }), { status: 500 });
  }
}
