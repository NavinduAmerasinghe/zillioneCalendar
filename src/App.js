import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarHomePage from "./calendarHome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalendarHomePage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;