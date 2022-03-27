import React from "react";
import VerticalElement from "./VerticalElement";

interface IVerticalList {
  hierarchy: any;
}

const VerticalList = ({
  hierarchy,
}: IVerticalList) => {

  return (
    <ul className="vertical-list">
      {Object.keys(hierarchy).map((key) => (
        <VerticalElement key={key} keyName={key} value={hierarchy[key]} />
      ))}
    </ul>
  )
};

export default VerticalList