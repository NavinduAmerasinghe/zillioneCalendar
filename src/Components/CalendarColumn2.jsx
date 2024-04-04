import React from "react";
import dayjs from "dayjs";
import { AiFillCloseCircle } from "react-icons/ai";

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
  console.log(
    "sortedEventsForCurrentMonth",
    sortedEventsForCurrentMonth[0].startDatetime
  );

  
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
      }}
    >
      <div className="h-72 sm:h-96 w-full sm:px-5">
        <div className="flex items-center">
          <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mr-2 mb-2">
            {/* {selectDate.format("DD")} */}
            {onClickSelectedDay === null ? dayjs(sortedEventsForCurrentMonth[0].startDatetime).format("DD"):dayjs(onClickSelectedDay).format("DD")}
          </h1>
          <h1 className="font-semibold text-2xl text-white gap-4 mt-7">
            {/* {selectDate.format("dddd")} */}
            {onClickSelectedDay === null ? dayjs(sortedEventsForCurrentMonth[0].startDatetime).format("dddd"):dayjs(onClickSelectedDay).format("dddd")}
          </h1>
        </div>

        {/* {isMeetingEnlarged && ( */}
        <div>
          <div className="relative inline-block" style={{marginTop:"5px"}}>
            <img
              src={selectedImage || sortedEventsForCurrentMonth[0].imageUrl}
              alt=""
              className="max-w-full h-auto mx-auto cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              style={{ width: "250px", height: "200px" }}
            />
            <div className="flex flex-col justify-start">
            <div className="text-white text-center mt-2 text-lg font-semibold">
                {selectedImage === null && sortedEventsForCurrentMonth[0].name}
              </div>
            </div>

            {/* <button
                onClick={handleClose}
                className="absolute top-0 right-0 bg-white text-black px-0.5 py-0.5 rounded-full hover:bg-gray-200 focus:outline-none"
              >
                <AiFillCloseCircle />
              </button> */}
          </div>

          <div className="text-white text-center text-lg font-semibold">
            {selectedName}
          </div>
        </div>
        {/* )} */}
        <div>
          <h2 className="text-white text-xs font-semibold mb-1 mt-4">
            All Events for {months[today.month()]}
          </h2>
          <div
            style={{
              maxHeight: isMeetingEnlarged
                ? "140px"
                : sortedEventsForCurrentMonth.length > 6
                ? "383px"
                : "hidden",
              overflowY: isMeetingEnlarged
                ? "auto"
                : sortedEventsForCurrentMonth.length > 4
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
                        className="flex items-start space-x-1 group rounded-xl focus-within:bg-gray-100"
                        onClick={() => {
                          toggleSelectedMeeting(event.imageUrl, event.name,event.startDatetime);
                        }}
                      >
                        <img
                          src={event.imageUrl}
                          alt=""
                          className="flex-none w-16 h-16 rounded-sm mr-1 hover:bg-gray-100 cursor-pointer"
                        />
                        <div className="flex flex-col justify-start">
                          <p
                            className={
                              "text-xs text-white mt-1 mb-1 font-serif"
                            }
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
                  <h1>No Events To be displayed</h1>
                </li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
