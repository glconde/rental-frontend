// glc 2025
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blockchain() {
  const [blocks, setBlocks] = useState([]);

  // get blockchain data from sqlite, polls every 2 secs
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:5000/blockchain")
        .then((res) => setBlocks(res.data.blocks))
        .catch((err) => console.error(err));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Blockchain Log</h1>
      <pre>{JSON.stringify(blocks, null, 2)}</pre>
    </div>
  );
}
