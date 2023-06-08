import Link from "next/link";

const Header = () => {
  return (
    <header className=" z-10  p-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link className="text-2xl font-bold" href="/">
            Next Ecommerce
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="text-2xl font-bold" href="/products">
            Products
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="text-2xl font-bold" href="/cart">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
