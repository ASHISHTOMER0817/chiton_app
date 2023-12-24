"use client";

import { useState } from "react";

interface inputSpaceInterface {
  classList: string;
  placeholder: string;
  type: string;
}

const inputSpace: React.FC<inputSpaceInterface> = ({
  classList,
  placeholder,
  type,
}) => {

  const [value, setValue] = useState()
  return (
    <>
      <input
        className={classList}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </>
  );
};
export default inputSpace;
