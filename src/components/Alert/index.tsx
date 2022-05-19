import React from "react";

interface AlertProps {
    /**
     * Alert color options
     */
    color: "alert-info" | "alert-success" | "alert-warning" | "alert-error";

    /**
     * Alert title
     */
    title: string;

    /**
     * Alert description
     */
    description: string;
}

/**
 * Primary UI component for user interaction
 */
export const Alert = ({color, title, description, ...props}: AlertProps) => {
    return (
        <div className={`alert ${color} shadow-lg`}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     className="stroke-current flex-shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                    <h3 className="font-bold">{title}</h3>
                    {description && (<div className="text-xs">{description}</div>) }
                </div>
            </div>
        </div>
    );
};
