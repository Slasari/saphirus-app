"use client";
import React, { useEffect } from "react";
import { URL_ADMIN } from "../helpers/variables/variables";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter()
    async function checkadmin() {
    const token = localStorage.getItem("user");
    if (!token) {
      return router.push("/login");
    }
    const adminInfo = await fetch(`${URL_ADMIN}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const admin = await adminInfo.json();
    console.log(admin);
  }
  useEffect(() => {
    checkadmin()
  }, [])
  return <div>page</div>;
};

export default Dashboard;
