import React, { useState } from "react";
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
  } from "date-fns";
function Meeting({ meeting,onMeetingClick }) {
    let startDatetime = parseISO(meeting.startDatetime, new Date());
    let endDatetime = parseISO(meeting.endDatetime, new Date());

    return (
      <div
        className="rounded-lg bg-transparent max-w-xs"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: 10,
          overflow: "hidden",
          padding: 0,
        }}
      >
        <li className="flex items-start space-x-4 group rounded-xl focus-within:bg-gray-100 ">
          <img
            src={meeting.imageUrl}
            alt=""
            className="flex-none w-20 h-20 rounded-sm mr-2 hover:bg-gray-100 cursor-pointer"
            onClick={()=>onMeetingClick(meeting.imageUrl,meeting.name)}
          />
          <div className="flex flex-col justify-start">
            <p className="vtext-gray-900 text-white mt-4">{meeting.name}</p>
            <div className="flex items-center">
              <time dateTime={meeting.startDatetime} className="text-gray-500" style={{color:"white"}}>
                {format(startDatetime, "h:mm a")}
              </time>
              <span className="mx-1 text-gray-500">-</span>
              <time dateTime={meeting.endDatetime} className="text-gray-500" style={{color:"white"}}>
                {format(endDatetime, "h:mm a")}
              </time>
            </div>
          </div>
        </li>
      </div>
    );
  }

  export default Meeting