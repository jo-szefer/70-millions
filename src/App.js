import { Header } from "./components/Header/index";
import { MoneyBar } from "./components/MoneyBar/index";
import { Items } from "./components/Items/index";
import { Footer } from "./components/Footer";
import { Receipt } from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <MoneyBar />
        <Items />
        <Receipt />
        <Footer />
      </>
    </div>
  );
}

export default App;
