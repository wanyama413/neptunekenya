import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: [
    "Fans",
    "Copper Fittings",
    "Refrigerants",
    "Fridge & Freezer",
    "Lightings",
    "Compressor",
    "Electric Appliances",
    "Gas Appliances",
    "Laboratory Equipments",
    "Lubricant & Oils",
    "Heat Exchangers",
    "Microwaves",
    "Washing Machines",
    "Fridge",
    "Others",
  ],
  reducers: {},
});

export default categorySlice.reducer;
