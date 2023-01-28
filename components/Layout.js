import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { AppContext } from "./AppContext";
import TrackAuthStateChange from "./TrackAuthStateChange";
import MobileNav from "./MobileNav";

function Layout({ children }) {
  const [screen, setScreen] = useState("")

  useEffect(() => {
    const getScreen = window.innerWidth
    setScreen(getScreen)
  },[screen])

  return (
    <AppContext>
    <main>
      <TrackAuthStateChange />
      {screen < 798 ? <MobileNav /> : <Nav /> }
      {children}
      <Footer />
    </main>
    </AppContext>
  );
}

export default Layout;
