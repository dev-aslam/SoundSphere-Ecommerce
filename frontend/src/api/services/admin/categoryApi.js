import axiosAdminInstance from "../../axiosAdmin";

export const getCategories = async () => {
  try {
    const response = await axiosAdminInstance.get("/categories");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while fetching categories.";
    throw new Error(errorMessage);
  }
};

export const addCategory = async (data) => {
  try {
    const response = await axiosAdminInstance.post("/categories", data);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while adding the category.";
    throw new Error(errorMessage);
  }
};

export const deleteCategory = async (categoryID) => {
  console.log(categoryID);
  try {
    const response = await axiosAdminInstance.patch(
      `/categories/${categoryID}`
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while deleting the category.";
    throw new Error(errorMessage);
  }
};

export const editCategory = async (categoryID, data) => {
  try {
    const response = await axiosAdminInstance.put(
      `/categories/${categoryID}`,
      data
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while editing the category.";
    throw new Error(errorMessage);
  }
};
