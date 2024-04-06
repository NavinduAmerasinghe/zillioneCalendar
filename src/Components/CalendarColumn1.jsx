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
  setOnClickSelectedDay,
  setSelectedName,
  //month,
}) => {
  const updatedDates = generateDate(selectDate.month(), selectDate.year());

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
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col items-start">
          <div class="flex flex-col items-start ml-6">
            <h1 class="text-2xl text-white">{months[today.month()]}</h1>
            <h1 class="text-1xl text-white">{today.year()}</h1>
          </div>
        </div>

        <div class="flex flex-col items-end">
          <div class="flex gap-3 mr-6 mt-2">
            <IoIosArrowUp
              class="w-8 h-8 cursor-pointer hover:scale-105 transition-all text-white"
              onClick={() => {
                setSelectedImage(null);
                setSelectedName(null);
                setToday(today.month(today.month() - 1));
                setIsMeetingEnlarged(false);
                setOnClickSelectedDay(null);
                // setSelectDate();
              }}
            />

            <IoIosArrowDown
              class="w-8 h-8 cursor-pointer hover:scale-105 transition-all text-white"
              onClick={() => {
                setSelectedImage(null);
                setSelectedName(null);
                setToday(today.month(today.month() + 1));
                setIsMeetingEnlarged(false);
                setOnClickSelectedDay(null);
                // setSelectDate();
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
                    currentMonth ? "text-gray-100" : "text-gray-300",
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
                        meetingsOnDate.map((meeting, i) => {
                          // console.log("Meetinggggggg:", meeting);
                          return (
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
                                        marginTop: "24px",
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
                                        marginTop: "24px",
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
                                        marginTop: "24px",
                                        height: "8px",
                                        width: "8px",
                                        marginLeft: 4,
                                      }}
                                    />
                                  </span>
                                )}
                              {meeting.holidayType &&
                                meeting.holidayType.includes(
                                  "PublicHoliday"
                                ) && (
                                  <span
                                    className="text-green-600"
                                    title="Public Holiday"
                                  >
                                    <img
                                      src={PublicHoliLogo}
                                      alt="Public Holiday Logo"
                                      style={{
                                        marginTop: "24px",
                                        height: "8px",
                                        width: "8px",
                                        marginLeft: 4,
                                      }}
                                    />
                                  </span>
                                )}
                            </span>
                          );
                        })}
                    </div>
                  )}
                  {/* {meetingsOnDate.length > 0 && (
                    <div className="flex space-x-1 mt-2">
                      {currentMonth &&
                        meetingsOnDate.map((meeting, i) => (
                          <span
                            key={i}
                            title={meeting.name}
                            className="flex items-center"
                            style={{ marginRight: "4px", height: "0px" }}
                          >
                            {!meeting.holidayType && (
                              <span className="text-white inline-block ml-2">
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
                                      marginTop: "24px",
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
                                      marginTop: "24px",
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
                                      marginTop: "24px",
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
                                      marginTop: "24px",
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
                  )} */}
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
