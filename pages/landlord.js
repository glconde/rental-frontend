"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Landlord() {
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:5000/wallets")
        .then((res) => setWallet(res.data.landlordWallet))
        .catch((err) => console.error(err));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Landlord Dashboard</h1>
      <p>Wallet: ${wallet}</p>
    </div>
  );
}
