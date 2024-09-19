import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
    className? : string,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.FormEvent)=> void
};

const SearchInput = (props: Props) => {
    const baseStyle = "border flex items-center w-fit justify-center rounded overflow-hidden"
    const className = twMerge(baseStyle,props.className)
  return (
    <div className={className}>
      <input
        onChange={props.onChange}
        type="text"
        placeholder="Search"
        className="outline-none py-1 text-slate-600 px-3"
      />
      <div onClick={props.onSubmit} className="bg-slate-900 w-full h-full p-2 hover:text-primary cursor-pointer ">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchInput;
