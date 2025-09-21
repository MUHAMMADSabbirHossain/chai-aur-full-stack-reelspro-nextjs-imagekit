"use client";

import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { useEffect, useState } from "react";

export default function Home() {
  const [first, setFirst] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async function () {
      try {
        const data = await apiClient.getVideos();

        setFirst(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>chai code</h1>
    </div>
  );
}
