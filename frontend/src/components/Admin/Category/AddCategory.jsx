import { useState, useEffect } from "react";
import {
  addCategory,
  editCategory,
} from "../../../api/services/admin/categoryApi";

import "@fontsource/inter";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Switch from "@mui/material/Switch";
import dayjs from "dayjs";

const AddCategory = ({
  open,
  setOpen,
  setCategories,
  initialCategory,
  isEditMode,
}) => {
  const [category, setCategory] = useState({
    categoryName: "",
    categoryDescription: "",
    offers: {
      offerName: "",
      discountPercentage: "",
      offerDescription: "",
      startDate: dayjs(),
      endDate: dayjs(),
    },
  });
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode && initialCategory) {
      const defaultCategory = {
        categoryName: initialCategory.categoryName || "",
        categoryDescription: initialCategory.categoryDescription || "",
        isActive:
          initialCategory.isActive !== undefined
            ? initialCategory.isActive
            : true,
        createdAt: initialCategory.createdAt
          ? dayjs(initialCategory.createdAt)
          : dayjs(),
        offers: {
          offerName: initialCategory.offers?.offerName || "",
          offerDescription: initialCategory.offers?.offerDescription || "",
          discountPercentage: initialCategory.offers?.discountPercentage || 0,
          startDate: initialCategory.offers?.startDate
            ? dayjs(initialCategory.offers.startDate)
            : dayjs(),
          endDate: initialCategory.offers?.endDate
            ? dayjs(initialCategory.offers.endDate)
            : dayjs(),
          validFrom: initialCategory.offers?.validFrom
            ? dayjs(initialCategory.offers.validFrom)
            : dayjs(),
          validTo: initialCategory.offers?.validTo
            ? dayjs(initialCategory.offers.validTo)
            : dayjs(),
        },
      };
      setCategory(defaultCategory);
      setChecked(!!initialCategory.offers?.offerName);
    }
  }, [isEditMode, initialCategory]);

  const validateForm = () => {
    let formErrors = {};
    if (!category.categoryName.trim())
      formErrors.name = "Category name is required";
    if (!category.categoryDescription.trim())
      formErrors.description = "Category description is required";

    if (checked) {
      const today = new Date().toLocaleDateString();
      if (!category.offers.offerName.trim())
        formErrors.offerName = "Offer name is required";
      if (!category.offers.offerDescription.trim())
        formErrors.offerDescription = "Offer description is required";
      if (isNaN(category.offers.discountPercentage)) {
        formErrors.discountPercentage = "Discount percentage must be a number";
      } else if (
        Number(category.offers.discountPercentage) < 0 ||
        Number(category.offers.discountPercentage) > 100
      ) {
        formErrors.discountPercentage =
          "Discount percentage must be between 0 and 100";
      }
      if (!category.offers.startDate) {
        formErrors.startDate = "Offer start date is required";
      } else if (
        new Date(category.offers.startDate).toLocaleDateString() < today
      ) {
        formErrors.startDate = "Offer start date cannot be in the past";
      }

      if (!category.offers.endDate) {
        formErrors.endDate = "Offer end date is required";
      } else if (
        new Date(category.offers.endDate).toLocaleDateString() < today
      ) {
        formErrors.endDate = "Offer end date cannot be in the past";
      } else if (
        category.offers.startDate &&
        new Date(category.offers.endDate).toLocaleDateString() <
          new Date(category.offers.startDate).toLocaleDateString()
      ) {
        formErrors.endDate = "Offer end date cannot be before start date";
      }
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isEditMode) {
        try {
          const response = await editCategory(initialCategory._id, category);
          setCategories((cur) =>
            cur.map((category) =>
              category._id === response._id ? response : category
            )
          );
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          const response = await addCategory(category);
          setCategories((cur) => [...cur, response]);
        } catch (error) {
          console.log(error.message);
        }
      }
      setCategory({
        categoryName: "",
        categoryDescription: "",
        offers: {
          offerName: "",
          discountPercentage: "",
          offerDescription: "",
          startDate: "",
          endDate: "",
        },
      });
      setOpen(false);
    }
  };
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: "md",
          p: 4,
          boxShadow: "lg",
        }}>
        <ModalClose variant="soft" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}>
          {isEditMode ? "Edit Category" : "Add Category"}
        </Typography>
        <Typography
          id="modal-desc"
          textColor="text.tertiary"
          component={"span"}>
          <div className="h-full">
            <form onSubmit={handleAddCategory}>
              <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                <label className="font-medium text-black required">
                  Category Name
                </label>
                <input
                  type="text"
                  value={category.categoryName}
                  onChange={(e) =>
                    setCategory({ ...category, categoryName: e.target.value })
                  }
                  className="h-[40px] outline-none py-2 px-4 rounded bg-[#f1f1f1] text-black"
                  placeholder="Category Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                <label className="font-medium text-black required">
                  Category Description
                </label>
                <textarea
                  type="text"
                  value={category.categoryDescription}
                  onChange={(e) =>
                    setCategory({
                      ...category,
                      categoryDescription: e.target.value,
                    })
                  }
                  rows={4}
                  className="outline-none py-2 px-4 rounded bg-[#f1f1f1] text-black"
                  placeholder="Category Description"
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    {errors.description}
                  </span>
                )}
              </div>

              {/*Offers*/}

              <div className=" flex items-center text-black mb-3">
                <Switch
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label>Offers</label>
              </div>

              {checked && (
                <div>
                  <div className="flex justify-between gap-4">
                    <div className="w-full">
                      <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                        <label className="font-medium text-black">
                          Offer Name
                        </label>
                        <input
                          type="text"
                          value={category.offers.offerName}
                          onChange={(e) =>
                            setCategory({
                              ...category,
                              offers: {
                                ...category.offers,
                                offerName: e.target.value,
                              },
                            })
                          }
                          className="h-[40px] outline-none py-2 px-4 rounded bg-[#f1f1f1] text-black"
                          placeholder="Offer Name"
                        />
                      </div>
                      {errors.offerName && (
                        <span className="text-red-500 text-sm">
                          {errors.offerName}
                        </span>
                      )}
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col max-w-[800px] gap-2 mb-3 w-full">
                        <label className="font-medium text-black">
                          Discount Percentage
                        </label>
                        <input
                          type="text"
                          value={category.offers.discountPercentage}
                          onChange={(e) =>
                            setCategory({
                              ...category,
                              offers: {
                                ...category.offers,
                                discountPercentage: e.target.value,
                              },
                            })
                          }
                          className="h-[40px] outline-none py-2 px-4 rounded bg-[#f1f1f1] text-black"
                          placeholder="Discount Percentage"
                        />
                      </div>
                      {errors.discountPercentage && (
                        <span className="text-red-500 text-sm">
                          {errors.discountPercentage}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                    <label className="font-medium text-black">
                      Offer Description
                    </label>
                    <textarea
                      type="text"
                      value={category.offers.offerDescription}
                      onChange={(e) =>
                        setCategory({
                          ...category,
                          offers: {
                            ...category.offers,
                            offerDescription: e.target.value,
                          },
                        })
                      }
                      rows={4}
                      className="outline-none py-2 px-4 rounded bg-[#f1f1f1] text-black"
                      placeholder="Offer Description"
                    />
                    {errors.offerDescription && (
                      <span className="text-red-500 text-sm">
                        {errors.offerDescription}
                      </span>
                    )}
                  </div>

                  {/* Date picker */}

                  <div className="flex gap-4 mb-3">
                    <div className="flex flex-col w-full gap-2 mb-3">
                      <label className="font-medium text-black">
                        Offer Start Date
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          sx={{ bgcolor: "#f1f1f1" }}
                          value={dayjs(category.offers.startDate)}
                          onChange={(newVal) =>
                            setCategory({
                              ...category,
                              offers: {
                                ...category.offers,
                                startDate: dayjs(newVal),
                              },
                            })
                          }
                        />
                      </LocalizationProvider>
                      {errors.startDate && (
                        <span className="text-red-500 text-sm">
                          {errors.startDate}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 w-full mb-3">
                      <label className="font-medium text-black">
                        Offer End Date
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          sx={{ bgcolor: "#f1f1f1" }}
                          value={dayjs(category.offers.endDate)}
                          onChange={(newVal) =>
                            setCategory({
                              ...category,
                              offers: {
                                ...category.offers,
                                endDate: dayjs(newVal),
                              },
                            })
                          }
                        />
                      </LocalizationProvider>
                      {errors.endDate && (
                        <span className="text-red-500 text-sm">
                          {errors.endDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Form action button */}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-red-500 hover:border-red-500 hover:text-white"
                  onClick={() => {
                    setOpen(false);
                    setCategory({
                      categoryName: "",
                      categoryDescription: "",
                      offers: {
                        offerName: "",
                        discountPercentage: "",
                        offerDescription: "",
                        startDate: "",
                        endDate: "",
                      },
                    });
                  }}>
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-black text-white border border-black py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Typography>
      </Sheet>
    </Modal>
  );
};
export default AddCategory;
