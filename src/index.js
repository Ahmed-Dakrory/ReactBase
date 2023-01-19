// ** React Imports
import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ** Redux Imports
import { store } from "./redux/store";
import { Provider } from "react-redux";

// ** ThemeColors Context

import { ThemeContext } from "./utility/context/ThemeColors";
import { LoaderContext } from "./utility/context/LoaderContext";

// ** ThemeConfig
import themeConfig from "./configs/themeConfig";

// ** Toast
import { Toaster } from "react-hot-toast";

// ** Spinner (Splash Screen)
import Spinner from "./@core/components/spinner/Fallback-spinner";


// ** PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";


// ** Core styles
import "./@core/scss/core.scss";
import "./@core/js/bootstrap";
import "./@core/js/bootstrap.bundle";

// ** Service Worker
import * as serviceWorker from "./serviceWorker";

// // ** Fake Database
// import './@fake-db'
// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <ThemeContext>
          
    <LoaderContext >
          <LazyApp />
          
          </LoaderContext>
          
        </ThemeContext>
      </Suspense>
      
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
