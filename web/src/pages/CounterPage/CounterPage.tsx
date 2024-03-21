import { Link, routes } from "@redwoodjs/router";
import React, { useState, useEffect, useMemo } from "react";

const CounterPage: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeDifference, setTimeDifference] = useState<number>(0);

  const targetDateString = "2024-03-22T00:00:00.000Z";

  useEffect(() => {
    try {
      const parsedTargetDate = new Date(targetDateString);
      if (isNaN(parsedTargetDate.getTime())) {
        throw new Error("Invalid target date format");
      }
      setTargetDate(parsedTargetDate);
    } catch (error) {
      console.error("Error parsing target date:", error);
    }
  }, [targetDateString]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!targetDate) return;

      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeDifference(distance);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = useMemo(
    () => Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    [timeDifference]
  );
  const hours = useMemo(
    () =>
      Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    [timeDifference]
  );
  const minutes = useMemo(
    () => Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    [timeDifference]
  );
  const seconds = useMemo(
    () => Math.floor((timeDifference % (1000 * 60)) / 1000),
    [timeDifference]
  );

  const daysString = `${days.toString().padStart(2, "0")}`;
  const hoursString = `${hours.toString().padStart(2, "0")}`;
  const minutesString = `${minutes.toString().padStart(2, "0")}`;
  const secondsString = `${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-center h-screen bg-[url('../../assets/ceat.webp')]" style={{ backgroundPosition: 'center' }}>
      <div className="p-10 rounded shadow-xl glass">
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Welcome to Khel Raay!
        </h1>
        <h1 className="text-center text-white text-md mb-6 text-md">
          The countdown begins! Join us as we unveil something extraordinary.
          March 22nd is the day – don't miss out!
        </h1>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
          {targetDate ? (
            <>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span
                  className="countdown font-mono text-5xl"
                  style={{ transition: "all 0.5s ease" }}
                >
                  {daysString}
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span
                  className="countdown font-mono text-5xl"
                  style={{ transition: "all 0.5s ease" }}
                >
                  {hoursString}
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span
                  className="countdown font-mono text-5xl"
                  style={{ transition: "all 0.5s ease" }}
                >
                  {minutesString}
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span
                  className="countdown font-mono text-5xl"
                  style={{ transition: "all 0.5s ease" }}
                >
                  {secondsString}
                </span>
                sec
              </div>
            </>
          ) : (
            <div>Err: No countdown available</div>
          )}
        </div>
        <Link to={routes.home()} className="btn btn-accent">Go Back</Link>
      </div>
    </div>
  );
};

export default CounterPage;
