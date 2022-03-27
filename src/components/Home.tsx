import data from "../json/data.json"
import React, { useEffect, useState } from "react";
import { handleJSON } from "../utils";
import HorizontalList from "./HorizontalList";
import "./home.scss";

const Home = () => {
  const [hierarchy, setHierarchy] = useState<object>()
  const [jsonData, setJsonData] = useState<object>(data)
  const [currentFileName, setCurrentFileName] = useState<string>()

  const changeHandler = (event: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    setCurrentFileName(event.target.files[0].name)
    fileReader.onload = (event) => {
      if (event?.target?.result) {
        setJsonData(JSON.parse(event.target.result as string))
      }
    }
  }

  useEffect(() => {
    setHierarchy(handleJSON(jsonData))
  }, [jsonData])

  return hierarchy ? (
    <div className="home">
      <h1>JSON navigator</h1>
      <section className="json-info">
        <label htmlFor="upload_json">JSON 파일 업로드</label>
        <input type="file" accept=".json" id="upload_json" onChange={changeHandler} />
        <p>{`${currentFileName || "기본 데이터"} 보는 중`}</p>
      </section>
      <HorizontalList key={currentFileName} hierarchy={hierarchy} />
    </div>
  ) : <>Loading...</>
}

export default Home;
