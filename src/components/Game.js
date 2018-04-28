import React, { Component } from "react";
import { getTime, standardDate } from "./util";

class Game extends Component {
  render() {
    const { games, uniqueDays } = this.props;
    return (
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
        </tr>;
      </tbody>
    );
  }
}

export default Game;
