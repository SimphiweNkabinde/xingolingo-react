import React from "react";
export default function Button({
  children,
  onClick,
  className,
  variant = "light-outline",
  disabled,
}) {
  const variants = {
    "light-outline":
      "flex items-center justify-center cursor-pointer gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md border-gray-200 hover:border-gray-300  active:border-blue-500 active:bg-blue-50",
    primary:
      "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
    "primary-outline":
      "flex items-center justify-center cursor-pointer gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md border-blue-600 hover:border-gray-300  active:border-blue-700 active:bg-blue-50",
    danger:
      "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
    "danger-outline":
      "flex items-center justify-center cursor-pointer gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md border-red-500 hover:border-gray-300  active:border-red-500 active:bg-red-50",
    success:
      "w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
    "success-outline":
      "flex items-center justify-center cursor-pointer gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md border-green-500 hover:border-gray-300  active:border-green-500 active:bg-green-50",
    secondary:
      "w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
    warning:
      "w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
