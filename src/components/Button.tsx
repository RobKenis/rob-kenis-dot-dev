import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export const Button = ({label}: ButtonProps) => {
    return (
        <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {label}
        </button>
    );
};
