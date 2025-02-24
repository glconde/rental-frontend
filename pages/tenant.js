"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Tenant() {
  const [wallet, setWallet] = useState(1000);

  const startContract = () => {
    axios
      .post("http://localhost:5000/start-contract")
      .then((res) => setWallet(res.data.tenantWallet))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:5000/wallets")
        .then((res) => setWallet(res.data.tenantWallet))
        .catch((err) => console.error(err));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Tenant Dashboard</h1>
      <p>Wallet: ${wallet}</p>
      <button onClick={startContract}>Start Rental Contract</button>
    </div>
  );
}
