"use client";

import React, { Component, useEffect, useState } from "react";
import axios from "axios";

interface Location {
  latitude: number;
  longitude: number;
}
const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
  return uuidRegex.test(uuid);
};

export default function PetDetailsPage({
  params,
}: {
  params: { guid: string };
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if(isValidUUID(params.guid)) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setLocation({
              latitude: 24.5245061,
              longitude: 111.8325462,
            });
            console.error("Error getting location:", error);
  
          }
        );
      } else {
        setLocation({
          latitude: 24.5245061,
          longitude: 111.8325462,
        });
        console.error("Geolocation is not supported by this browser.");
      
      }
    }
    else{
      window.location.href = siteUrl as string;
    }
  }, []);

  useEffect(() => {
    if (location.latitude != 0 && location.longitude != 0) {
      axios
        .post(`${apiUrl}/scan/${params.guid}`, location)
        .then((response) => {
          console.log(response);

          const referrer = document.referrer;
          // Append the referrer as a query parameter to the URL
          const urlWithReferrer = `${siteUrl}/pet/${params.guid}`;
          // Redirect to the modified URL
          window.location.href = urlWithReferrer;
        })
        .catch((error) => {
          window.location.href = siteUrl as string;
        })
        .finally(() => {
          const referrer = document.referrer;
          // Append the referrer as a query parameter to the URL
          const urlWithReferrer = `${siteUrl}/pet/${params.guid}`;
          // Redirect to the modified URL
          window.location.href = urlWithReferrer;
        });
    }
  }, [location]);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* <h1>This page is not available</h1>
      <p>You are redirecting to http://petnfc.com.au</p> */}
    </div>
  );
}
