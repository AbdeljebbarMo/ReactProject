import { Route, Routes } from "react-router-dom";
import EditArticle from "./components/EditArticle";
import Home from "./components/Home";
import Test from "./Test";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" Component={Home} />
        <Route path="/edit" Component={EditArticle} />
        <Route path="/edit" Component={EditArticle} /> */}
        <Route path="/" element={<Test/>} />
        <Test/>
      </Routes>
    </div>
  );
}

export default App;
