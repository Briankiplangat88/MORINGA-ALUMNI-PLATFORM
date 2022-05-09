import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/alt/1116431270697766912/-NfnQHvh_400x400.jpg" />
          </div>
          <h4> Marial Lugare</h4>
          <p>Full stack web developer</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            This is a Moringa school alumni platform,we help you connect with former graduates
            link you up with mentors and fundraise for projects that accelerate alumni meet ups and projects.
          </div>
        </div>
      </div>
    );
  }
}
