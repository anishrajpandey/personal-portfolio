const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(process.cwd(), 'public/gallery/Pictures');
const OUTPUT_FILE = path.join(process.cwd(), 'app/gallery/galleryData.json');

// User provided metadata mapping
// Key: Folder Name (normalized to lowercase/trimmed for matching)
// Value: Metadata object
const METADATA_MAP = {
    "million mask march 2022": {
        title: "Million Mask March 2022",
        date: "2022-11",
        description: "My first experience joining a public movement and seeing activism up close."
    },
    "kuhackfest2023": {
        title: "KUHackfest 2023",
        date: "2023-02",
        description: "One of my earliest hackathons where I started taking coding seriously."
    },
    "microsoft imagine cup ideathon 2023": {
        title: "Microsoft Imagine Cup Ideathon 2023",
        date: "2023-04",
        description: "A big confidence boost that pushed me deeper into tech innovation."
    },
    "high_school_picnic": {
        title: "High School Picnic",
        date: "2023-04",
        description: "One last carefree day with school friends before everyone took different paths."
    },
    "highschoolfarewell_photos": {
        title: "High School Farewell Photos",
        date: "2023-05",
        description: "A bittersweet goodbye to the people and place that shaped my teenage years."
    },
    "taragon art museum": {
        title: "Taragon Art Museum",
        date: "2023-07",
        description: "A calm break from routine where I explored art and creativity."
    },
    "manichud_hike": {
        title: "Manichud Hike",
        date: "2023-11",
        description: "A cold, scenic hike that became one of my favorite memories with friends."
    },
    "middle_school_meetup": {
        title: "Middle School Meetup",
        date: "2023-12",
        description: "Reconnecting with old friends and realizing how far we’ve all come."
    },
    "chandragiri_hike": {
        title: "Chandragiri Hike",
        date: "2024-01",
        description: "A refreshing climb that marked the start of a new year and new goals."
    },
    "jamacho hiking": {
        title: "Jamacho Hiking",
        date: "2024-05",
        description: "A challenging trail that rewarded me with amazing views and quiet reflection."
    },
    "sagarmathahacks": {
        title: "Sagarmatha Hacks",
        date: "2024-06",
        description: "A hackathon where I pushed my limits and learned to build under pressure."
    },
    "hacktx25": {
        title: "HackTX25",
        date: "2024-10",
        description: "My first major U.S. hackathon experience and a huge milestone in my CS journey."
    },
    "hiketxst": {
        title: "Hike TXST",
        date: "2024-11",
        description: "Exploring the hidden spots around Texas State and getting closer to nature again."
    },
    "austintx": {
        title: "Austin, TX",
        date: "2024-09",
        description: "Moments from my early days discovering the city that now feels like a second home."
    },
    "img": {
        title: "img",
        date: "2025-01",
        description: "A personal snapshot from my everyday life that captures who I am right now."
    }
};

function getImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getImages(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
                // Get relative path from public folder
                const relativePath = filePath.split('public')[1];

                // Get immediate parent folder name
                const parentDir = path.dirname(filePath);
                const folderName = path.basename(parentDir);

                fileList.push({
                    src: relativePath,
                    folder: folderName,
                    // We don't need caption anymore as per user request
                    width: 800,
                    height: 600
                });
            }
        }
    });

    return fileList;
}

try {
    console.log('Scanning gallery directory...');
    const images = getImages(GALLERY_DIR);

    // Group by folder
    const grouped = {};
    images.forEach(img => {
        const key = img.folder.toLowerCase();
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(img);
    });

    // Convert to array and apply metadata
    const galleryData = [];

    Object.keys(grouped).forEach(folderKey => {
        const metadata = METADATA_MAP[folderKey];

        if (metadata) {
            galleryData.push({
                id: folderKey, // Use folder key as ID
                title: metadata.title,
                date: metadata.date,
                description: metadata.description,
                photos: grouped[folderKey]
            });
        } else {
            // Fallback for unmapped folders (if any)
            // console.warn(`Unmapped folder: ${folderKey}`);
            // Skip unmapped folders to keep it clean, or add them with defaults?
            // User provided a specific list, so let's stick to that list.
            // But if we have photos not in the list, maybe we should include them?
            // For now, let's include them at the end with basic info
            if (folderKey !== 'pictures' && folderKey !== 'events' && folderKey !== 'friends') {
                galleryData.push({
                    id: folderKey,
                    title: folderKey, // Capitalize?
                    date: "1970-01", // Old date to push to bottom
                    description: "",
                    photos: grouped[folderKey]
                });
            }
        }
    });

    // Sort by date (Newest to Oldest)
    galleryData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(galleryData, null, 2));
    console.log(`Successfully generated gallery data with ${galleryData.length} groups.`);
} catch (error) {
    console.error('Error generating gallery data:', error);
}
