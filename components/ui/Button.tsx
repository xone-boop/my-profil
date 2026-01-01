import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, isExternal, children, ...props }, ref) => {
        const variants = {
            primary: "bg-teal-500 text-white hover:bg-teal-600 shadow-sm hover:shadow-md border-transparent",
            secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm",
            outline: "bg-transparent border border-teal-500 text-teal-600 hover:bg-teal-50",
            ghost: "bg-transparent text-gray-600 hover:text-teal-600 hover:bg-gray-100/50 border-transparent",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            if (isExternal) {
                return (
                    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                        {children}
                    </a>
                );
            }
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <button className={classes} ref={ref} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
