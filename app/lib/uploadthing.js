'use client';

import { createUploadthing } from "uploadthing/next";

// IMPORTANT: The string 'imageUploader' MUST exactly match the slug defined on the server
export const { useUploadThing, UploadButton } = createUploadthing('imageUploader');
