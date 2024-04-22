
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Anchor = ({ content, colorStyle, href, }) => {
  return (
    <div className="">
      <FlyoutLink href={href} colorStyle={colorStyle} >
        {content}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, colorStyle, }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);


  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link
        to={href}
        className={`relative transition-colors duration-200  ${
          location.pathname === href && "hover:cursor-default text-primary"
        } ${colorStyle}`}
      >
        {children}
        {location.pathname !== href && (
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary-dark transition-transform duration-300 ease-out"
          />
        )}
      </Link>
    </div>
  );
};

export default Anchor;
