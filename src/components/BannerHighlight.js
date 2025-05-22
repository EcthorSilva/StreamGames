"use client";

import React from "react";
import Image from "next/image";

export default function BannerCard({ img, alt, price, discount }) {
  return (
    <div className="container pb-0">
      <div className="row">
        <div className="col-12 col-md-12">
          <div style={{ scrollSnapType: "x mandatory", touchAction: "pan-x" }}>
            <div className="flex-shrink-0 p-2">
              <div className="card bg-body-tertiary border rounded-3 position-relative">
                <a href="#" rel="noopener noreferrer" className="text-reset">
                  <Image src={img} alt={alt} width={1200} height={500} className="card-img-top img-fluid border rounded" style={{ objectFit: "cover", width: "100%", height: "auto" }} />
                  <div className="position-absolute bottom-0 end-0 p-2">
                    <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} >
                      {price}{" "}
                      <span className="badge text-bg-danger">{discount}</span>
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="container featurette-divider" />
    </div>
  );
}
