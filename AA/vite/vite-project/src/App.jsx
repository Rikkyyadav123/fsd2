import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainLayout from "./components/MainLayout";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
