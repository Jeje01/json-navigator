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
      <List hierarchy={hierarchy} />
    </section>
  ) : <>Loading...</>
}

export default Home;
