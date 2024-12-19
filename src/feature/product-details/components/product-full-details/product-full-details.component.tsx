import { ProductResponse } from "../../../shared";

export default function ProductFullDetails({
  product,
}: {
  product: ProductResponse;
}) {
  return (
    <div className="max-w-lg mx-auto my-2 border rounded-lg shadow-md p-6 bg-white">
      <h2 className="text-xl font-bold mb-4">{product.brand}</h2>

      <p
        className={`${
          product.availabilityStatus.toLocaleLowerCase() === "in stock"
            ? "text-green-600"
            : "text-red-600"
        } font-semibold`}
      >
        Status: {product.availabilityStatus}
      </p>

      <p className="text-gray-700 mt-2">
        Return Policy:{" "}
        <span className="font-medium">{product.returnPolicy}</span>
      </p>

      <p className="text-gray-700 mt-2">
        Category: <span className="font-medium">{product.category}</span>
      </p>

      <p className="text-gray-700 mt-2">
        Shipping Info:{" "}
        <span className="font-medium">{product.shippingInformation}</span>
      </p>

      <p className="text-gray-700 mt-2">
        Stock:{" "}
        <span className="font-medium">{product.stock} items available</span>
      </p>

      <p className="text-gray-700 mt-2">
        Tag:{" "}
        {product.tags.map((tag, index) => (
          <span className="font-medium" key={`${tag}-${index}`}>
            {tag + (index !== product.tags.length - 1 ? ", " : "")}
          </span>
        ))}
      </p>

      <p className="text-gray-700 mt-2">
        Warranty Info:{" "}
        <span className="font-medium">{product.warrantyInformation}</span>
      </p>
      {/* 
  <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
    Add to Cart
  </button> */}
    </div>
  );
}
