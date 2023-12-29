import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarHomePage from "./calendarHome";
import Sample from "./sample";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalendarHomePage />} />
          {/* <Route path="/" element={<Sample />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;