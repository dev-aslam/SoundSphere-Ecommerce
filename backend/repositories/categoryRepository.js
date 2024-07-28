import Category from "../models/categorySchema.js";

export const getCategories = async () => {
  return await Category.find({});
};

export const addCategory = async (categoryData) => {
  const category = new Category(categoryData);
  return await category.save();
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};

export const updateCategory = async (id, categoryData) => {
  console.log(categoryData);
  const category = await Category.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }
  Object.assign(category, categoryData);
  return await category.save();
};

export const deleteCategory = async (id) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }
  category.isActive = !category.isActive;
  return await category.save();
};
