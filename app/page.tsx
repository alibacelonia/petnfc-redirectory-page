"use client";

import React, { Component, useEffect } from "react";
import axios from "axios";
export default function PetDetailsPage({
  params,
}: {
  params: { guid: string };
}) {

  const apiUrl = process.env.NEXT_PUBLIC_SITE_URL;
  useEffect(() => {
    const referrer = document.referrer;
        // Redirect to the modified URL
        window.location.href = apiUrl as string;
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <h1>This page is not available</h1>
      <p>You are redirecting to http://petnfc.com.au</p>
    </div>
  );
}
