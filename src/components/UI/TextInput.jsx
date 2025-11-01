import React from "react";

export default function TextInput(props) {
  return (
    <input
      {...props}
      type="text"
      className={`border rounded-xl p-3 mb-4 w-full max-w-sm text-center ${props.className}`}
    />
  );
}
