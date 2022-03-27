import React from "react";
import "./element.scss";

interface IElement {
  keyName: string;
  value: string | object;
  changeCurrentValue: (value: string | object) => void
}

const Element = ({
  keyName,
  value,
  changeCurrentValue
}: IElement) => {
  const isLeafElement = typeof value === "string"
  const chevron = !isLeafElement ? ">" : ""

  return (
    <li className="element">
      <button onClick={() => changeCurrentValue(value)}>
        {`${keyName} ${chevron}`}
      </button>
    </li>
  )
}

export default Element