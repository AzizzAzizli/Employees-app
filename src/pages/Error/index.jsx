import React from "react";
import { Header } from "../../shared/components/Header";
import { Nav } from "../../shared/components/Nav";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <h1 className="text-danger fs-1 fw-bold text-center mt-5">
        Page Not Found
      </h1>
    </div>
  );
};
