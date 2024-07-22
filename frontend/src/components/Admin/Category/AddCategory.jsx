import { useState } from "react";
import "@fontsource/inter";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Switch from "@mui/material/Switch";

const AddCategory = ({ open, setOpen }) => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    offers: {
      offerName: "",
      discountPercentage: "",
      description: "",
      validFrom: "",
      validTo: "",
    },
  });
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!category.name.trim()) formErrors.name = "Category name is required";
    if (!category.description.trim())
      formErrors.description = "Category description is required";

    if (checked) {
      const today = new Date();
      if (!category.offers.offerName.trim())
        formErrors.offerName = "Offer name is required";
      if (!category.offers.description.trim())
        formErrors.offerDescription = "Offer description is required";
      if (!category.offers.validFrom) {
        formErrors.validFrom = "Offer start date is required";
      } else if (new Date(category.offers.validFrom) < today) {
        formErrors.validFrom = "Offer start date cannot be in the past";
      }
      if (!category.offers.validTo) {
        formErrors.validTo = "Offer end date is required";
      } else if (new Date(category.offers.validTo) < today) {
        formErrors.validTo = "Offer end date cannot be in the past";
      } else if (
        category.offers.validFrom &&
        new Date(category.offers.validTo) < new Date(category.offers.validFrom)
      ) {
        formErrors.validTo = "Offer end date cannot be before start date";
      }
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const addCategory = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...", category);
      setCategory({
        name: "",
        description: "",
        offers: {
          offerName: "",
          discountPercentage: "",
          description: "",
          validFrom: "",
          validTo: "",
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
          Add Category
        </Typography>
        <Typography
          id="modal-desc"
          textColor="text.tertiary"
          component={"span"}>
          <div className="h-full">
            <form onSubmit={addCategory}>
              <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                <label className="font-medium text-black required">
                  Category Name
                </label>
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) =>
                    setCategory({ ...category, name: e.target.value })
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
                  value={category.description}
                  onChange={(e) =>
                    setCategory({ ...category, description: e.target.value })
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
                  <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                    <label className="font-medium text-black">Offer Name</label>
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
                  <div className="flex flex-col max-w-[800px] gap-2 mb-3">
                    <label className="font-medium text-black">
                      Offer Description
                    </label>
                    <textarea
                      type="text"
                      value={category.offers.description}
                      onChange={(e) =>
                        setCategory({
                          ...category,
                          offers: {
                            ...category.offers,
                            description: e.target.value,
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
                          value={category.validFrom}
                          onChange={(newVal) =>
                            setCategory({
                              ...category,
                              offers: { ...category.offers, validFrom: newVal },
                            })
                          }
                        />
                      </LocalizationProvider>
                      {errors.validFrom && (
                        <span className="text-red-500 text-sm">
                          {errors.validFrom}
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
                          value={category.validTo}
                          onChange={(newVal) =>
                            setCategory({
                              ...category,
                              offers: { ...category.offers, validTo: newVal },
                            })
                          }
                        />
                      </LocalizationProvider>
                      {errors.validTo && (
                        <span className="text-red-500 text-sm">
                          {errors.validTo}
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
                      name: "",
                      description: "",
                      offers: {
                        offerName: "",
                        discountPercentage: "",
                        description: "",
                        validFrom: "",
                        validTo: "",
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
