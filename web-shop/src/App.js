import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/Homepage/Homepage";
import ClothingForm from "./components/ClothingForm/ClothingForm";
import ClothingPage from "./components/ClothingPage/ClothingPage";
import ClothingDetails from "./components/ClothingDetails/ClothingDetails";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { AuthContext } from "./context/AuthContext";

import * as authService from "./services/authService";
import * as clothingService from "./services/clothingService";
import * as cartService from "./services/cartService";

import Footer from "./components/Footer/Footer";
import CartComponent from "./components/CartComponent/CartComponent";

function App() {
  const [clothing, setClothing] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    clothingService.getClothing().then((res) => setClothing(res));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setErrorMessage(null);
    }
  }, [window.location.pathname]);

  const onSupplementsSubmitClick = async (data) => {
    const result = await clothingService.addClothing(data);

    setClothing((current) => [...current, result]);

    navigate("/clothing");
  };

  const onClothingDeleteClick = async (id) => {
    const result = await clothingService.deleteClothingById(id);

    setClothing((current) => current.filter((x) => x._id !== result._id));
  };

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);

    if (result.status === 403) {
      setErrorMessage("User does not exist");
      return;
    }

    setUser(result);

    navigate("/");
  };

  const onRegisterSubmit = async (data) => {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match! Try again");
      return;
    }

    const result = await authService.register(data);

    if (result.status === 409) {
      setErrorMessage("User with the same email/password exists");
      return;
    }

    setUser({
      accessToken: result.accessToken,
      email: result.email,
    });

    navigate("/");
  };

  const onLogout = () => {
    setUser(null);

    navigate("/login");
  };

  const onCartAddSubmit = async (data) => {
    const result = await cartService.addCartItem(data);

    setCartItems((current) => [...current, result]);
  };

  const onCartDeleteClick = async (id) => {
    const result = await cartService.deleteCartItemById(id);

    setCartItems((current) => current.filter((x) => x._id !== result._id));
  };

  const authParams = {
    user: user,
    onLoginSubmit: onLoginSubmit,
    onLogout: onLogout,
    onRegisterSubmit: onRegisterSubmit,
    errorMessage: errorMessage,
  };

  return (
    <AuthContext.Provider value={authParams}>
      <div className="App">
        <Navigation></Navigation>

        <div className="main-container">
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route
              path="/clothing"
              element={
                <ClothingPage
                  clothing={clothing}
                  onClothingDeleteClick={onClothingDeleteClick}
                  onCartAddSubmit={onCartAddSubmit}
                ></ClothingPage>
              }
            ></Route>
            <Route
              path="/clothing/:id"
              element={
                <ClothingDetails
                  onCartAddSubmit={onCartAddSubmit}
                ></ClothingDetails>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <CartComponent
                  cartItems={cartItems}
                  onCartDeleteClick={onCartDeleteClick}
                ></CartComponent>
              }
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
    </AuthContext.Provider>
  );
}

export default App;
