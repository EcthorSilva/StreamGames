"use client";

import React from "react";
import Image from 'next/image';

export default function DistributorHighlight({ title, products }) {
  return (
    <div className="container py-3">
      <div className="col-12 col-md-12 d-flex align-items-center justify-content-center justify-content-lg-start pb-2">
        <div className="col-9 col-md-11">
          <h2 className="pb-0 ps-3 ps-md-0">
            <span className="text-body-secondary">{title}</span>
          </h2>
        </div>
        <div className="col-4 col-md-1 ps-3 ps-md-0">
          <button type="button" className="btn btn-outline-secondary">ver mais</button>
        </div>
      </div>

      <div className="card-body pb-3">
        <div className="row">
          {products.map((game, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card">
                <Image
                    src={game.img}
                    alt={`Imagem do produto ${game.title}`}
                    className="card-img-top"
                    width={600} // ou algo proporcional à imagem
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{game.title}</h5>
                  <i className="bi bi-steam text-muted"></i>&nbsp;
                  <i className="bi bi-windows text-muted"></i>&nbsp;
                  <div className="position-absolute bottom-0 end-0 p-2">
                    <h6
                      className="text-reset bg-dark bg-opacity-75 p-2 rounded"
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      {game.price} <span className="badge text-bg-danger">{game.discount}</span>
                    </h6>
                  </div>
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-secondary mt-3 ps-3 pe-3"
                  >
                    <i className="bi bi-cart-plus"> adicionar</i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="container featurette-divider" />
    </div>
  );
}
