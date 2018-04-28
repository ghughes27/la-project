import React, { Component } from "react";
// import Game from "./Game";
import { getTime, getMonthDay } from "./util";

import "../scss/schedule.scss";

class Schedule extends Component {
  render() {
    const { games, uniqueDays } = this.props;
    // let keys = Object.keys(uniqueDays);
    // console.log(keys);

    return (
      <div className="schedule-page">
        <div className="loading" />
        {games.map(game => {
          {
            /* rendering issues */
            /* {keys.forEach(key => */
          }
          return (
            <div className="schedule-container" key={game.gameId}>
              <h2 className="table-caption">{`${getMonthDay(
                game.startTime
              )}`}</h2>
              <div className="responsive-table-wrap">
                <table className="schedule-table align-left">
                  <thead>
                    <tr>
                      <th className="matchup">Matchup</th>
                      <th className="matchup" />
                      <th className="timezone">Time (ET)</th>
                      <th className="location">Location</th>
                    </tr>
                  </thead>
                  {/* <Game games={games} uniqueDays={uniqueDays} /> */}
                  <tbody>
                    <tr>
                      <td className="away">
                        <span className="team-name">{game.team1}</span>
                      </td>
                      <td className="home">
                        <div className="home-wrapper" data-home-text="at">
                          <span className="team-name">{game.team2}</span>
                        </div>
                      </td>
                      <td>
                        <span className="time">{getTime(game.startTime)}</span>
                      </td>
                      <td className="schedule-location">
                        <span>{game.locationName}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Schedule;
