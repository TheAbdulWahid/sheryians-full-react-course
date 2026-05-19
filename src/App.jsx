import Header from "./components/Header";
import SectionOne from "./components/chapter10/SectionOne";
import Functions from "./components/chapter11/Functions";
import Usestate from "./components/chapter13/Usestate";
import Notes from "./components/notes/Notes";
import UseEffect from "./components/useeffect/UseEffect";
import Gallery from "./components/gallery-project/Gallery";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Men from "./pages/product-pages/Men";
import Women from "./pages/product-pages/Women";
import Kids from "./pages/product-pages/Kids";
import Notfound from "./pages/Notfound";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/course-pages/SingleCourse";
import BonusConcept from "./components/BonusConcept";
import { useState } from "react";
const App = () => {
  // const userData = [
  //   {
  //     profile: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro: 'Prime customers, that have access to bank credit and are satisfied with the current product',
  //     tag: 'Satisfied',
  //     tagColor:'lightseagreen'
  //   },{
  //     profile: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro: 'Prime customers, that have access to bank credit and are not satisfie with the current service',
  //     tag: 'Underserved',
  //     tagColor:'lightblue'
  //   },{
  //     profile: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro: 'Customers from near-prime and sub-prime segments with no access to bank credit',
  //     tag: 'Underbacnked',
  //     tagColor:'darkred'
  //   },{
  //     profile: 'https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro: 'Teacher from prime and sub-prime segments with no access to bank credit',
  //     tag: 'Awesome',
  //     tagColor:'gray'
  //   },{
  //     profile: 'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro: 'Sellers from near-prime and sub-prime segments with no access to bank debit',
  //     tag: 'Good',
  //     tagColor:'brown'
  //     },
  // ]
  const [theme, setTheme] = useState('Light')
  return (
    // <div className="flex flex-col justify-between h-screen">
    //   <Header />
    //   <div className="main-content h-full w-full flex justify-center items-center text-[36px]">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/courses" element={<Courses />}>
    //         <Route path=":courseId" element={<SingleCourse />}/>
    //       </Route>
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/product" element={<Product />}>
    //         <Route path="men" element={<Men />} />
    //         <Route path="women" element={<Women />} />
    //         <Route path="kids" element={<Kids />} />
    //       </Route>
    //       <Route path="*" element={<Notfound />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </div>
    <BonusConcept theme={theme} setTheme={setTheme} />
  );
};
export default App;
