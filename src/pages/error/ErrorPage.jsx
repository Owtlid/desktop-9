import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h3>404</h3>

      <div
        style={{
          height: "40px",
          fontWeight: 600,
          width: "2px",
          background: "#eaeaea",
          borderRadius: "12px",
        }}
      ></div>

      <p>This page could not be found.</p>
    </div>
  );
};

export default ErrorPage;
