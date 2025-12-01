"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export default function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            {...props}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kr-blue focus:outline-none ${className}`}
        />
    );
}
