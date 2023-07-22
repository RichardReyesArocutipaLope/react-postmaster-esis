import { Routes, Route, BrowserRouter, Navigate, } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";
import "./responsive.css";
import Login from "./Login/Login";
import MainPage from "./MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchPonentes } from "../slices/ponentes.slice";
import { useEffect } from "react";
import loading from "../assets/img/loading/cargando.svg";
import { checkingLogin } from "../slices/auth.slice";
import { Validation } from './Validation/Validation';
import { Pagos } from './Pagos/Pagos';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  const { checkingPonentes } = useSelector((state) => state.ponentes);
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkingLogin());
    dispatch(fetchPonentes());
  }, [dispatch]);

  // if (status === "checking" && checkingPonentes) {
  //   return (
  //     <div className="loading">
  //       <img className="loading__img" src={loading} alt="cargando" />
  //       <p className="loading__description">Cargando...</p>
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <div>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

//vmirelesb@unjbg.edu.pe
//victorj11

export default App;
