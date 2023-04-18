import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/Homepage/Homepage";
import ClothingForm from "./components/ClothingForm/ClothingForm";
import ClothingPage from "./components/ClothingPage/ClothingPage";
import ClothingDetails from "./components/ClothingDetails/ClothingDetails";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

import * as clothingService from "./services/clothingService";
import Footer from "./components/Footer/Footer";

function App() {
  const [clothing, setClothing] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clothingService.getClothing().then((res) => setClothing(res));
  }, []);

  const onSupplementsSubmitClick = async (data) => {
    const result = await clothingService.addClothing(data);

    setClothing((current) => [...current, result]);

    navigate("/clothing");
  };

  return (
    <div className="App">
      <Navigation></Navigation>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route
            path="/clothing"
            element={<ClothingPage clothing={clothing}></ClothingPage>}
          ></Route>
          <Route
            path="/clothing/:id"
            element={<ClothingDetails></ClothingDetails>}
          ></Route>
          <Route
            path="/create/clothing"
            element={
              <ClothingForm
                onSupplementsSubmitClick={onSupplementsSubmitClick}
              />
            }
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
