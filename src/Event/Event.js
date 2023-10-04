import React, { Component, useEffect } from "react";
import { Router, Switch, Link, BrowserRouter } from "react-router-dom";
import "./Event.css";
import upcoming_image from "../images/Events/upcoming_events.jpeg";
import { events_20 } from "./events_20";
import { events_21 } from "./events_21";
import { events_22 } from "./events_22";
import { events_upcoming } from "./events_upcoming";
import AOS from "aos";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//Item for carousel
const Itemc = ({ src, title, text, link }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      style={{ width: "32rem" }}
      className="event-1"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="card-body">
        <img variant="top" src={src} height="200px" width="100%" />
        <div className="card-info" data-aos="fade-in" data-aos-once="true">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <Link to={link}>
        <button className="card-button1" onClick={scrollToTop}>
          Read more
        </button>
      </Link>
      <button className="card-button2">REGISTER NOW</button>
    </div>
  );
};
const Item = ({ src, title, text, link }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      style={{ width: "32rem" }}
      className="event-2"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="card-body">
        <img variant="top" src={src} height="200px" width="100%" />
        <div className="card-info" data-aos="fade-in" data-aos-once="true">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <Link to={link}>
        <button className="card-button1" onClick={scrollToTop}>
          Read more
        </button>
      </Link>
    </div>
  );
};

/*const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];*/ /*for carousel*/

class EventMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "present",
    };
    {
      /*this.handleChange=this.handleChange(this);*/
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  renderElement() {
    if (this.state.value === "present")
      return (
        <div className="events">
          <h2 id="upComing_Events_heading">Upcoming Events</h2>
          <div className="up-events">
            {events_upcoming.map((item) => (
              <>
                <div className="main_upcoming_events_Container">
                  <div
                    className="upcoming_image_container"
                    id="upcoming_img_Container"
                  >
                    <img src={upcoming_image} alt="image" />
                  </div>
                  <div className="upcoming_event_content">
                  <h2 id="upcoming_event_item_name">{item.name}</h2>
                  <p>{item.description}</p>
                  <span id="upcoming_fee">{item.fee}</span>
                  <div className="upcoming_registration_container">
                   <a href={item.registration}><span id="upcoming_registration">
                   Register Here &rarr;
                  </span>
                  </a>
                 <a href={item.rule_book}> <span>
                    View Rule Book &rarr;
                  </span></a>
                  </div>  
                  </div>
                </div>
              </>
            ))}
            ;
          </div>
          <div
            className="pre-events-heading"
            data-aos="fade-in"
            data-aos-once="true"
          >
            <h3>Archives</h3>{" "}
          </div>
          <p className="event-year" data-aos="fade-in" data-aos-once="true">
            2021-2022
          </p>
          <div className="previous-events">
            {events_22.map((item) => (
              <Item {...item} />
            ))}
            ;
          </div>
          <p className="event-year" data-aos="fade-in" data-aos-once="true">
            2020-2021
          </p>
          <div className="previous-events">
            {events_21.map((item) => (
              <Item {...item} />
            ))}
            ;
          </div>
          <p className="event-year" data-aos="fade-in" data-aos-once="true">
            2019-2020
          </p>
          <div className="previous-events">
            {events_20.map((item) => (
              <Item {...item} />
            ))}
            ;
          </div>
        </div>
      );
    else
      return (
        <div>
          <div className="events">
            <div className="up-events">
             <p>No Events</p>
            </div>
            <div
              className="pre-events-heading"
              data-aos="fade-in"
              data-aos-once="true"
            >
              <h3>Archives</h3>
            </div>
            <p className="event-year" data-aos="fade-in" data-aos-once="true">
              2020-2021
            </p>
            <div className="previous-events">
              {events_21
                .filter((items) => items.type === this.state.value)
                .map((item) => (
                  <Item {...item} />
                ))}
              ;
            </div>
            <p className="event-year" data-aos="fade-in" data-aos-once="true">
              2019-2020
            </p>
            <div className="previous-events">
              {events_20
                .filter((items) => items.type === this.state.value)
                .map((item) => (
                  <Item {...item} />
                ))}
              ;
            </div>
          </div>
        </div>
      );
  }
  render() {
    return (
      <div className="search">
        <div className="events-heading" data-aos="fade-in" data-aos-once="true">
          <h2>Events</h2>
        </div>
        <div className="events-type" style={{ marginLeft: "15px" }}>
          <span className="event-dropdown-text">Type : </span>
          <select
            id="type"
            onChange={this.handleChange}
            value={this.state.value}
            class="event-dropdown"
          >
            <option value="none" className="event-type">
              None
            </option>
            <option value="internal" className="event-type">
              Internal
            </option>
            <option value="external" className="event-type">
              External
            </option>
          </select>
        </div>
        <div>{this.renderElement()};</div>
      </div>
    );
  }
}

export default EventMain;
