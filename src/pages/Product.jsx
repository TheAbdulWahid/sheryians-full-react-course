import { useLocation, Outlet } from "react-router-dom";
import CollectionNav from "../components/CollectionNav";
const Product = () => {
  const location = useLocation();
  return (
    <div className="relative h-full w-full flex justify-center items-center flex-col">
      <CollectionNav />
      {location.pathname === "/product" && (
        <div>
          <h1>Product Page</h1>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Product;
