import React, { ReactNode } from "react";


export const Box = ({ children, className }: {children?: ReactNode, className?: string}) => {

    return (
        <div className={`p-4 bg-text-background opacity-90 text-dark-text shadow-big-shadow ${className}`}>
            {children}
        </div>
    )
}

export const DarkBox = ({ children, className }: {children?: ReactNode, className?: string}) => {

    return (
        <div className={`border border-gray-600 border-opacity-20 bg-dark-text-background h-[400px] w-[200px] text-dark-text shadow-big-shadow bg-opacity-70 ${className}`}>
            {children}
        </div>
    )
}
    