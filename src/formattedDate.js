import React from "react";

export default function formattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.formattedDate.getDay()];
  let hours = props.formattedDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.formattedDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return;
  <div>
    {day} {hours}:{minutes}{" "}
  </div>;
}
