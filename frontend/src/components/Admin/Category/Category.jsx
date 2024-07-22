import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCategory from "./AddCategory";

const categories = [
  {
    categoryId: 1,
    name: "Electronics",
    status: "Active",
  },
  {
    categoryId: 2,
    name: "Books",
    status: "Active",
  },
  {
    categoryId: 3,
    name: "Clothing",
    status: "Inactive",
  },
  {
    categoryId: 4,
    name: "Home Appliances",
    status: "Active",
  },
  {
    categoryId: 5,
    name: "Sports",
    status: "Inactive",
  },
  {
    categoryId: 6,
    name: "Beauty",
    status: "Active",
  },
  {
    categoryId: 7,
    name: "Toys",
    status: "Active",
  },
  {
    categoryId: 8,
    name: "Automotive",
    status: "Inactive",
  },
  {
    categoryId: 9,
    name: "Jewelry",
    status: "Active",
  },
  {
    categoryId: 10,
    name: "Furniture",
    status: "Active",
  },
];

const Category = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between w-full mb-4 items-center">
        <div className="bg-white rounded text-[#8B909A] py-2 px-4 max-w-[400px] flex gap-3 w-full h-[40px]">
          <input
            type="text"
            className="outline-none w-full text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Category"
          />
          <div>
            <SearchIcon />
          </div>
        </div>
        <div>
          <button
            className="bg-black rounded border border-black text-white text-center py-3 w-[200px] text-base font-semibold mr-10 hover:bg-white hover:text-black"
            onClick={() => setOpen(true)}>
            Add Category
          </button>
        </div>
      </div>

      <div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="uppercase">
                  CategoryID
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Category
                </TableCell>
                <TableCell align="left" className="uppercase">
                  Status
                </TableCell>
                <TableCell align="center" className="uppercase">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow
                  key={category.categoryId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {category.categoryId}
                  </TableCell>
                  <TableCell align="left">{category.name}</TableCell>
                  <TableCell align="left">{category.status}</TableCell>
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
      <AddCategory open={open} setOpen={setOpen} />
    </div>
  );
};

export default Category;
