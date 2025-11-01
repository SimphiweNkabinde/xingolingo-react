import React from "react";

export default function NumberInput(props) {
  return (
    <input
      {...props}
      type="number"
      className={`border rounded-xl p-3 mb-4 w-full max-w-sm text-center ${props.className}`}
    />
  );
}
