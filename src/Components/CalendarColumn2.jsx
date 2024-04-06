import React from "react";
import dayjs from "dayjs";
import { AiFillCloseCircle } from "react-icons/ai";
import Skeleton from "@mui/material/Skeleton";
import "./CalendarColumn2Styles.css";

export const CalendarColumn2 = ({
  selectDate,
  isMeetingEnlarged,
  handleClose,
  selectedImage,
  selectedName,
  months,
  today,
  sortedEventsForCurrentMonth,
  currentDate,
  toggleSelectedMeeting,
  showChatbot,
  newChangedMonth,
  onClickSelectedDay,
}) => {
  return (
    <div
      className="w-2/7 p-4"
      style={{
        width: "400px",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* First Row */}
      <div style={{ flex: "none" }}>
        <div className="flex items-center">
          <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mr-2 mb-2">
            {sortedEventsForCurrentMonth.length > 0 &&
              (onClickSelectedDay === null
                ? dayjs(sortedEventsForCurrentMonth[0].startDatetime).format(
                    "DD"
                  )
                : dayjs(onClickSelectedDay).format("DD"))}
          </h1>
          <h1 className="font-semibold text-2xl text-white gap-4 mt-7">
            {sortedEventsForCurrentMonth.length > 0 &&
              (onClickSelectedDay === null
                ? dayjs(sortedEventsForCurrentMonth[0].startDatetime).format(
                    "dddd"
                  )
                : dayjs(onClickSelectedDay).format("dddd"))}
          </h1>
        </div>

        <div>
          <div className="relative inline-block" style={{ marginTop: "5px" }}>
            {sortedEventsForCurrentMonth.length > 0 ? (
              <img
                src={selectedImage || sortedEventsForCurrentMonth[0].imageUrl}
                alt=""
                className="max-w-full h-auto mx-auto cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                style={{ width: "250px", height: "200px" }}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width="100%"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(245, 245, 245, 0.1)",
                }}
              >
                <div style={{ width: "250px", height: "200px" }} />
              </Skeleton>
            )}

            <div className="flex flex-col justify-start">
              <div className="text-white text-center mt-2 text-lg font-semibold">
                {sortedEventsForCurrentMonth.length > 0 &&
                  selectedName === null &&
                  sortedEventsForCurrentMonth[0].name}
              </div>
            </div>
          </div>

          <div className="text-white text-center text-lg font-semibold">
            {selectedName}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <h2 className="text-white text-xs font-semibold mb-1 mt-6">
          All Events for {months[today.month()]}
        </h2>
        <div
          className="custom-scrollbar"
          style={{
            maxHeight: isMeetingEnlarged
              ? "140px"
              : sortedEventsForCurrentMonth.length > 2
              ? "hidden"
              : "hidden",
            overflowY: isMeetingEnlarged
              ? "auto"
              : sortedEventsForCurrentMonth.length > 2
              ? "auto"
              : "hidden",
          }}
        >
          <ol className="mt-1 space-y-1 text-xxs text-gray-500 ml-4">
            {sortedEventsForCurrentMonth.length !== 0 ? (
              sortedEventsForCurrentMonth.map((event) => {
                const eventDate = dayjs(event.startDatetime).format(
                  "YYYY-MM-DD"
                );
                const isCurrentDate = dayjs(eventDate).isSame(
                  currentDate,
                  "day"
                );

                return (
                  <li
                    key={event.id}
                    className="rounded-lg bg-transparent max-w-xs"
                    style={{
                      backgroundColor: isCurrentDate
                        ? "#1E3A8A"
                        : "rgba(255, 255, 255, 0.1)",
                      borderRadius: 3,
                      overflow: "hidden",
                      padding: 3,
                      marginBottom: 3,
                    }}
                  >
                    <div
                      className="flex items-start space-x-1 group rounded-xl focus-within:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        toggleSelectedMeeting(
                          event.imageUrl,
                          event.name,
                          event.startDatetime
                        );
                      }}
                    >
                      <img
                        src={event.imageUrl}
                        alt=""
                        className="flex-none w-16 h-16 rounded-sm mr-1 hover:bg-gray-100 cursor-pointer"
                      />
                      <div className="flex flex-col justify-start">
                        <p
                          className={"text-xs text-white mt-1 mb-1 font-serif"}
                        >
                          {event.name}
                        </p>
                        <div className="text-xs text-gray-300 text-left">
                          {dayjs(event.startDatetime).format("YYYY-MM-DD")}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="text-center pt-4">
                <h1>No events to be displayed</h1>
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};
