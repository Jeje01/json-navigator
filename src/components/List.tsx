import React, { useState } from "react";
import Element from "./Element";
import "./list.scss";

interface IList {
  hierarchy: object;
}

const List = ({
  hierarchy,
}: IList) => {
  const [currentValue, setCurrentValue] = useState<string | object>("")
  const changeCurrentValue = (value: string | object) => setCurrentValue(value)
  const [selectedElement, setSelectedElement] = useState<string>()

  return (
    <section className="list">
      <ul>
        {Object.keys(hierarchy).map((key) => (
          // @ts-ignore
          <Element keyName={key} value={hierarchy[key]} changeCurrentValue={changeCurrentValue} selected={key === selectedElement} selectElement={setSelectedElement} />
        ))}
      </ul>
      {typeof currentValue === "string" ? (currentValue !== "" && <span className="text">{currentValue}</span>) : <List hierarchy={currentValue} />}
    </section>
  )
}

export default List