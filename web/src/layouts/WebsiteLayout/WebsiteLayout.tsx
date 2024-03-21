import { lazy } from "react";

const Footer = lazy(() => import("src/components/Footer/Footer"));
import Header from "src/components/Header/Header";

type WebsiteLayoutProps = {
  children?: React.ReactNode;
};

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default WebsiteLayout;
