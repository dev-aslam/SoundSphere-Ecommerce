import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const userList = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    registeredOn: "2023-01-15",
    status: "Active",
    phone: "123-456-7890",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    registeredOn: "2023-02-20",
    status: "Inactive",
    phone: "234-567-8901",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    registeredOn: "2023-03-10",
    status: "Active",
    phone: "345-678-9012",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    registeredOn: "2023-04-05",
    status: "Pending",
    phone: "456-789-0123",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    registeredOn: "2023-05-22",
    status: "Active",
    phone: "567-890-1234",
  },
];

const UserList = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1500px] w-full">
          <div className="bg-white rounded text-[#8B909A] py-2 px-4 max-w-[400px] flex mb-4 gap-3">
            <input
              type="text"
              className="outline-none w-full text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by customers"
            />
            <div>
              <SearchIcon />
            </div>
          </div>
          <TableContainer>
            <Table
              sx={{ minWidth: 700, maxWidth: 1500 }}
              aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="uppercase">Name</TableCell>
                  <TableCell className="uppercase" align="left">
                    Phone Number
                  </TableCell>
                  <TableCell className="uppercase" align="left">
                    Created
                  </TableCell>
                  <TableCell className="uppercase" align="left">
                    Status
                  </TableCell>
                  <TableCell className="uppercase" align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell component="th" scope="user">
                      <div>
                        <h1 className="font-semibold text-base">{user.name}</h1>
                        <p className="text-[#8B909A] text-sm">{user.email}</p>
                      </div>
                    </TableCell>
                    <TableCell align="left">{user.phone}</TableCell>
                    <TableCell align="left">{user.registeredOn}</TableCell>
                    <TableCell align="left">{user.status}</TableCell>
                    <TableCell align="center">
                      <div className="">
                        <button
                          className="bg-yellow-200 py-1 px-2 rounded text-yellow-600 text-xs font-semibold max-w-[50px] w-full 
                      mr-2">
                          Edit
                        </button>
                        <button
                          className="bg-red-200 py-1 px-2 rounded text-red-600 text-xs font-semibold max-w-[50px] w-full 
                      mr-2">
                          Block
                        </button>
                        <DeleteOutlineIcon className="text-gray-500 cursor-pointer hover:text-red-500" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
export default UserList;
