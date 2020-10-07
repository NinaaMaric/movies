import React from "react";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.title} <span> ({selected.Year}) </span>
        </h2>
        <p className="raiting">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} />
          <p className="raiting">Awards: {selected.Awards}</p>
          <p className="raiting">{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
