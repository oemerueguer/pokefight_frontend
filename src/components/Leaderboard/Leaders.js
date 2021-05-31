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
          <span>
            <img className="PokemonPicture" alt="nkB" />
          </span>
          <span className="leaderBoardTitle-item">Pokemon</span>
          <span className="leaderBoardTitle-item">Wins</span>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
