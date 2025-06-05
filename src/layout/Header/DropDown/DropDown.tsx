"use client";

import React from "react";
import Link from "next/link";

interface DropDownProps {
  label: string;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <li className="relative group" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <span className="cursor-pointer hover:font-semibold hover:underline hover:decoration-[#52BECA] underline-offset-8 transition-all duration-300 relative z-10">
        {label}
      </span>
      <div
        className={`absolute left-0 top-0 ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-0 pt-8`}
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
