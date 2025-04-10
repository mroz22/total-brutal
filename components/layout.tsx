import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
