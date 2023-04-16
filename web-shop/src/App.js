import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/Homepage/Homepage";
import ClothingForm from "./components/ClothingForm/ClothingForm";
import SupplementPage from "./components/SupplementPage/SupplementPage";

import * as supplementService from "./services/supplementService";

function App() {
  const [supplements, setSupplements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    supplementService.getSupplements().then((res) => setSupplements(res));
  }, []);

  const onSupplementsSubmitClick = async (data) => {
    const result = await supplementService.addSupplement(data);

    setSupplements((current) => [...current, result]);

    navigate("/supplements");
  };

  return (
    <div className="App">
      <Navigation></Navigation>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route
            path="/supplements"
            element={
              <SupplementPage supplements={supplements}></SupplementPage>
            }
          ></Route>
          <Route path="/clothing"></Route>
          <Route
            path="/create/supplement"
            element={
              <ClothingForm
                onSupplementsSubmitClick={onSupplementsSubmitClick}
              />
            }
          ></Route>
          <Route path="/create/clothing"></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
