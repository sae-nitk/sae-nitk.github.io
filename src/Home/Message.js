import React, { useEffect } from "react";
import AOS from "aos";
import './Message.css';

function Message() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    return (
      <div className="message" data-aos="fade-in">
        <div className="heading">
          <h3 className="message_head" >
            Message
          </h3>
        </div>
        <div className="message-text">
          <h3>Work in Progress</h3>
        </div>
      </div>
    );
  }
  
  export default Message