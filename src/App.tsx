import { Card, MainSection, Navbar, NewSection } from "./components";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar openNav={open} changeState={() => setOpen(!open)} />
        <main
          className={
            open
              ? "bg-ververyDarkBlue  grid grid-cols-1 lg:grid lg:grid-cols-3"
              : "opacity-100 grid grid-cols-1 lg:grid lg:grid-cols-3"
          }
        >
          <MainSection />
          <NewSection />
          <Card />
        </main>
    </>
  );
};

export default App;
