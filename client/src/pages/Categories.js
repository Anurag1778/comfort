import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";

const Categories = () => {
  const Categories = useCategory(); // Assuming useCategory returns an array of categories

  return (
    <Layout title={"All Categories"}>
      <div className="container mt-5 ">
        <div className="row">
          {Categories.map((c) => (
            <div className="col-md-4 mb-3" key={c._id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{c.name}</h5>
                  <Link
                    to={`/category/${c.slug}`}
                    className="btn btn-success mt-auto"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
