import MaterialIcon from "./MaterialIcon";
import { Link } from "react-router-dom";
const navItems = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "/about" },
  { title: "Advantages", to: "/advantages" },
  { title: "Products", to: "/products" },
  { title: "Contact Us", to: "/contact" },
];

const downloads = [
  {
    title: "CE Certificates",
    to: "/documents/downloads/CE.pdf",
  },
  {
    title: "Water test reports",
    to: "/documents/downloads/testReport.pdf",
  },
  {
    title: "UAE test report",
    to: "documents/downloads/uae.pdf",
  },
  {
    title: "Brochure",
    to: "documents/downloads/brochure.pdf",
  },
  {
    title: "Product Catalogue",
    to: "documents/downloads/product.pdf",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground p-page pt-6 py-10 text-back flex flex-row mobile:flex-col justify-between mobile:px-2 mobile:gap-y-4">
      <div className="flex flex-col gap-y-6 mobile:flex-row mobile:items-center">
        <div className="flex flex-col gap-y-6 mobile:gap-y-2 mobile:basis-1/2">
          <img
            src="/images/logo2.png"
            alt="logo"
            className="w-[15vw] mobile:w-[40vw]"
          />
          <div className="mobile:text-sm">
            Aryav Ecofriendly Resources Pvt Ltd Kolkata
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mobile:basis-1/2 mobile:text-sm ">
          <div className="flex flex-row gap-x-2">
            <MaterialIcon codepoint="e0b0" className="text-primary" />
            <div>+91 33400 51052</div>
          </div>
          <div className="flex flex-row gap-x-2">
            <MaterialIcon codepoint="e0c8" className="text-primary" />
            <div>5/1 Dr Rajendra Prasad Sarani, Kolkata</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mobile:gap-y-2">
        <div className="text-xl">Quick links</div>
        <div className="flex flex-col gap-y-2 mobile:flex-wrap mobile:h-[8vh]">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="duration-300 hover:text-back text-primary hover:brightness-75"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mobile:gap-y-2">
        <div className="text-xl">Downloads</div>
        <div className="flex flex-col gap-y-2 mobile:flex-wrap mobile:h-[8vh]">
          {downloads.map((item, i) => (
            <Link
              target={`_newABC`}
              to={item.to}
              className="duration-300 hover:text-back text-primary hover:brightness-75"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mobile:gap-y-2">
        <div className="text-2xl">Subscribe to our newsletter</div>
        <input
          placeholder="Enter your email"
          className="px-4 py-2 rounded-xl border-primary border-2 text-front"
        />
      </div>
    </footer>
  );
}
