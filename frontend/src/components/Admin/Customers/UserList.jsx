import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import {
  getUserList,
  userBlock,
} from "../../../api/services/admin/userManagmentApi";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUserList();
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const handleBlockUnblock = async (userID) => {
    try {
      const updatedUser = await userBlock(userID);
      setUsers(users.map((user) => (user._id === userID ? updatedUser : user)));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
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
                  Status
                </TableCell>
                <TableCell className="uppercase" align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.email}>
                  <TableCell component="th" scope="user">
                    <div>
                      <h1 className="font-semibold text-base">{user.name}</h1>
                      <p className="text-[#8B909A] text-sm">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell align="left">{user.phoneNumber}</TableCell>
                  <TableCell align="left">
                    <div
                      className={`flex py-1 px-3 rounded justify-center items-center w-[90px] font-semibold ${
                        user.isBlocked
                          ? "bg-red-200 text-red-700"
                          : "bg-green-200 text-green-700"
                      }`}>
                      {user.isBlocked ? "Blocked" : "Active"}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <button
                        className={`py-1 px-2 rounded text-xs font-semibold w-[85px] mr-2 ${
                          user.isBlocked
                            ? "bg-green-200 text-green-600"
                            : "bg-red-200 text-red-600"
                        }`}
                        onClick={() => handleBlockUnblock(user._id)}>
                        {user.isBlocked ? "Unblock" : "Block"}
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

export default UserList;
