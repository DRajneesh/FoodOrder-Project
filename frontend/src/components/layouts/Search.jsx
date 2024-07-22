import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search Your Favorite Restaurant ..."
          id="search_field"
          className="form-control"
        />
        <div className="input-group-append">
          <button className="btn" id="search_btn">
            <IoSearchSharp className="Io IoSearchSharp" />
          </button>
        </div>
      </div>
    </form>
  );
}
