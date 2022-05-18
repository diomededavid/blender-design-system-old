import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  // primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "btn-xs" | "btn-sm" | "btn" | "btn-lg";

  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional class
   */
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${size} btn `}
      style={{backgroundColor}}
      {...props}
    >
      {label}
    </button>
  );
};
