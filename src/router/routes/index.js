// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import HorizontalLayout from "@layouts/HorizontalLayout";
import SecondLayout from "@layouts/SecondLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";
import AuthCover  from "./protected"

// ** Utils
import { isObjEmpty } from "@utils";

const getLayout = {
  blank: <BlankLayout />,
  horizontal: <HorizontalLayout />,
  second:<SecondLayout />
};

// ** Document title
const TemplateTitle = "Dakrory Template";

// ** Default Route
const DefaultRoute = "/home"

const Home = lazy(() => import("../../views/Home"))
const About = lazy(() => import("../../views/About"))
const Contact = lazy(() => import("../../views/Contact"))
const Login = lazy(() => import("../../views/Home"))

// ** Merge Routes

const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <AuthCover element="x"><Home></Home></AuthCover>

  },
  {
    path: "/About",
    element: <AuthCover element="x"><About></About></AuthCover>,
    meta: {
      layout: "second"
    }

  },
  {
    path: "/Contact",
    element: <AuthCover element="x"><Contact></Contact></AuthCover>
  }
]

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "horizontal";
  const layouts = ["second","horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
