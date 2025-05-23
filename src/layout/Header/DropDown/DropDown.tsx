"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DropDownProps {
  label: string;
  items: { href: string; label: string }[];
}

const DropDown: React.FC<DropDownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group"
      onMouseOver={() => {
        setIsOpen(true);
      }}
    >
      <span className="cursor-pointer hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 transition-all duration-300">
        {label}
      </span>
      <div
        className={`absolute left-0 top-full ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50`}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <ul className="flex flex-col py-2">
          {items.map((item, i) => (
            <li key={i} className="px-4 py-2 text-nowrap">
              <Link href={item.href}>
                <span className="block cursor-pointer hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 transition-all duration-300">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropDown;
