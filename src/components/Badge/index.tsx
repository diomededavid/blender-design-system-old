import React from "react";

interface BadgeProps {
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
  size?: "badge-xs" | "badge-sm" | "badge-md" | "badge-lg";

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
export const Badge = ({size, backgroundColor, label, ...props}: BadgeProps) => {
  return (
    <button
      type="button"
      className={`${size} badge `}
      style={{backgroundColor}}
      {...props}
    >
      {label}
    </button>
  );
};
