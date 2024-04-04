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
import bgImages from "./events/bgImages";

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
  const [isMeetingEnlarged, setIsMeetingEnlarged] = useState(true);
  const [onClickSelectedDay,setOnClickSelectedDay] = useState(null)
  const [showChatbot, setShowChatbot] = useState(true);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const currentMonth = months[today.month()];
  const [backgroundImage, setBackgroundImage] = useState("");

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

  const toggleSelectedMeeting = (imgUrl, name,startDatetime) => {
    setSelectedName(name);
    setSelectedImage(imgUrl);
    setOnClickSelectedDay(startDatetime);
    setIsMeetingEnlarged(true);
    // setIsMeetingEnlarged(!isMeetingEnlarged);
  };

  const handleClose = () => {
    setIsMeetingEnlarged(false);
  };

 

  console.log(currentMonth);

  const eventsForCurrentMonth = meetings.filter((meeting) => {
    const meetingDate = parseISO(meeting.startDatetime);
    return (
      meetingDate.getMonth() === today.month() &&
      meetingDate.getFullYear() === today.year()
    );
  });
  console.log(backgroundImage);
  
  const sortedEventsForCurrentMonth = eventsForCurrentMonth.sort((a, b) => {
    const dateA = new Date(a.startDatetime).getDate();
    const dateB = new Date(b.startDatetime).getDate();
    return dateA - dateB;
  });

  useEffect(() => {
    const currentMonthImage = bgImages.find((image) => image.month === currentMonth);
    if (currentMonthImage) {
      setBackgroundImage(currentMonthImage.img);
    } else {
      setBackgroundImage("");
    }
  }, [currentMonth]);

  return (
    <div
    className="App justify-end bg-cover bg-center md:bg-repeat"
    // data-theme={isDark ? "dark" : "light"}
    style={{
      // backgroundImage: isDark ? "" : backgroundImage,
      backgroundImage:"black",
      backgroundPosition: "center",
    }}
  >
      <Header today={today} months={months} />
      <div className="flex justify-between">

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
          setIsMeetingEnlarged={setIsMeetingEnlarged}
          setSelectedImage={setSelectedImage}
          setOnClickSelectedDay={setOnClickSelectedDay}
        />

        <CalendarColumn2
          selectDate={selectDate}
          isMeetingEnlarged={isMeetingEnlarged}
          handleClose={handleClose}
          selectedImage={selectedImage}
          selectedName={selectedName}
          onClickSelectedDay={onClickSelectedDay}
          months={months}
          today={today}
          sortedEventsForCurrentMonth={sortedEventsForCurrentMonth}
          currentDate={currentDate}
          toggleSelectedMeeting={toggleSelectedMeeting}
          showChatbot={showChatbot}
          setSelectDate={setSelectDate}
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
