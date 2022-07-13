import { Routes, Route } from "react-router-dom";
import Home from './containers/Home';
import Orders from "./containers/Orders";
import Header from "./components/Header";

import './assets/css/style.css'
import CreateOrder from "./containers/CreateOrder";
import SingleOrder from "./containers/SingleOrder";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/order/:id" element={<SingleOrder />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
