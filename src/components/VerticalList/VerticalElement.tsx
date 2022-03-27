import React, { useState } from "react";
import "./vertical-element.scss";
import VerticalList from "./VerticalList";

interface IVerticalElement {
  keyName: string;
  value: string | object;
}

const VerticalElement = ({
  keyName,
  value,
}: IVerticalElement) => {
  const [open, setOpen] = useState<boolean>(false)
  const chevron = open ? "▼ " : "▸ "
  const onClickHandler = () => {
    setOpen(!open)
  }

  const child = (
    typeof value === "string" ? <span className="value">{value}</span> : <VerticalList hierarchy={value} />
  )

  return (
    <li className="vertical-element">
      <button onClick={onClickHandler}>
        {`${chevron}${keyName}`}
      </button>
      {open && child}
    </li>
  )
}

export default VerticalElement