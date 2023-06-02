import React from "react";

const Button = ({ variant = "default", className = "", width = "md", align = "left", ...props }) => {
  let buttonClass = "inline-block px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none";

  // Apply color variants based on the 'variant' prop
  switch (variant) {
    case "primary":
      buttonClass += ` bg-alt text-light-text hover:bg-light-text hover:text-alt`;
      break;
    case "secondary":
      buttonClass += ` bg-text-back text-dark-text hover:bg-dark-text hover:text-text-back`;
      break;
    case "danger":
      buttonClass += ` bg-darker-back text-light-text hover:bg-light-text hover:text-darker-back`;
      break;
    default:
      buttonClass += ` bg-dark-back text-light-text hover:bg-alt hover:text-text-light`;
  }

  // Apply width classes based on the 'width' prop
  switch (width) {
    case "sm":
      buttonClass += ` w-36`;
      break;
    case "lg":
      buttonClass += ` w-full`;
      break;
    default:
      buttonClass += ` w-1/2`;
  }

  // Apply alignment classes based on the 'align' prop
  switch (align) {
    case "middle":
      buttonClass += ` mx-auto`;
      break;
    case "right":
      buttonClass += ` ml-auto`;
      break;
    default:
      buttonClass += ` mr-auto`;
  }

  // Append additional classes
  buttonClass += ` ${className}`;

  return (
  <button className={buttonClass} {...props} />
  )
};

export default Button;
