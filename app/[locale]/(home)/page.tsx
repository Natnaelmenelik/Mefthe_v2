"use client";
import HomePage from "@/layouts/Home/HomePage";
import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "@/components/Loading";
const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <HomePage />
      </div>
    </>
  );
};

export default LandingPage;
