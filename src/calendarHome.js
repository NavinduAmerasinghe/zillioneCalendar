import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
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
  //   const [selectedDate, setSelectedDate] = useState(dayjs());

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const toggleSelectedMeeting = (imgUrl, name) => {
    console.log("Clicked Meeting ID:", selectedImage);
    console.log("Clicked Meeting ID:", imgUrl.name);
    // console.log("Clicked event Date ID:", eventDate);
    setSelectedName(name);
    setSelectedImage(imgUrl);
    // setSelectedDate(dayjs(eventDate));

    setIsMeetingEnlarged(!isMeetingEnlarged);
  };

  const [backgroundImage, setBackgroundImage] = useState("");

  console.log('Today',today.month)

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth(); // Get the current month (0-indexed)
    console.log("current month", month);
    // Define image URLs for each month (January is 0, February is 1, and so on)
    const monthImages = [
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
  console.log("All Events", eventsForCurrentMonth);

  // Sort events by date
  const sortedEventsForCurrentMonth = eventsForCurrentMonth.sort((a, b) => {
    const dateA = new Date(a.startDatetime).getDate();
    const dateB = new Date(b.startDatetime).getDate();
    return dateA - dateB;
  });

  return (
    <div
      className="App flex justify-end"
      data-theme={isDark ? "dark" : "light"}
      style={{
        //backgroundImage: isDark ? "" : backgroundImage,
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
                          console.log('meetingOn', meeting), // Logging the meeting information
                          
                            //<span key={i} title={meeting.name} className="flex items-center" style={{ marginTop: '10px' }}>
                              <span key={i} title={meeting.name} className="flex items-center" style={{ marginTop: '400px', height:'8px' }}>
                            {!meeting.holidayType && (
                               <span className="text-white inline-block ml-2" style={{ width: '8px', height: '8px', textAlign: 'center' }}>•</span>
                            )}
                            {meeting.holidayType && meeting.holidayType.includes("BankHoliday") && (
                              <span className="text-red-600" title="Bank Holiday">
                                <img
                                  src={BankHoliLogo}
                                  alt="Bank Holiday Logo"
                                  style={{ height: "8px", width: "8px", marginLeft: 8 }}
                                />
                              </span>
                            )}
                            {meeting.holidayType && meeting.holidayType.includes("MercantileHoliday") && (
                              <span className="text-green-600" title="Mercantile Holiday">
                                <img
                                  src={MercHoliLogo}
                                  alt="Mercantile Holiday Logo"
                                  style={{ height: "8px", width: "8px", marginLeft: 8 }}
                                />
                              </span>
                            )}
                            {meeting.holidayType && meeting.holidayType.includes("PoyaHoliday") && (
                              <span className="text-green-600" title="Poya Holiday">
                                <img
                                  src={PoyaHoliLogo}
                                  alt="Poya Holiday Logo"
                                  style={{ height: "8px", width: "8px", marginLeft: 8 }}
                                />
                              </span>
                            )}
                            {meeting.holidayType && meeting.holidayType.includes("PublicHoliday") && (
                              <span className="text-green-600" title="Public Holiday">
                                <img
                                  src={PublicHoliLogo}
                                  alt="Public Holiday Logo"
                                  style={{ height: "8px", width: "8px", marginLeft: 8 }}
                                />
                              </span>
                            )}
                         
                          </span>
                        ))}
                      </div>
                      
                        )}

                        {/* {meetingsOnDate.length > 0 && (
                          <div className="absolute bottom-0 flex space-x-1">
                            {meetingsOnDate.map((meeting, i) => (
                                console.log('meetingOn' , meeting),
                              <span key={i} title={meeting.name}>
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
                                {meeting.holidayType === "PoyaHoliday" && (
                                  <span
                                    className="text-green-600"
                                    title="Poya Holiday"
                                  >
                                    <img
                                      src={PoyaHoliLogo}
                                      alt="Poya Holiday Logo"
                                      style={{
                                        height: "8px",
                                        width: "8px",
                                        marginLeft: 8,
                                        marginRight: 4,
                                      }}
                                    />
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        )} */}
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
                      className="max-w-full h-auto mx-auto cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                      style={{ width: "250px", height: "150px" }}
                    />
                  </div>
                  <div className="text-white text-center mt-2 text-lg font-semibold">
                    {selectedName}
                  </div>
                </div>
              )}
              <div>
                <h2 className="text-white text-xs font-semibold mb-1">
                  All Events for {months[today.month()]}
                </h2>
                <div
                  style={{
                    // maxHeight: "300px",
                    overflowY: isMeetingEnlarged ? "auto" : "hidden",
                  }}
                >
                  <ol className="mt-1 space-y-1 text-xxs text-gray-400 ml-1">
                    {sortedEventsForCurrentMonth.map((event) => {
                      const eventDate = dayjs(event.startDatetime).format(
                        "YYYY-MM-DD"
                      );

                      // Check if the event date matches the current date
                      const isCurrentDate = dayjs(eventDate).isSame(
                        currentDate,
                        "day"
                      );

                      return (
                        <div
                          className="rounded-lg bg-transparent max-w-xs"
                          key={event.id}
                          style={{
                            backgroundColor: isCurrentDate
                              ? "red"
                              : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 3,
                            overflow: "hidden",
                            padding: 3,
                            marginBottom: 3,
                          }}
                        >
                          <li className="flex items-start space-x-1 group rounded-xl focus-within:bg-gray-100">
                            <img
                              src={event.imageUrl}
                              alt=""
                              className="flex-none w-12 h-12 rounded-sm mr-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                toggleSelectedMeeting(
                                  event.imageUrl,
                                  event.name
                                )
                              }
                            />
                            <div className="flex flex-col justify-start">
                              <p className="text-xxs text-white mt-1 mb-1 truncate w-20">
                                {event.name}
                              </p>
                              <div className="text-xxs text-gray-300">
                                {dayjs(event.startDatetime).format(
                                  "YYYY-MM-DD"
                                )}
                              </div>
                            </div>
                          </li>
                        </div>
                      );
                    })}
                  </ol>
                </div>
              </div>

              {/* <ol className="mt-4 space-y-4 text-sm leading-6 text-gray-500 ml-10">
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
              </ol> */}
            </div>
            <button
              className="fixed bottom-10 right-16 bg-blue-500 text-white p-4 rounded-full shadow-md float-right"
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