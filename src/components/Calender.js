import React from 'react';
import background from "../assets/background.png";
import './Calender.scss'

export default function Calender() {
  return (
    <div
          className="col-lg-6 calender"
        >
          <img src={background} alt="background-img" width={"100%"} />
          <h4>Choose a date range</h4>
          <p className="calender__text is--darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt </p>
        </div>
  )
}
