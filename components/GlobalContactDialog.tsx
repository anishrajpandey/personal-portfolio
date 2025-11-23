"use client";
import React from "react";
import { useContact } from "@/context/ContactContext";
import ContactDialog from "@/app/ContactDialog";

export default function GlobalContactDialog() {
  const { isContactOpen, closeContact } = useContact();
  return <ContactDialog isOpen={isContactOpen} onClose={closeContact} />;
}
