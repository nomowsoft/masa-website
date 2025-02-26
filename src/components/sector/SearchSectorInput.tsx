"use client";
import React, { useState } from "react";

const SearchSectorInput = () => {
  const [searchText, setSearchTexr] = useState("");
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.preventDefault(), "5555555555555555555");
  }
  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto">
      <input
        className="w-full p-3 rounded-xl border border-success text-success"
        type="search"
        placeholder="ابحث عن قطاع"
        value={searchText}
        onChange={(e) => setSearchTexr(e.target.value)}
      />
    </form>
  );
};

export default SearchSectorInput;
