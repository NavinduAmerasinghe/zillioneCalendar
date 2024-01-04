import dayjs from "dayjs";
import React, { useState, useRef, useEffect } from "react";
import { generateDate, months } from "./util/calendar";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./Toggle/Toggle";
import { Scrollbars } from "react-custom-scrollbars";
import logo from "./img/logo.png";
import chatbot from "./img/chatbot.png";
import vector from "./img/Vector.png";
import meetings from "./events/events";
import Meeting from "./Meeting";
import { isSameDay, parseISO } from "date-fns";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import axios from "axios";

import { CalendarColumn3 } from "./CalendarColumn3";
import { CalendarColumn2 } from "./CalendarColumn2";
import { CalendarColumn1 } from "./CalendarColumn1";
import Header from "./CalendarHeader";

export default function Calendar() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const theme = useTheme();

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const currentDate = dayjs();
  const [today, setToday] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());
  const formattedDate = selectDate.format("dddd");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [isMeetingEnlarged, setIsMeetingEnlarged] = useState(false);
  const [showChatbot, setShowChatbot] = useState(true);
  //   const [selectedDate, setSelectedDate] = useState(dayjs());
  //const currentMonth = months[today.month()];

  //--------chatbot---------------
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  const chatbotRef = useRef(null);

  const chatBotStyles = {
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "0 10px 10px 0",
    overflow: "hidden",
  };

  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setShowChatbot(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //-------------------------------

  const toggleSelectedMeeting = (imgUrl, name) => {
    setSelectedName(name);
    setSelectedImage(imgUrl);
    setIsMeetingEnlarged(true);
    // setIsMeetingEnlarged(!isMeetingEnlarged);
  };

  const handleClose = () => {
    setIsMeetingEnlarged(false);
  };

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();

    const monthImages = [
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FIndependance-4-p2.jpg?alt=media&token=ebaddccb-f259-4404-922c-9f879ffe0c53)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FIndependance-4-p2.jpg?alt=media&token=ebaddccb-f259-4404-922c-9f879ffe0c53)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
      "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
    ];

    // Set background image based on the current month
    setBackgroundImage(monthImages[month]);
  }, []);
  

  // Filter events for the specific month (example: current month)
  const eventsForCurrentMonth = meetings.filter((meeting) => {
    const meetingDate = parseISO(meeting.startDatetime);
    return (
      meetingDate.getMonth() === today.month() &&
      meetingDate.getFullYear() === today.year()
    );
  });

  // Sort events by date
  const sortedEventsForCurrentMonth = eventsForCurrentMonth.sort((a, b) => {
    const dateA = new Date(a.startDatetime).getDate();
    const dateB = new Date(b.startDatetime).getDate();
    return dateA - dateB;
  });


  // const [chatBotMonth , setChatBotMonth] = useState('');
  // const [chatBotYear , setChatBotYear] = useState('');
  // const [responseData , setResponseData] = useState(null);

  // const handleFormSubmit = async(e) =>{
  //   e.preventDefault();

  //   try{
  //     const response = await axios.post("http://localhost:5000/api/calendar",{
  //       chatBotMonth,chatBotYear
  //     });

  //     console.log('Data sent:', response.data);
  //         // Clear input fields after successful submission
  //         setChatBotMonth('');
  //         setChatBotYear('');
  //   }catch(error){
  //     console.error('Error:', error);
  //   }
  // }
  
  // const handleGetDate = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/calendar');
  //     setResponseData(response.data);
  //     console.log('resdata',responseData);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  return (
    <div
      className="App justify-end bg-cover bg-center md:bg-repeat"
      data-theme={isDark ? "dark" : "light"}
      style={{
        backgroundImage: isDark ? "" : `url(${vector})`,
        backgroundPosition: "center",
      }}
    >
      <Header  today={today}  months={months}/>
      <div className="flex justify-between">
      {/* <form onSubmit={handleFormSubmit} style={{flex:'1', flexDirection:'column'}}>
        <label style={{color:'white'}}>
          Month:
          <input style={{color:'black'}} type="text" value={chatBotMonth} onChange={(e)=>setChatBotMonth(e.target.value)}/>
        </label>
        <br/>
        <label style={{color:'white'}}>
          Year :
          <input type="text" style={{color:'black'}} value={chatBotYear} onChange={(e)=>setChatBotYear(e.target.value)}/>
        </label>
        <br/>
        <button style={{color:'white'}} onClick={handleGetDate}>Submit</button>
        {responseData && (
        <div>
          <p style={{color:'white'}}>Month: {responseData.chatBotMonth}</p>
          <p style={{color:'white'}}>Year: {responseData.chatBotYear}</p>
        </div>
      )}
      </form> */}
      
        <CalendarColumn1
          today={today}
          setToday={setToday}
          months={months}
          days={days}
          generateDate={generateDate}
          meetings={meetings}
          isSameDay={isSameDay}
          parseISO={parseISO}
          selectDate={selectDate}
          setSelectDate={setSelectDate}

        />
        <CalendarColumn2
          selectDate={selectDate}
          isMeetingEnlarged={isMeetingEnlarged}
          handleClose={handleClose}
          selectedImage={selectedImage}
          selectedName={selectedName}
          months={months}
          today={today}
          sortedEventsForCurrentMonth={sortedEventsForCurrentMonth}
          currentDate={currentDate}
          toggleSelectedMeeting={toggleSelectedMeeting}
          showChatbot={showChatbot}
        />
        <CalendarColumn3
          toggleChatbot={toggleChatbot}
          showChatbot={showChatbot}
          chatBotStyles={chatBotStyles}
        />
      </div>
    </div>
  );
}
