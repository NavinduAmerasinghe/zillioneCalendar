// import dayjs from "dayjs";
// import React, { useState, useRef, useEffect } from "react";
// import { generateDate, months } from "./util/calendar";
// import cn from "./util/cn";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import useLocalStorage from "use-local-storage";
// import { Toggle } from "./Toggle/Toggle";
// import { Scrollbars } from "react-custom-scrollbars";
// import logo from "./img/logo.png";
// import chatbot from "./img/chatbot.png";
// import vector from "./img/Vector.png";
// import meetings from "./events/events";
// import Meeting from "./Meeting";
// import { isSameDay, parseISO } from "date-fns";
// import { useTheme } from "@mui/material/styles";
// import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
// import CalendarFooter from "./CalendarFooter";
// import ChatbotComponent from "./ChatBotComponent";
// import { FaRobot } from "react-icons/fa";
// import BankHoliLogo from "./img/Bankholilogo.png";
// import MercHoliLogo from "./img/Mercholilogo.png";
// import PoyaHoliLogo from "./img/PoyaDaylogo.png";
// import PublicHoliLogo from "./img/Publicholidaylogo.png";
// import { AiFillCloseCircle } from "react-icons/ai";

// export default function Calendar() {

//   const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const [isDark, setIsDark] = useLocalStorage("isDark", preference);
//   const theme = useTheme();

//   const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const currentDate = dayjs();
//   const [today, setToday] = useState(dayjs());
//   const [selectDate, setSelectDate] = useState(dayjs());
//   const formattedDate = selectDate.format("dddd");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedName, setSelectedName] = useState(null);
//   const [isMeetingEnlarged, setIsMeetingEnlarged] = useState(false);
//   const [showChatbot, setShowChatbot] = useState(false);
//   //   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const currentMonth = months[today.month()];
//   console.log("currentMonths", currentMonth);

//   //chatbot
//   const toggleChatbot = () => {
//     setShowChatbot(!showChatbot);
//   };
//   const chatbotRef = useRef(null);

//   const chatBotStyles = {
//     backgroundColor: "white",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.14)",
//     borderRadius: 10,
//     overflow: "hidden",
//   };

//   const handleClickOutside = (event) => {
//     if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
//       setShowChatbot(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleSelectedMeeting = (imgUrl, name) => {
//     setSelectedName(name);
//     setSelectedImage(imgUrl);
//     setIsMeetingEnlarged(true);
//     // setIsMeetingEnlarged(!isMeetingEnlarged);
//   };

//   const handleClose = () => {
//     setIsMeetingEnlarged(false);
//   };

//   const [backgroundImage, setBackgroundImage] = useState("");

//   useEffect(() => {
//     const date = new Date();
//     const month = date.getMonth();

//     const monthImages = [
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FIndependance-4-p2.jpg?alt=media&token=ebaddccb-f259-4404-922c-9f879ffe0c53)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FIndependance-4-p2.jpg?alt=media&token=ebaddccb-f259-4404-922c-9f879ffe0c53)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//       "url(https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025%20-%20p2.jpg?alt=media&token=21ab7465-079c-4d7c-998b-9673e6ecb227)",
//     ];

//     // Set background image based on the current month
//     setBackgroundImage(monthImages[month]);
//   }, []);

//   // Filter events for the specific month (example: current month)
//   const eventsForCurrentMonth = meetings.filter((meeting) => {
//     const meetingDate = parseISO(meeting.startDatetime);
//     return (
//       meetingDate.getMonth() === today.month() &&
//       meetingDate.getFullYear() === today.year()
//     );
//   });

//   // Sort events by date
//   const sortedEventsForCurrentMonth = eventsForCurrentMonth.sort((a, b) => {
//     const dateA = new Date(a.startDatetime).getDate();
//     const dateB = new Date(b.startDatetime).getDate();
//     return dateA - dateB;
//   });

//   const goToPreviousMonth = () => {
//     setIsMeetingEnlarged(false);
//     setToday((prevToday) => prevToday.subtract(1, "month"));
//   };

//   const goToNextMonth = () => {
//     setIsMeetingEnlarged(false);
//     setToday((prevToday) => {
//       const nextMonth = prevToday.clone().add(1, "month");

//       // Check if the next month is in the next year (January)
//       if (nextMonth.month() === 0) {
//         return nextMonth.year(prevToday.year() + 1).month(0);
//       }

//       return nextMonth;
//     });
//   };

//   return (
//     <div
//       className="App justify-end bg-cover bg-center pt-20 md:bg-repeat"
//       data-theme={isDark ? "dark" : "light"}
//       style={{
//         backgroundImage: isDark ? "" : `url(${vector})`,
//         backgroundPosition: "center",
//         paddingTop: 20,
//       }}
//     >
//       <div className="flex justify-between">
//         {/* First Column **************************************************************************************/}
//         <div
//           className="w-3/7 p-4"
//           style={{
//             backgroundColor: "white",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "rgba(255, 255, 255, 0.25)",
//             borderRadius: 10,
//             overflow: "hidden",
//           }}
//         >
//           <div className="flex flex-col items-center">
//             <h1 className="select-none font-semibold text-white ">
//               {today.year()}
//             </h1>
//             <div className="flex gap-10 items-center">
//               <button
//                 className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
//                 onClick={goToPreviousMonth}
//               >
//                 <GrFormPrevious />
//               </button>
//               <h1
//                 className="cursor-pointer hover:scale-105 "
//                 onClick={() => setToday(dayjs())}
//               >
//                 <h1 className="text-1xl text-white">{months[today.month()]}</h1>
//               </h1>

//               <button
//                 className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
//                 onClick={goToNextMonth}
//               >
//                 <GrFormNext />
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-7">
//             {days.map((day, index) => {
//               return (
//                 <h1
//                   key={index}
//                   className="text-sm text-center h-20 w-20 grid place-content-center text-gray-500 select-none "
//                   style={{ color: "white" }}
//                 >
//                   {day}
//                 </h1>
//               );
//             })}
//           </div>
//           <div className="grid grid-cols-7">
//             {generateDate(today.month(), today.year()).map(
//               ({ date, currentMonth, today }, index) => {
//                 const meetingsOnDate = meetings.filter((meeting) =>
//                   isSameDay(parseISO(meeting.startDatetime), date.toDate())
//                 );

//                 return (
//                   <div
//                     key={index}
//                     className="p-2 text-center h-14 grid place-content-center text-sm relative"
//                   >
//                     <h1
//                       className={cn(
//                         currentMonth ? "text-white" : "text-gray-500",
//                         today ? "bg-red-600 text-white" : "",
//                         selectDate.toDate().toDateString() ===
//                           date.toDate().toDateString()
//                           ? "bg-blue-900 text-white"
//                           : "",
//                         "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none relative"
//                       )}
//                       onClick={() => {
//                         setSelectDate(date);
//                       }}
//                     >
//                       {date.date()}
//                       {meetingsOnDate.length > 0 && (
//                         <div className="flex space-x-1 mt-2">
//                           {currentMonth &&
//                             meetingsOnDate.map((meeting, i) => (
//                               <span
//                                 key={i}
//                                 title={meeting.name}
//                                 className="flex items-center"
//                                 style={{
//                                   marginRight: "4px",
//                                   height: "0px", 
//                                 }}
//                               >
                             
//                                 {!meeting.holidayType && (
//                                   <span
//                                     className="text-white inline-block ml-2"
//                                     style={{
//                                       height: "0px",
//                                       //width: "8px",
//                                       // marginLeft: 4,
//                                       // marginTop: 4,
//                                     }}
//                                   >
//                                     •{" "}
                                  
//                                   </span>
//                                 )}
//                                 {meeting.holidayType &&
//                                   meeting.holidayType.includes(
//                                     "BankHoliday"
//                                   ) && (
//                                     <span
//                                       className="text-red-600"
//                                       title="Bank Holiday"
//                                     >
//                                       <img
//                                         src={BankHoliLogo}
//                                         alt="Bank Holiday Logo"
//                                         style={{
//                                           height: "8px",
//                                           width: "8px",
//                                           marginLeft: 4,
//                                           // marginTop: 4,
//                                         }}
//                                       />
//                                     </span>
//                                   )}
//                                 {meeting.holidayType &&
//                                   meeting.holidayType.includes(
//                                     "MercantileHoliday"
//                                   ) && (
//                                     <span
//                                       className="text-green-600"
//                                       title="Mercantile Holiday"
//                                     >
//                                       <img
//                                         src={MercHoliLogo}
//                                         alt="Mercantile Holiday Logo"
//                                         style={{
//                                           height: "8px",
//                                           width: "8px",
//                                           marginLeft: 4,
//                                           // marginTop: 4,
//                                         }}
//                                       />
//                                     </span>
//                                   )}
//                                 {meeting.holidayType &&
//                                   meeting.holidayType.includes(
//                                     "PoyaHoliday"
//                                   ) && (
//                                     <span
//                                       className="text-green-600"
//                                       title="Poya Holiday"
//                                     >
//                                       <img
//                                         src={PoyaHoliLogo}
//                                         alt="Poya Holiday Logo"
//                                         style={{
//                                           height: "8px",
//                                           width: "8px",
//                                           marginLeft: 4,
//                                           // marginTop: 4,
//                                         }}
//                                       />
//                                     </span>
//                                   )}
//                                 {meeting.holidayType &&
//                                   meeting.holidayType.includes(
//                                     "PublicHoliday"
//                                   ) && (
//                                     <span
//                                       className="text-green-600"
//                                       title="Public Holiday"
//                                     >
//                                       <img
//                                         src={PublicHoliLogo}
//                                         alt="Public Holiday Logo"
//                                         style={{
//                                           height: "8px",
//                                           width: "8px",
//                                           marginLeft: 4,
//                                           // marginTop: 4,
//                                         }}
//                                       />
//                                     </span>
//                                   )}
//                               </span>
//                             ))}
//                         </div>
//                       )}
//                     </h1>
//                   </div>
//                 );
//               }
//             )}
//           </div>
//           <CalendarFooter />
//         </div>

//         {/* Second Column *************************************************************************************/}
//         <div
//           className="w-2/7 p-4"
//           style={{
//             backgroundColor: "white",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "rgba(255, 255, 255, 0.1)",
//             borderRadius: 10,
//             overflow: "hidden",
//           }}
//         >
//           <div className="h-72 sm:h-96 w-full sm:px-5">
//             <div className="flex items-center">
//               <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mr-2">
//                 {selectDate.format("DD")}
//               </h1>
//               <h1 className="font-semibold text-2xl text-white gap-6">
//                 {selectDate.format("dddd")}
//               </h1>
//             </div>

//             {isMeetingEnlarged && (
//               <div>
//                 <div className="relative inline-block">
//                   <img
//                     src={selectedImage}
//                     alt=""
//                     className="max-w-full h-auto mx-auto cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//                     style={{ width: "250px", height: "150px" }}
//                   />
//                   <button
//                     onClick={handleClose} // Replace handleClose with your close function
//                     className="absolute top-0 right-0 bg-white text-black px-0.5 py-0.5 rounded-full hover:bg-gray-200 focus:outline-none"
//                   >
//                     <AiFillCloseCircle />
//                   </button>
//                 </div>

//                 <div className="text-white text-center mt-2 text-lg font-semibold">
//                   {selectedName}
//                 </div>
//               </div>
//             )}
//             <div>
//               <h2 className="text-white text-xs font-semibold mb-1">
//                 All Events for {months[today.month()]}
//               </h2>
//               <div
//                 style={{
//                   maxHeight: isMeetingEnlarged ? "180px" : "",
//                   overflowY: isMeetingEnlarged ? "auto" : "hidden",
//                 }}
//               >
//                 <ol className="mt-1 space-y-1 text-xxs text-gray-500 ml-4">
//                   {sortedEventsForCurrentMonth.length !== 0 ? (
//                     sortedEventsForCurrentMonth.map((event) => {
//                       const eventDate = dayjs(event.startDatetime).format(
//                         "YYYY-MM-DD"
//                       );
//                       const isCurrentDate = dayjs(eventDate).isSame(
//                         currentDate,
//                         "day"
//                       );

//                       return (
//                         <li
//                           key={event.id}
//                           className="rounded-lg bg-transparent max-w-xs"
//                           style={{
//                             backgroundColor: isCurrentDate
//                               ? "#1E3A8A"
//                               : "rgba(255, 255, 255, 0.1)",
//                             borderRadius: 3,
//                             overflow: "hidden",
//                             padding: 3,
//                             marginBottom: 3,
//                           }}
//                         >
//                           <div className="flex items-start space-x-1 group rounded-xl focus-within:bg-gray-100">
//                             <img
//                               src={event.imageUrl}
//                               alt=""
//                               className="flex-none w-12 h-12 rounded-sm mr-1 hover:bg-gray-100 cursor-pointer"
//                               onClick={() => {
//                                 toggleSelectedMeeting(
//                                   event.imageUrl,
//                                   event.name
//                                 );
//                                 console.log("toggle clicked");
//                               }}
//                             />
//                             <div className="flex flex-col justify-start">
//                               <p
//                                 className={`text-xs text-white mt-1 mb-1 font-serif truncate ${
//                                   !showChatbot ? "w-50" : "w-20"
//                                 }`}
//                               >
//                                 {event.name}
//                               </p>
//                               <div className="text-xs text-gray-300 text-left">
//                                 {dayjs(event.startDatetime).format(
//                                   "YYYY-MM-DD"
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                       );
//                     })
//                   ) : (
//                     <li className="text-center pt-4">
//                       <h1>No Events To be displayed</h1>
//                     </li>
//                   )}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Third Column ***************************************************************************************/}
//         <div className="w-2/7 p-4" style={!showChatbot ? {} : chatBotStyles}>
//           {!showChatbot && (
//             <button
//               className="fixed bottom-10 right-16 bg-blue-500 text-white p-4 rounded-full shadow-md float-right"
//               onClick={toggleChatbot}
//             >
//               <FaRobot className="text-2xl" />
//             </button>
//           )}

//           {showChatbot && (
//             <div ref={chatbotRef} style={{ height: 500, overflow: "auto" }}>
//               <ChatbotComponent />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
