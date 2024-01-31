import React from "react";
import { tv } from "tailwind-variants";
const Dummy = () => {
  const button = tv(
    {
      base: "font-semibold text-white py-1 px-3 rounded-full active:opacity-80",
      variants: {
        color: {
          primary: "bg-blue-500 hover:bg-blue-700",
          secondary: "bg-purple-500 hover:bg-purple-700",
          success: "bg-green-500 hover:bg-green-700",
        },
        size: {
          small: "py-0 px-2 text-xs",
          medium: "py-1 px-2 text-sm",
          large: "py-1.5 px-3 text-md",
        },
      },
    },
    {
      responsiveVariants: ["sm", "md"], // `true` to apply to all screen sizes
    }
  );

  return (
    <div>
      <button
        className={button({
          color: {
            initial: "primary",
            sm: "success",
            md: "secondary",
          },
          size: {
            initial: "small",
            sm: "medium",
            md: "large",
          },
        })}
      >
        Click me
      </button>
    </div>
  );
};

export default Dummy;
