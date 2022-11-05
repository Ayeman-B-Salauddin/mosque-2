import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { Navbar } from "../components/Navbar";

const activities = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />{" "}
      <section className="cal">
        <div className="gradient-border">
          <Calendar onChange={onChange} value={value} />
        </div>
      </section>
    </>
  );
};

export default activities;
