import React from "react";
import Head from "next/head";
import { Route } from "../../rounting";
import MainNavigation from "../main-navigation";

type Props = { routes: Route[]; children: React.ReactNode };

const Layout = ({ routes, children }: Props) => {
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <div>
        <MainNavigation routes={routes} />
        <div className="container py:1">{children}</div>
      </div>
    </>
  );
};

export default Layout;
