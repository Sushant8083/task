import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const poojas = [
    {
      name: "Durga Pooja",
    },
    {
      name: "Gopal Pooja",
    },
    {
      name: "Vastu Pooja",
    },
    {
      name: "Chandra Pooja",
    },
    {
      name: "Mahalaxmi Pooja",
    },
    {
      name: "Mrityunjay Pooja",
    },
    {
      name: "Surya Pooja",
    },
    {
      name: "Saraswati Puja",
    },
    {
      name: "Kali Pooja",
    },
    {
      name: "Bhagwat Geeta Pooja",
    },
    {
      name: "Navgrah Pooja",
    },
    {
      name: "Rahu",
    },
    {
      name: "Ketu",
    },
    {
      name: "Mangal",
    },
    {
      name: "Rudra bhishek Pooja",
    },
    {
      name: "Gath Bandhan",
    },
    {
      name: "Satya Narayan",
    },
    {
      name: "Brihaspati",
    },
    {
      name: "Nakshatra",
    },
    {
      name: "Pitra dosh",
    },
    {
      name: "Manglik Pooja",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {poojas.map((pooja, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <Link
            to={`/details/${index}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {pooja.name}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
