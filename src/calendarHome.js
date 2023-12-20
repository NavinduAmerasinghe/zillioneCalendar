import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./Toggle/Toggle";
// import "./App.css";
import logo from "./img/logo.png";
import chatbot from "./img/chatbot.png";
import vector from "./img/Vector.png";
import meetings from "./events/events";
import Meeting from "./Meeting";
import { isSameDay, parseISO } from "date-fns";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CalendarFooter from "./CalendarFooter";
import ChatbotComponent from "./ChatBotComponent";
import { FaRobot } from "react-icons/fa";
import BankHoliLogo from "./img/Bankholilogo.png";
import MercHoliLogo from "./img/Mercholilogo.png";
import PoyaHoliLogo from "./img/PoyaDaylogo.png";
import PublicHoliLogo from "./img/Publicholidaylogo.png";

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
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

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
      <div
        className="flex justify-end"
        // style={{
        //   paddingRight: 250,
        // }}
      >
        {/* Calendar Content */}
        <div className="flex flex-wrap justify-center w-full ">
          <div
            className="w-full sm:w-2/3 lg:w-1/2 mb-4 relative"
            style={{
              backgroundColor: "white",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {/* <div className="flex flex-col items-center">
              <div className="flex gap-10 items-center">
                <div className="flex items-center gap-3 mt-2 pr-44">
                  <h1 className="text-2xl text-white">
                    {months[today.month()]}
                  </h1>
                  <h1 className="text-2xl text-white">{today.year()}</h1>
                </div>

                <h1
                  className="cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(currentDate);
                  }}
                ></h1>
              </div>
            </div> */}
            <div className="flex flex-col items-center">
              <h1 className="select-none font-semibold text-white ">
                {today.year()}
              </h1>
              <div className="flex gap-10 items-center">
                <GrFormPrevious
                  className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
                  onClick={() => {
                    setToday(today.month(today.month() - 1));
                  }}
                />
                <h1
                  className="cursor-pointer hover:scale-105 transition-all "
                  onClick={() => {
                    setToday(currentDate);
                  }}
                >
                  <h1 className="text-1xl text-white">
                    {months[today.month()]}
                  </h1>
                </h1>
                <GrFormNext
                  className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
                  onClick={() => {
                    setToday(today.month(today.month() + 1));
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-7">
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className="text-sm text-center h-20 w-20 grid place-content-center text-gray-500 select-none "
                    style={{ color: "white" }}
                  >
                    {day}
                  </h1>
                );
              })}
            </div>
            <div className="grid grid-cols-7">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  const meetingsOnDate = meetings.filter((meeting) =>
                    isSameDay(parseISO(meeting.startDatetime), date.toDate())
                  );

                  return (
                    <div
                      key={index}
                      className="p-2 text-center h-14 grid place-content-center text-sm relative"
                    >
                      <h1
                        className={cn(
                          currentMonth ? "text-white" : "text-gray-500",
                          today ? "bg-red-600 text-white" : "",
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? "bg-blue-900 text-white"
                            : "",
                          "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none relative"
                        )}
                        onClick={() => {
                          setSelectDate(date);
                        }}
                      >
                        {date.date()}
                        {meetingsOnDate.length > 0 && (
                          <div className="absolute bottom-0 flex space-x-1">
                            {meetingsOnDate.map((meeting, i) => (
                              <span
                                key={i}
                                // className="w-2 h-2 bg-sky-900 rounded-full"

                                // style={{ backgroundColor: meeting.color }}
                                // style={{
                                //   backgroundColor:
                                //     meeting.holidayType === "BankHoliday"
                                //       ? "red"
                                //       : meeting.holidayType ===
                                //         "Mercantile holiday"
                                //       ? "green"
                                //       : meeting.holidayType === "Poya holiday"
                                //       ? "yellow"
                                //       : "blue", // Or set default color
                                // }}
                                title={meeting.name}
                              >
                                {!meeting.holidayType && (
                                  <span className="text-white">•</span>
                                )}
                                {meeting.holidayType === "BankHoliday" && (
                                  <span
                                    className="text-red-600  mt-2 absolute bottom-0"
                                    title="Bank Holiday"
                                  >
                                    <img
                                      src={BankHoliLogo}
                                      alt="Bank Holiday Logo"
                                      style={{ height: "8px", width: "8px" }}
                                    />
                                  </span>
                                )}
                                {meeting.holidayType ===
                                  "MercantileHoliday" && (
                                  <span
                                    className="text-green-600"
                                    title="Mercantile Holiday"
                                  >
                                    <img
                                      src={MercHoliLogo}
                                      alt="Bank Holiday Logo"
                                      style={{
                                        height: "8px",
                                        width: "8px",
                                        marginLeft: 8,
                                      }}
                                    />
                                  </span>
                                )}
                                {meeting.holidayType === "Poya holiday" && (
                                  <span
                                    className="text-yellow-600"
                                    title="Poya Holiday"
                                  >
                                    🌕
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        )}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
            <CalendarFooter />
          </div>

          <div
            className="w-full sm:w-1/3 lg:w-1/2 px-4 mb-4"
            style={{
              backgroundColor: "white",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {/* <ChatbotComponent/> */}

            <div className="h-72 sm:h-96 w-full sm:px-5">
              <div className="flex items-center">
                <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mr-2">
                  {selectDate.format("DD")}
                </h1>
                <h1 className="font-semibold text-2xl text-white gap-6">
                  {selectDate.format("dddd")}
                </h1>

                <span className="ml-24"></span>
                <Toggle
                  isChecked={isDark}
                  handleChange={() => setIsDark(!isDark)}
                  className="absolute top-4 left-1 z-10 "
                />
              </div>

              {isMeetingEnlarged && (
                <div>
                  <div className="mt-4">
                    <img
                      src={selectedImage}
                      alt=""
                      className="max-w-full h-auto mx-auto cursor-pointer rounded-lg"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                  <div className="text-white">{selectedName}</div>
                </div>
              )}

              <ol className="mt-4 space-y-4 text-sm leading-6 text-gray-500">
                {meetings
                  .filter((meeting) =>
                    isSameDay(
                      parseISO(meeting.startDatetime),
                      selectDate.toDate()
                    )
                  )
                  .map((meeting) => (
                    <Meeting
                      meeting={meeting}
                      key={meeting.id}
                      onMeetingClick={toggleSelectedMeeting}
                    />
                  ))}
              </ol>
            </div>
            <button
              className="fixed bottom-10 right-16 bg-blue-500 text-white p-4 rounded-full shadow-md"
              onClick={toggleChatbot}
            >
              <FaRobot className="text-2xl" />
            </button>

            {showChatbot && (
              <div
                className="fixed bottom-20 right-20 left-25 bg-white rounded-md border border-gray-300 shadow-lg p-4 overflow-y-auto"
                //className="fixed bottom-20 right-20 left-25 rounded-md shadow-lg p-4 overflow-y-auto"
                style={{ height: 450 }}
              >
                <ChatbotComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
