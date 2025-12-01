"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-lg bg-kr-blue text-white font-semibold hover:bg-kr-darkBlue transition-colors ${className}`}
        >
            {children}
        </button>
    );
}
