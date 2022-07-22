import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndexForm() {
  const [entry, setEntry] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (entry !== "") {
      event.preventDefault();
      navigate("/module/" + entry, { state: { entry } });
    } else {
      event.preventDefault();
    }
  };

  return (
    <form method="get" onSubmit={handleSubmit}>
      <input
        type="text"
        id="query"
        name="query"
        value={entry}
        onChange={(event) => setEntry(event.target.value)}
        placeHolder="search"
      ></input>
    </form>
  );
}
