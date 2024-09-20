import { DropdownItem } from "@/types";
import React from "react";


type Props = {
  title: string; // Title for the dropdown button
  items: DropdownItem[]; // Array of dropdown items
  className?: string; // Additional class for styling
};

export default function Dropdown({ title, items, className = "" }: Props) {
  return (
    <div className={`dropdown dropdown-hover ${className}`}>
      <div tabIndex={0} role="button" className="btn m-1">
        {title}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {items.map((item, index) => (
          <li key={index}>
            <a onClick={item.onClick}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
