import Link from "next/link";
import React from "react";
import { Route } from "../../rounting";

type Props = { routes: Route[] };

const MainNavigation = ({ routes }: Props) => {
  return (
    <div className="navigation-wrapper">
      <nav className="navigation container">
        {routes.map(({ href, text }, index) => (
          <Link passHref href={href} key={href + text + index}>
            <a className="link">{text}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNavigation;
