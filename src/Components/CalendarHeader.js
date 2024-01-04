import React from "react";
import headerQuotes from "./events/headerquotes";


const Header = ({months ,today }) => {
    let todayMonth = months[today.month()]

    const matchingQuotes = headerQuotes.filter(
        (quote) => quote.month === todayMonth
      );

  return (
    <header className=" text-center">
      <div className="flex flex-col items-center justify-center">
        {matchingQuotes.map((quote,index) => (
          <div key={index} id="month">
            <h1 className="text-1xl font-bold text-white mt-4" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
              {quote.title}
            </h1>
            <h2 className="text-sm text-white mb-2">
            {quote.subtitle}
            </h2>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

