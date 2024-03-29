import { HeaderComponent } from "./components/HeaderComponent";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/404";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <HeaderComponent />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
