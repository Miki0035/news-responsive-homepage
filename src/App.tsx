import {Card, MainSection, Navbar, NewSection} from "./components";

const App = () => {
  return (
  <>
  <Navbar />
  <main className="grid grid-cols-1">
    <MainSection />
    <NewSection />
    <Card />
  </main>
  </>
);
};

export default App;
