import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarHomePage from "./Components/calendarHome";
import Sample from "./Components/sample";
import { CalendarColumn1 } from "./Components/CalendarColumn1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalendarHomePage />} />
          {/* <Route path="/" element={<Sample />} /> */}
          <Route path="/month=:month" element={ <CalendarColumn1  />}/>
          {/* <Route path="/month=2" element={ <CalendarColumn1 month={2} />}/> */}
         
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
