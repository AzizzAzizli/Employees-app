import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ROUTE } from "./shared/constants/Router";
import { Detail } from "./pages/Detail";
import { DetailSetting } from "./pages/DetailSetting";
import { ErrorPage } from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTE.Home} element={<HomePage />} />
        <Route path={ROUTE.Detail} element={<Detail />} />
        <Route path={ROUTE.Detail_Setting} element={<DetailSetting />} />
        <Route path="*" element ={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
