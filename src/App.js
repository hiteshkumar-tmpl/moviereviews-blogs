import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePageBlog/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact";
import BasicLayout from "./Layouts/BasicLayout";
import Error from "./Components/Error";
import SingleBlog from "./Components/SingleBlogPage/SingleBlog";

function App() {
  const routesArray = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/about",
      component: <About />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },

    {
      path: "/blog/:id",
      component: <SingleBlog />,
    },
  ];

  return (
    <>
      <Routes>
        {routesArray.map(({ path, component }, index) => {
          return (
            <Route
              key={index}
              path={path}
              exact
              element={<BasicLayout>{component}</BasicLayout>}
            />
          );
        })}
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
