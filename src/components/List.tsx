import React, {useState} from "react";
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

  return (
    <>
      <ul className="list">
        {Object.keys(hierarchy).map((key) => (
          // @ts-ignore
          <Element keyName={key} value={hierarchy[key]} changeCurrentValue={changeCurrentValue} />
        ))}
      </ul>
      {typeof currentValue === "string" ? <span>{currentValue}</span> : <List hierarchy={currentValue} />}
    </>
  )
}

export default List