import React from "react";
import "./App.css";
import EveryDay from "./Component/Timetable/EveryDay";
import ContextDay from "./store/auth-context";

let MONDAY = [
  [
    { id: "0", sub: "Monday" },
    {
      id: "1",
      sub: "CS301",
      link: "https://meet.google.com/oja-wtij-pcx",
      color: "red",
    },
    { id: "2", sub: "  " },
    {
      id: "3",
      sub: "CS303",
      link: "https://meet.google.com/jrs-fbac-kvg",
      color: "blue",
    },
    {
      id: "4",
      sub: "IT301",
      link: "https://meet.google.com/nrr-qwzw-irv",
      color: "green",
    },
    { id: "5", sub: "CS363-LAB", span: "3", link: "#", color: "blue" },
    { id: "6", sub: " " },
  ],
  [
    { id: "0", sub: "Tuesday" },
    {
      id: "1",
      sub: "PE2:CS/IT 421",
      link: "https://meet.google.com/ofs-wezh-che",
      color: "purple",
    },
    { id: "2", sub: "IIEC301", link: "#", color: "yellow" },
    {
      id: "3",
      sub: "CS301",
      link: "https://meet.google.com/oja-wtij-pcx",
      color: "red",
    },
    { id: "4", sub: " " },
    { id: "5", sub: "CS361-LAB", span: "3", link: "#", color: "blue" },
    { id: "6", sub: "PE1: CS/IT429", link: "#", color: "purple" },
  ],
  [
    { id: "0", sub: "Wednesday" },
    {
      id: "1",
      sub: "CS303",
      link: "https://meet.google.com/jrs-fbac-kvg",
      color: "blue",
    },
    { id: "2", sub: "IIEC301", link: "#", color: "yellow" },
    {
      id: "3",
      sub: "IT301",
      link: "https://meet.google.com/nrr-qwzw-irv",
      color: "green",
    },
    {
      id: "4",
      sub: "PE2:CS/IT421",
      link: "https://meet.google.com/ofs-wezh-che",
      color: "purple",
    },
    { id: "5", sub: " " },
    { id: "6", sub: " " },

    { id: "7", sub: " " },

    { id: "8", sub: "PE1: CS/IT429", link: "#", color: "purple" },
  ],
  [
    { id: "0", sub: "Thursday" },
    {
      id: "1",
      sub: "CS301",
      link: "https://meet.google.com/oja-wtij-pcx",
      color: "red",
    },
    { id: "2", sub: "  " },
    {
      id: "3",
      sub: "PE2:CS/IT 421",
      link: "https://meet.google.com/ofs-wezh-che",
      color: "purple",
    },
    { id: "4", sub: " " },
    { id: "5", sub: "IT361 Lab", span: "2", link: "#", color: "blue" },
    { id: "6", sub: " " },
    { id: "7", sub: " " },
  ],
  [
    { id: "0", sub: "Friday" },
    {
      id: "1",
      sub: "IT301",
      link: "https://meet.google.com/nrr-qwzw-irv",
      color: "green",
    },
    { id: "2", sub: "IIEC301", link: "#", color: "yellow" },
    {
      id: "3",
      sub: "CS303",
      link: "https://meet.google.com/jrs-fbac-kvg",
      color: "blue",
    },
    { id: "4", sub: "" },
    { id: "5", sub: "" },
    { id: "6", sub: "IIEC301 Tut", span: "2", link: "#", color: "blue" },
    { id: "7", sub: "PE1: CS/IT429", link: "#", color: "purple" },
  ],
];
const App = () => {
  return (
    <ContextDay.Provider value={{ val: MONDAY }}>
      <EveryDay />
    </ContextDay.Provider>
  );
};

export default App;
