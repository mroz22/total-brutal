import Link from "next/link";

const Header = () => {
  return (
    <h2 style={{ textWrap: "nowrap" }}>
      <Link href="/" className="hover:underline">
        {"<--"}
      </Link>
    </h2>
  );
};

export default Header;
