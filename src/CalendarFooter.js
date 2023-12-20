import React from "react";
import BankHoliLogo from "./img/Bankholilogo.png";
import MercHoliLogo from "./img/Mercholilogo.png";
import PoyaHoliLogo from "./img/PoyaDaylogo.png";
import PublicHoliLogo from "./img/Publicholidaylogo.png";

const CalendarFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 ml-6 mb-2">
      <div className="flex items-center">
        {/* <span className="text-yellow-400" title="Poya Holiday">
          &#9679;
        </span> */}
          <span className="text-green-600" title="Poya Holiday">
          <img
            src={PoyaHoliLogo}
            alt="Poya Holiday Logo"
            style={{ height: "8px", width: "8px", marginLeft: 8 , marginRight:4 }}
          />
        </span>
        <h1 className="sm-1 text-white text-xs">Poya Holiday</h1>
      </div>
      <div className="flex items-center">
        {/* <span className="text-red-600" title="Bank Holiday">
          &#10060;
        </span> */}
          <span className="text-green-600" title="Bank Holiday">
          <img
            src={BankHoliLogo}
            alt="Bank Holiday Logo"
            style={{ height: "8px", width: "8px", marginLeft: 8 , marginRight:4 }}
          />
        </span>
        <h1 className="sm-1 text-white text-xs">Bank Holiday</h1>
      </div>
      <div className="flex items-center">
        {/* <span className="text-blue-500" title="Public Holiday">
          &#9733;
        </span> */}
        <span className="text-green-600" title="Public Holiday">
          <img
            src={PublicHoliLogo}
            alt="Public Holiday Logo"
            style={{ height: "8px", width: "8px", marginLeft: 8 , marginRight:4 }}
          />
        </span>
        <h1 className="sm-1 text-white text-xs">Public Holiday</h1>
      </div>
      <div className="flex items-center">
        {/* <span className="text-blue-500" title="Public Holiday">
          &#9733;
        </span> */}
        <span className="text-green-600" title="Mercantile Holiday">
          <img
            src={MercHoliLogo}
            alt="Bank Holiday Logo"
            style={{ height: "8px", width: "10px", marginLeft: 8 , marginRight:4 }}
          />
        </span>
        <h1 className="sm-1 text-white text-xs">Mercantile Holiday</h1>
      </div>
    </div>
  );
};

export default CalendarFooter;
