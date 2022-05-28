interface CardProps {
  /**
   * Card Title
   */

  title: string;

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
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">{children}</div>
    </div>
  </div>
);

export default Card;
