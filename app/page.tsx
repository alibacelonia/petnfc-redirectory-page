'use client'

import React, { Component, useEffect } from "react";

export default async function PetDetailsPage({ params }: {params: {guid: string}}) {
  useEffect(() => {
    window.location.href = `http://secure-petnfc.info/pet/${params.guid}`;
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <h1>This page is not available</h1>
      <p>You are redirecting to https://secure-petnfc.info/</p>
    </div>
  );
}
