import React from "react";

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://b.zmtcdn.com/data/reviews_photos/50b/40529958ee469a6818c44d4a9b10050b_1543932153.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="Asanzo"
        />
{/* heading and address */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Asanzo</h5>
          <p className="rest_address">Civil Lines, Jabalpur </p>
          {/* reviews and rating */}
          <div className="rating-outer">
            <div className="rating-inner"></div>
            <span id="no_of_reviews">140 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
