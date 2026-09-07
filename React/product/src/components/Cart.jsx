import React from 'react'
import useFetch from '../usefetch'


function Cart() {
 const data =  useFetch('https://dummyjson.com/products')
 console.log(data);

 
  return (
 <div className="container my-5">
  <div className="row g-4 justify-content-center">
    {data?.map((el) => (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={el.id}>
        <div className="card h-100 shadow-sm border-0 overflow-hidden">
          
          <img
            src={el.images[0]}
            className="card-img-top"
            alt={el.title}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold text-dark mb-2">
              {el.title}
            </h5>

            <p className="card-text text-muted flex-grow-1 small">
              {el.description}
            </p>

            <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
              <span className="fs-5 fw-semibold text-success">
                ${el.price}
              </span>

              <button className="btn btn-warning px-4 py-2 fw-medium shadow-sm">
ADD TO CART              </button>
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Cart