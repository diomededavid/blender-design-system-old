// import {Button} from "../Button";

interface CardProps {
  /**
   * Card Title
   */

  title?: string;

  /**
   * Card Description
   */

  description?: string;

  /**
   * Accept Children
   */

  children?: React.ReactNode;
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
export const Card = ({title, description, children}: CardProps) => (
  <div className="card w-96 white shadow">
    {/* make shadow style to chose from */}
    <div className="card-body"></div>
  </div>
);

export const CardFull = ({title, description, children}: CardProps) => (
  <div className="card w-96 white shadow">
    {/* make shadow style to chose from */}
    <div className="card-body">
      {title && <h2 className="card-title"> {title}</h2>}

      <p className="card-title justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14">
          <path
            d="M 0.5 2 C 0.5 1.47 0.711 0.961 1.086 0.586 C 1.461 0.211 1.97 0 2.5 0 L 6.5 0 C 6.765 0 7.02 0.105 7.207 0.293 C 7.395 0.48 7.5 0.735 7.5 1 C 7.5 1.265 7.395 1.52 7.207 1.707 C 7.02 1.895 6.765 2 6.5 2 L 2.5 2 L 2.5 12 L 12.5 12 L 12.5 8 C 12.5 7.735 12.605 7.48 12.793 7.293 C 12.98 7.105 13.235 7 13.5 7 C 13.765 7 14.02 7.105 14.207 7.293 C 14.395 7.48 14.5 7.735 14.5 8 L 14.5 12 C 14.5 12.53 14.289 13.039 13.914 13.414 C 13.539 13.789 13.03 14 12.5 14 L 2.5 14 C 1.97 14 1.461 13.789 1.086 13.414 C 0.711 13.039 0.5 12.53 0.5 12 Z"
            fill="rgb(107,114,128)"
          />
        </svg>
      </p>
      {description && <p>{description}</p>}
      <div className="card-actions justify-end">{children}</div>
    </div>
  </div>
);

export default {Card, CardFull};
