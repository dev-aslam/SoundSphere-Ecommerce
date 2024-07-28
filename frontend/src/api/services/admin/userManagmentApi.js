import axiosAdminInstance from "../../axiosAdmin";

export const getUserList = async () => {
  try {
    const response = await axiosAdminInstance.get("/users");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while fetching users.";
    throw new Error(errorMessage);
  }
};

export const userBlock = async (userID) => {
  console.log(userID);
  try {
    const response = await axiosAdminInstance.patch(`/users/${userID}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while changing user Status.";
    throw new Error(errorMessage);
  }
};
