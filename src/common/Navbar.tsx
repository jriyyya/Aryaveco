import { Link } from "react-router-dom";
const navItems = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "/about" },
  { title: "Advantages", to: "/advantages" },
  { title: "Products", to: "/products" },
  { title: "Contact Us", to: "/contact" },
];
export default function Navbar() {
  return (
    <nav className="flex flex-row z-[100] px-24 py-4 justify-between items-center">
      <img src="/logo.png" />
      <div className="flex flex-row gap-x-8">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="py-2 duration-300 hover:text-primary hover:brightness-75"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
