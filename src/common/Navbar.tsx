import { Link, NavLink } from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const navItems = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "/about" },
  { title: "Advantages", to: "/advantages" },
  { title: "Products", to: "/products" },
  { title: "Contact Us", to: "/contact" },
];
export default function Navbar() {
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <nav ref={navRef}>
      <div className="relative widescreen:hidden z-[100] text-end">
        <button onClick={() => setMobileNavShown(!mobileNavShown)}>
          <MaterialIcon className="text-4xl text-primary" codepoint="e5d2" />
        </button>
        {mobileNavShown && (
          <div className="absolute right-0 top-full flex flex-col gap-y-2 rounded-lg border bg-background py-3 shadow-md">
            {navItems.map((item, i) => (
              <div className="flex flex-col items-center" key={i}>
                <NavLink
                  onClick={() => setMobileNavShown(false)}
                  to={item.to}
                  className={({ isActive }) =>
                    twMerge(
                      "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                      isActive
                        ? "rounded-lg border-primary bg-primary bg-opacity-5 text-primary"
                        : undefined
                    )
                  }
                >
                  {item.title}
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mobile:hidden flex flex-row z-[100] px-24 py-4 justify-between items-center">
        <img src="/logo.png" />
        <div className="flex flex-row gap-x-2">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              // className="py-2 duration-300 hover:text-primary hover:brightness-75"
              className={({ isActive }) =>
                twMerge(
                  "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                  isActive
                    ? "rounded-lg border-primary bg-primary bg-opacity-5 text-primary"
                    : undefined
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
