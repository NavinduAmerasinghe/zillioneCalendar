import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./Toggle/Toggle";
import "./App.css";
import logo from "./img/logo.png";
import vector from "./img/Vector.png";
import meetings from "./events/events";
import Meeting from "./Meeting";
import { isSameDay, parseISO } from "date-fns";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CalendarFooter from "./CalendarFooter";
import ChatbotComponent from "./ChatBotComponent";

export default function Calendar() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const theme = useTheme();

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const formattedDate = selectDate.format("dddd");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [isMeetingEnlarged, setIsMeetingEnlarged] = useState(false);

  const toggleSelectedMeeting = (imgUrl, name) => {
    setSelectedName(name);
    setSelectedImage(imgUrl);
    console.log("Clicked Meeting ID:", selectedImage);
    console.log("Clicked Meeting ID:", imgUrl.name);
    setIsMeetingEnlarged(!isMeetingEnlarged);
  };

  return (
    <div
      className="App flex justify-end"
      data-theme={isDark ? "dark" : "light"}
      style={{
        backgroundImage: isDark ? "" : `url(${vector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: 20,
      }}
    >
  
    </div>
  );
}
