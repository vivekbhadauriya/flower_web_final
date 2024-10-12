import React, { useState, useRef, useEffect } from 'react';

export function Select({ children, ...props }) {
    return (
      <div className="relative" {...props}>
        {children}
      </div>
    );
  }
  
  export function SelectTrigger({ children, className, ...props }) {
    return (
      <button
        className={`flex items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    );
  }
  
  export function SelectValue({ children, placeholder, ...props }) {
    return (
      <span {...props}>
        {children || placeholder}
      </span>
    );
  }
  
  export function SelectContent({ children, ...props }) {
    return (
      <div className="relative mt-1 max-h-60 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md" {...props}>
        {children}
      </div>
    );
  }
  
  export function SelectItem({ children, value, ...props }) {
    return (
      <div
        className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span className="block truncate">{children}</span>
      </div>
    );
  }
  
  // Dropdown Component (to be used with Select)
  export function Dropdown({ trigger, content, isOpen, setIsOpen }) {
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsOpen]);
  
    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        {trigger}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {content}
            </div>
          </div>
        )}
      </div>
    );
  }
  