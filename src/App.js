import { store } from "./store/index";
import { Provider } from "react-redux";

import { Header } from "./components/Header/index";
import { MoneyBar } from "./components/MoneyBar/index";
import { Items } from "./components/Items/index";
import { Footer } from "./components/Footer";
import { Receipt } from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <MoneyBar />
        <Items />
        <Receipt />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
