import React from "react";

export default function Select(props) {
  const { options = [] } = props;
  return (
    <select
      {...props}
      options=""
      className="border rounded-xl p-3 mb-4 w-full max-w-sm text-center"
    >
      <option> -- select option -- </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
