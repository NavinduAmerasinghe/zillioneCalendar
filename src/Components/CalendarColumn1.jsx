// import React, { useState , useEffect } from "react";
// import { useNavigate , useParams  } from "react-router-dom";
// import BankHoliLogo from "./img/Bankholilogo.png";
// import MercHoliLogo from "./img/Mercholilogo.png";
// import PoyaHoliLogo from "./img/PoyaDaylogo.png";
// import PublicHoliLogo from "./img/Publicholidaylogo.png";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import CalendarFooter from "./CalendarFooter";
// import cn from "./util/cn";
// import dayjs from "dayjs";
// import axios from "axios";

// export const CalendarColumn1 = ({
//   today,
//   setToday,
//   months,
//   days,
//   generateDate,
//   meetings,
//   isSameDay,
//   parseISO,
//   selectDate,
//   setSelectDate,
//   //month,
// }) => {
//   const [customMonth, setCustomMonth] = useState(dayjs().month() + 1);
//    const navigate = useNavigate();
//   const { month } = useParams();
//   //const [selectDate, setSelectDate] = useState(dayjs());

//   useEffect(() => {
//     const initialDate = selectDate.clone().month(parseInt(month) - 1); // Convert month to number
//     setSelectDate(initialDate);
//   }, [month, setSelectDate, selectDate]);

//   const handleCustomMonthChange = () => {
//     // Assuming you want to navigate based on month number
//     navigate(`/month=${customMonth}`);
//   };

//   // const handleCustomMonthChange = () => {
//   //   if (customMonth >= 1 && customMonth <= 12) {
//   //     const newDate = selectDate.clone().month(customMonth - 1);
//   //     axios.post('http://localhost:5000/', { newDate })
//   //       .then(response => {
//   //         console.log('Date updated successfully:', response.data);
//   //         setSelectDate(newDate);
//   //       })
//   //       .catch(error => {
//   //         console.error('Error updating date:', error);
//   //       });
//   //   } else {
//   //     console.error('Please enter a valid month (1-12)');
//   //   }
//   // };

//   const updatedDates = generateDate(selectDate.month(), selectDate.year());
//   console.log('updated dates' , updatedDates);

//   return (
//     <div
//       className="w-3/7 p-4"
//       style={{
//         backgroundColor: "white",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundColor: "rgba(255, 255, 255, 0.25)",
//         borderRadius: 10,
//         overflow: "hidden",
//       }}
//     >
//       <div className="flex flex-col items-center">
//         <h1 className="select-none font-semibold text-white">{today.year()}</h1>
//         <div className="flex gap-10 items-center">
//           <GrFormPrevious
//             className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
//             onClick={() => {
//               setSelectDate(selectDate.subtract(1, "month"));
//             }}
//           />
//         {/* <form onSubmit={handleCustomMonthChange}> */}
//         <input
//           type="number"
//           placeholder="Enter month (1-12)"
//           value={customMonth}
//           onChange={(e) => setCustomMonth(parseInt(e.target.value))}
//         />
//         <button onClick={handleCustomMonthChange}>Change Month</button>
//       {/* </form> */}
//           <GrFormNext
//             className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
//             onClick={() => {
//               setSelectDate(selectDate.add(1, "month"));
//             }}
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-7">
//         {days.map((day, index) => {
//           return (
//             <h1
//               key={index}
//               className="text-sm text-center h-20 w-20 grid place-content-center text-gray-500 select-none "
//               style={{ color: "white" }}
//             >
//               {day}
//             </h1>
//           );
//         })}
//       </div>
//       <div className="grid grid-cols-7">
//         {updatedDates.map(({ date, currentMonth, today }, index) => {
//           const meetingsOnDate = meetings.filter((meeting) =>
//             isSameDay(parseISO(meeting.startDatetime), date.toDate())
//           );

//           return (
//             <div
//               key={index}
//               className="p-2 text-center h-14 grid place-content-center text-sm relative"
//             >
//               <h1
//                 className={cn(
//                   currentMonth ? "text-white" : "text-gray-500",
//                   today ? "bg-red-600 text-white" : "",
//                   selectDate.toDate().toDateString() ===
//                     date.toDate().toDateString()
//                     ? "bg-blue-900 text-white"
//                     : "",
//                   "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none relative"
//                 )}
//                 onClick={() => {
//                   setSelectDate(date);
//                 }}
//               >
//                 {date.date()}
//                 {meetingsOnDate.length > 0 && (
//                   <div className="flex space-x-1 mt-2">
//                     {currentMonth &&
//                       meetingsOnDate.map((meeting, i) => (
//                         <span
//                           key={i}
//                           title={meeting.name}
//                           className="flex items-center"
//                           style={{
//                             marginRight: "4px",
//                             height: "0px",
//                           }}
//                         >
//                           {/* Rendering holiday logos */}
//                           {/* ... */}
//                         </span>
//                       ))}
//                   </div>
//                 )}
//               </h1>
//             </div>
//           );
//         })}
//       </div>
//       <CalendarFooter />
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BankHoliLogo from "./img/Bankholilogo.png";
import MercHoliLogo from "./img/Mercholilogo.png";
import PoyaHoliLogo from "./img/PoyaDaylogo.png";
import PublicHoliLogo from "./img/Publicholidaylogo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CalendarFooter from "./CalendarFooter";
import cn from "./util/cn";
import dayjs from "dayjs";
import axios from "axios";

export const CalendarColumn1 = ({
  today,
  setToday,
  months,
  days,
  generateDate,
  meetings,
  isSameDay,
  parseISO,
  selectDate,
  setSelectDate,
  setIsMeetingEnlarged,
  setSelectedImage,
  //month,
}) => {
  //const [customMonth, setCustomMonth] = useState(dayjs().month() + 1);
  //  const navigate = useNavigate();
  // const { month } = useParams();
  //const [selectDate, setSelectDate] = useState(dayjs());

  // useEffect(() => {
  //   const initialDate = selectDate.clone().month(parseInt(month) - 1); // Convert month to number
  //   setSelectDate(initialDate);
  // }, [month, setSelectDate, selectDate]);

  // const handleCustomMonthChange = () => {
  //   // Assuming you want to navigate based on month number
  //   navigate(`/month=${customMonth}`);
  // };

  // const handleCustomMonthChange = () => {
  //   if (customMonth >= 1 && customMonth <= 12) {
  //     const newDate = selectDate.clone().month(customMonth - 1);
  //     axios.post('http://localhost:5000/', { newDate })
  //       .then(response => {
  //         console.log('Date updated successfully:', response.data);
  //         setSelectDate(newDate);
  //       })
  //       .catch(error => {
  //         console.error('Error updating date:', error);
  //       });
  //   } else {
  //     console.error('Please enter a valid month (1-12)');
  //   }
  // };

  // const handleCustomMonthChange = () => {
  //   if (customMonth >= 1 && customMonth <= 12) {
  //     const newDate = selectDate.clone().month(customMonth - 1); // Month is zero-indexed
  //     setSelectDate(newDate);
  //   } else {
  //     console.error('Please enter a valid month (1-12)');
  //   }
  // };



  const updatedDates = generateDate(selectDate.month(), selectDate.year());
  console.log("updated dates", updatedDates);

  return (
    <div
      className="w-3/7 p-4"
      style={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderRadius: "10px 0 0 10px",
        overflow: "hidden",
      }}
    >
      <div className="flex flex-col items-center">
      <div className="flex gap-80 items-center">
        <div className="flex items-center gap-3 mt-2">
          <h1 className="text-2xl text-white">{months[today.month()]}</h1>
          <h1 className="text-1xl mr-5 text-white">{today.year()}</h1>
        </div>
       
        <div className="flex gap-2 items-center">
          <IoIosArrowUp
            className="w-8 mt-4 h-8 cursor-pointer hover:scale-105 transition-all text-white"
            onClick={() => {
              setSelectedImage(null);
              setToday(today.month(today.month() - 1));
              setIsMeetingEnlarged(false);
            }}
          />
          <IoIosArrowDown
            className="w-8 h-8 mt-4 cursor-pointer hover:scale-105 transition-all text-white"
            onClick={() => {
              setSelectedImage(null);
              setToday(today.month(today.month() + 1));
              setIsMeetingEnlarged(false);
            }}
          />
        </div>
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
                    today ? "bg-14848F text-white bg-opacity-75" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-blue-900 text-white bg-opacity-75"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:bg-opacity-50 hover:text-white transition-all cursor-pointer select-none relative"
                  )}
                  
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                  {meetingsOnDate.length > 0 && (
                    <div className="flex space-x-1 mt-2">
                      {currentMonth &&
                        meetingsOnDate.map((meeting, i) => (
                          <span
                            key={i}
                            title={meeting.name}
                            className="flex items-center"
                            style={{
                              marginRight: "4px",
                              height: "0px",
                            }}
                          >
                            {!meeting.holidayType && (
                              <span
                                className="text-white inline-block ml-2"
                                style={{
                                  height: "0px",
                                }}
                              >
                                •{" "}
                              </span>
                            )}
                            {meeting.holidayType &&
                              meeting.holidayType.includes("BankHoliday") && (
                                <span
                                  className="text-red-600"
                                  title="Bank Holiday"
                                >
                                  <img
                                    src={BankHoliLogo}
                                    alt="Bank Holiday Logo"
                                    style={{
                                      marginTop:"24px",
                                      height: "8px",
                                      width: "8px",
                                      marginLeft: 4,
                                    }}
                                  />
                                </span>
                              )}
                            {meeting.holidayType &&
                              meeting.holidayType.includes(
                                "MercantileHoliday"
                              ) && (
                                <span
                                  className="text-green-600"
                                  title="Mercantile Holiday"
                                >
                                  <img
                                    src={MercHoliLogo}
                                    alt="Mercantile Holiday Logo"
                                    style={{
                                      marginTop:"24px",
                                      height: "8px",
                                      width: "8px",
                                      marginLeft: 4,
                                    }}
                                  />
                                </span>
                              )}
                            {meeting.holidayType &&
                              meeting.holidayType.includes("PoyaHoliday") && (
                                <span
                                  className="text-green-600"
                                  title="Poya Holiday"
                                >
                                  <img
                                    src={PoyaHoliLogo}
                                    alt="Poya Holiday Logo"
                                    style={{
                                      marginTop:"24px",
                                      height: "8px",
                                      width: "8px",
                                      marginLeft: 4,
                                    }}
                                  />
                                </span>
                              )}
                            {meeting.holidayType &&
                              meeting.holidayType.includes("PublicHoliday") && (
                                <span
                                  className="text-green-600"
                                  title="Public Holiday"
                                >
                                  <img
                                    src={PublicHoliLogo}
                                    alt="Public Holiday Logo"
                                    style={{
                                      marginTop:"24px",
                                      height: "8px",
                                      width: "8px",
                                      marginLeft: 4,
                                    }}
                                  />
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
  );
};
