import "./Leaders.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  let [leader, setLeader] = useState(null);

  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  const fetchLeaderBoard = async () => {
    await Axios.get(
      `https://afternoon-citadel-92130.herokuapp.com/game/leaderboard`
    )
      .then((response) => console.log(response))
      .then((response) => setLeader(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="leaderListing">
        <div className="leaderHeader">
          <h2>Leaderboard</h2>
        </div>
        <div class="leaderBoardTitle">
          <span className="leaderBoardTitle-item">#Rank</span>
          <span className="leaderBoardTitle-item">Player</span>
          <span className="leaderBoardTitle-item">Pokemon</span>
          <span className="leaderBoardTitle-item">Wins</span>
        </div>
        {leader != null
        ? leader.map(() => {
            <div className="leaderboard">
              <span className="leaderBoardTitle-item">{leader._id}</span>
              <span className="leaderBoardTitle-item">Player</span>
              <span className="leaderBoardTitle-item">Pokemon</span>
              <span className="leaderBoardTitle-item">Wins</span>
              </div>
        
          }): 'No scoring available'}
      </div>
    </>
  );
};

export default Leaderboard;
