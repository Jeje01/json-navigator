import data from "../json/data.json"
import React, { useEffect, useState } from "react";
import { handleJSON } from "../utils";
import List from "./List";
import "./home.scss";

const Home = () => {
  const [hierarchy, setHierarchy] = useState<object>()

  useEffect(() => {
    setHierarchy(handleJSON(data))
  }, [])

  return hierarchy ? (
    <section className="home">
    <div className="home">
      <h1>JSON navigator</h1>
      <List hierarchy={hierarchy} />
    </div>
  ) : <>Loading...</>
}

export default Home;
