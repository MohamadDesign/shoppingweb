import About from "./Pages/About/About";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Products from "./Pages/Products/Products";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

const routes = [
  { path: "/about", element: <About /> },
  { path: "/testimonial", element: <Testimonial /> },
  { path: "/products", element: <Products /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
