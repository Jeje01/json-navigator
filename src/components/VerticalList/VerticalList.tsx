import React, { useState } from "react";
import VerticalElement from "./VerticalElement";

interface IVerticalList {
  hierarchy: object;
}

const VerticalList = ({
  hierarchy,
}: IVerticalList) => {

  return (
    <ul className="vertical-list">
      {Object.keys(hierarchy).map((key) => (
        // @ts-ignore
        <VerticalElement key={key} keyName={key} value={hierarchy[key]} />
      ))}
    </ul>
  )
};

export default VerticalList