import React, { Component } from "react";
import fetch from "fetch-jsonp";

import Header from "./components/Header";
import Schedule from "./components/Schedule";
import FilterItems from "./components/FilterItems";
import { standardDate } from "./components/util";

import "./scss/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.state = {
      games: [],
      uniqueDays: {},

      // categories currently selected
      // setState on FilterItem by using onChange(e) {}
      teams: "All Teams",
      locations: "All Locations",
      itemType: "Games & Events",
      gameType: "All Game Types",
      gameState: "All Game States"
    };
  }

  componentDidMount() {
    this.loadData();
  }

  // fetch the JSONP data
  loadData() {
    const key = "118258846690556242966";
    const programID = "587440";
    const scheduleRequest = `https://api.lapps-dev1.com/v1/sites/1/programs/${programID}/schedule?la-api-key=${key}`;
    fetch(scheduleRequest)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // create object whose keys are unique
        // days and values are arrays of games
        let uniqueDays = {};
        const days = data.games.forEach(game => {
          // transform startTime to ISOString and use as object identifier key to filter tables based on day of game
          if (!uniqueDays[standardDate(game.startTime)]) {
            uniqueDays[standardDate(game.startTime)] = [game];
          } else {
            uniqueDays[standardDate(game.startTime)].push(game);
          }
        });

        // log for debugging
        console.log(data.games);
        console.log(uniqueDays);

        this.setState({ uniqueDays });
        this.setState({ games: data.games });
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  render() {
    const { games, uniqueDays } = this.state;

    return (
      <div className="app">
        <Header />
        <main className="pane-main">
          <div className="main-container">
            <div className="main-content">
              <div className="col">
                <div className="schedule-header">
                  <h1>Schedule - 2018</h1>
                </div>
                <strong className="league">
                  <a href="#">My Test Program</a>
                </strong>
                <FilterItems />
                <Schedule games={games} uniqueDays={uniqueDays} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
