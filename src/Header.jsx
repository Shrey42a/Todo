import React from "react";

function Header()  {
  return (
    <nav className="nav shadow-zinc-800 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/"><p className="text-2xl font-medium leading-6 text-gray-900 sm:truncate">X TODO</p></a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
