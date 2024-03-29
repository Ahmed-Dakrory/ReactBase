// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** ThemeConfig Import
import themeConfig from "@configs/themeConfig";
 
const initialDirection = () => {
  const item = window.localStorage.getItem("direction");
  //** Parse stored json or if none return initialValue
  return true;
};

const initialSkin = () => {
  const item = window.localStorage.getItem("skin");
  //** Parse stored json or if none return initialValue
  return true;
};
 
export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    skin: initialSkin(),
    isRTL: initialDirection(),
    layout: themeConfig.layout.type,
    lastLayout: themeConfig.layout.type,
  },
  reducers: {
    handleRTL: (state, action) => {
      state.isRTL = action.payload;
      window.localStorage.setItem("direction", JSON.stringify(action.payload));
    },
    handleSkin: (state, action) => {
      state.skin = action.payload;
      window.localStorage.setItem("skin", JSON.stringify(action.payload));
    },
    handleLayout: (state, action) => {
      state.layout = action.payload;
    },
    handleFooterType: (state, action) => {
      state.footerType = action.payload;
    },
    handleNavbarType: (state, action) => {
      state.navbarType = action.payload;
    },
    handleMenuHidden: (state, action) => {
      state.menuHidden = action.payload;
    },
    handleLastLayout: (state, action) => {
      state.lastLayout = action.payload;
    },
    handleNavbarColor: (state, action) => {
      state.navbarColor = action.payload;
    },
    handleContentWidth: (state, action) => {
      state.contentWidth = action.payload;
    },
    handleMenuCollapsed: (state, action) => {
      state.menuCollapsed = action.payload;
      window.localStorage.setItem(
        "menuCollapsed",
        JSON.stringify(action.payload)
      );
    },
  },
});

export const {
  handleRTL,
  handleSkin,
  handleLayout,
  handleLastLayout,
  handleMenuHidden,
  handleNavbarType,
  handleFooterType,
  handleNavbarColor,
  handleContentWidth,
  handleMenuCollapsed,
} = layoutSlice.actions;

export default layoutSlice.reducer;
