import React, { Component } from "react";
import "../scss/filters.scss";

// temporarily hard coded for UI purposes
class FilterItems extends Component {
  render() {
    return (
      <div className="schedule-filters">
        <div className="control-wrapper">
          <select name="teamId" id="teamId" data-category="">
            <option data-val="All Teams">All Teams</option>
            <option data-val="Team A">Team A</option>
            <option data-val="Team B">Team B</option>
            <option data-val="Team C">Team C</option>
            <option data-val="Team D">Team D</option>
          </select>
        </div>
        <div className="control-wrapper">
          <select name="locationName" id="locationName">
            <option data-val="All Locations">All Locations</option>
            <option data-val="LeagueApps HQ">LeagueApps HQ</option>
            <option data-val="Other">Other</option>
            <option data-val="Random">Random</option>
          </select>
        </div>
        <div className="control-wrapper">
          <select name="itemType" id="itemType">
            <option data-val="Games & Events">Games & Events</option>
          </select>
        </div>
        <div className="control-wrapper">
          <select name="gameTypes" id="gameTypes">
            <option data-val="All Game Types">All Game Types</option>
          </select>
        </div>
        <div className="control-wrapper">
          <select name="gameStates" id="gameStates">
            <option data-val="All Game States">All Game States</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterItems;
