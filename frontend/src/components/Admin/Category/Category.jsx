import { useEffect, useState } from "react";
import {
  getCategories,
  deleteCategory,
} from "../../../api/services/admin/categoryApi";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCategory from "./AddCategory";

const Category = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [initialCategory, setInitialCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleDelete = async (categoryID) => {
    try {
      const response = await deleteCategory(categoryID);
      setCategories((cur) =>
        cur.map((category) =>
          category._id === categoryID ? response : category
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (category) => {
    setInitialCategory(category);
    setEditing(true);
    setOpen(true);
  };

  const handleAddCategory = () => {
    setInitialCategory(null);
    setEditing(false);
    setOpen(true);
  };

  // Filter categories based on the search input
  const filteredCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(search.toLowerCase())
  );

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
            onClick={handleAddCategory}>
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
                <TableCell
                  align="left"
                  className="uppercase"
                  sx={{ width: 600 }}>
                  Description
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
              {filteredCategories.map((category, ind) => (
                <TableRow
                  key={category._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {ind + 1}
                  </TableCell>
                  <TableCell align="left">{category.categoryName}</TableCell>
                  <TableCell align="left">
                    {category.categoryDescription}
                  </TableCell>
                  <TableCell align="left">
                    <div
                      className={`flex py-1 px-3 rounded justify-center items-center w-[90px] font-semibold ${
                        category.isActive
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                      }`}>
                      {category.isActive ? "Active" : "Inactive"}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <button
                        className="bg-yellow-200 py-1 px-2 rounded text-yellow-600 text-xs font-semibold max-w-[50px] w-full 
                      mr-2"
                        onClick={() => handleEdit(category)}>
                        Edit
                      </button>
                      <button
                        className={`py-1 px-2 rounded text-xs font-semibold w-[85px]  mr-2 ${
                          category.isActive
                            ? "bg-red-200 text-red-600"
                            : "bg-green-200 text-green-600"
                        }`}
                        onClick={() => handleDelete(category._id)}>
                        {category.isActive ? "Disable" : "Activate"}
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <AddCategory
        open={open}
        setOpen={setOpen}
        setCategories={setCategories}
        initialCategory={initialCategory}
        isEditMode={isEditing}
      />
    </div>
  );
};

export default Category;
