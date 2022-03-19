import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm min-h-[60px] flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-title text-2xl font-bold">Next App</a>
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/login">
                <a className="text-base text-gray-900 font-medium">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a className="text-base text-gray-900 font-medium">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
