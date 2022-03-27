import React from "react";
import "./element.scss";

interface IElement {
  keyName: string;
  value: string | object;
  changeCurrentValue: (value: string | object) => void;
  selected: boolean;
  selectElement: (key: string) => void;
}

const Element = ({
  keyName,
  value,
  changeCurrentValue,
  selected,
  selectElement,
}: IElement) => {
  const isLeafElement = typeof value === "string"
  const chevron = !isLeafElement ? " ▸" : ""

  return (
    <li className="element">
      <button onClick={() => {
        changeCurrentValue(value)
        selectElement(keyName)
      }} className={selected ? "selected" : ""}>
        {`${keyName} ${chevron}`}
      </button>
    </li>
  )
}

export default Element