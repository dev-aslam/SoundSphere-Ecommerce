import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const products = [
  {
    productId: 1,
    categoryName: "Electronics",
    productName: "Smartphone",
    price: 699.99,
    quantity: 50,
    description: "Latest model with advanced features",
    color: "Black",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 2,
    categoryName: "Electronics",
    productName: "Laptop",
    price: 1299.99,
    quantity: 30,
    description: "High performance laptop for work and play",
    color: "Silver",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 3,
    categoryName: "Books",
    productName: "Science Fiction Novel",
    price: 19.99,
    quantity: 100,
    description: "A thrilling science fiction novel by a renowned author",
    color: "N/A",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 4,
    categoryName: "Clothing",
    productName: "Men's T-Shirt",
    price: 29.99,
    quantity: 200,
    description: "Comfortable and stylish men's t-shirt",
    color: "Blue",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 5,
    categoryName: "Home Appliances",
    productName: "Microwave Oven",
    price: 99.99,
    quantity: 40,
    description: "Efficient microwave oven with multiple settings",
    color: "White",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 6,
    categoryName: "Sports",
    productName: "Yoga Mat",
    price: 24.99,
    quantity: 150,
    description: "Durable and comfortable yoga mat",
    color: "Green",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 7,
    categoryName: "Beauty",
    productName: "Lipstick",
    price: 14.99,
    quantity: 80,
    description: "Long-lasting lipstick with vibrant color",
    color: "Red",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 8,
    categoryName: "Toys",
    productName: "Action Figure",
    price: 39.99,
    quantity: 60,
    description: "Collectible action figure from a popular series",
    color: "Multicolor",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 9,
    categoryName: "Automotive",
    productName: "Car Seat Cover",
    price: 49.99,
    quantity: 90,
    description: "Comfortable and stylish car seat cover",
    color: "Gray",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 10,
    categoryName: "Jewelry",
    productName: "Diamond Necklace",
    price: 999.99,
    quantity: 10,
    description: "Elegant diamond necklace for special occasions",
    color: "N/A",
    productImage: "https://picsum.photos/200",
  },
  {
    productId: 11,
    categoryName: "Furniture",
    productName: "Dining Table",
    price: 499.99,
    quantity: 15,
    description: "Elegant wooden dining table with seating for six",
    color: "Brown",
    productImage: "https://picsum.photos/200",
  },
];

const Products = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex justify-between w-full mb-4 items-center">
        <div className="bg-white rounded text-[#8B909A] py-2 px-4 max-w-[400px] flex gap-3 w-full h-[40px]">
          <input
            type="text"
            className="outline-none w-full text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Products"
          />
          <div>
            <SearchIcon />
          </div>
        </div>
        <div>
          <button className="bg-black rounded border border-black text-white text-center py-3 w-[200px] text-base font-semibold mr-10 hover:bg-white hover:text-black">
            Add Products
          </button>
        </div>
      </div>

      <div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="uppercase">
                  Product Image
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Product ID
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Product Name
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Category
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Price
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Quantity
                </TableCell>
                <TableCell align="center" className="uppercase">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className="w-[70px]">
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      className="w-[50px]"
                    />
                  </TableCell>
                  <TableCell>{product.productId}</TableCell>
                  <TableCell align="left">{product.productName}</TableCell>
                  <TableCell align="left">{product.categoryName}</TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">{product.quantity}</TableCell>
                  <TableCell align="center">
                    <div>
                      <button
                        className="bg-yellow-200 py-1 px-2 rounded text-yellow-600 text-xs font-semibold max-w-[50px] w-full 
                      mr-2">
                        Edit
                      </button>
                      <button
                        className="bg-red-200 py-1 px-2 rounded text-red-600 text-xs font-semibold max-w-[50px] w-full 
                      mr-2">
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Products;
