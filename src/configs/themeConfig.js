// Logo Import
import logo from "@src/assets/images/logo/logo.png";

// You can customize the template with the help of this file

//Template config options
const themeConfig = {
  app: {
    appName: "Dakrory",
    appLogoImage: logo,
  },
  url: "https://mani.solidsolutionsegypt.net/api/dashboard/v1",
  main_url: "https://mani.solidsolutionsegypt.net/",
  layout: {
    isRTL: false,
    skin: "light", // light, dark, bordered, semi-dark
    type: "horizontal", // vertical, horizontal
    contentWidth: "boxed", // full, boxed
  }
};

export default themeConfig;
