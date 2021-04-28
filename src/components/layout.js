import React, {useState} from "react";
import Header from "./Header";
import { GlobalStyle } from "./styles/main";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <main>{children}</main>    
      <Footer />
    </>
  )
}

export default Layout
