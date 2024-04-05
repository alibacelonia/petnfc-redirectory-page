'use client'

import React, { Component, useEffect } from "react";

export default async function PetDetailsPage({ params }: {params: {guid: string}}) {
  useEffect(() => {
    // Get the current referrer
    const referrer = document.referrer;
  
    // Append the referrer as a query parameter to the URL
    const urlWithReferrer = `http://petnfc.com.au/pet/${params.guid}?referrer=${encodeURIComponent(referrer)}`;
  
    // Redirect to the modified URL
    window.location.href = urlWithReferrer;
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <h1>This page is not available</h1>
      <p>You are redirecting to http://petnfc.com.au</p>
    </div>
  );
}
