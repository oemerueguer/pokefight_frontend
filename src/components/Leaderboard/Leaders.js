import "./Leaders.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const Arr = [];
console.log(Arr);

const Leaderboard = () => {
  const [leader, setLeader] = useState([]);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  const fetchLeaderBoard = async () => {
    await Axios.get(
      `https://afternoon-citadel-92130.herokuapp.com/game/leaderboard`
    )
      .then((response) => setLeader(response.data))
      .catch((error) => console.log(error));

  };

  const playerScore = (playerName) => {
    playerName.sort((a,b) => b - a)
  }

 {/* const compareScore = () => { 
  {/*}  score.sort(a, b) = b.score - a.score
  }
 const compareScore = (leader) => {
    listing.score.sort(a,b) =>{ b.score - a.score}
 }
 const compareScore = (leaderboard) 
leader.sort(a,b) = b.score - a.score */}
console.log(Arr.sort((a,b) => b - a))

  return (
    <>
      <div className="leaderListing">
        <div className="leaderHeader">
          <h2>Leaderboard</h2>
        </div>
        <div class="leaderBoardTitle">
          <span className="leaderBoardTitle-item">#</span>
          <span className="leaderBoardTitle-item">Player</span>
          <span className="leaderBoardTitle-item">Pokemon</span>
          <span className="leaderBoardTitle-item">Opponent</span>
          <span className="leaderBoardTitle-item">Rounds</span>
          <span className="leaderBoardTitle-item">Score</span>
        </div>
       {leader? leader.map((listing) =>{
       /*  console.log(listing.score)
         const listingScore = listing.score
         console.log(listingScore)
         const finalArr = []
         finalArr.push(listingScore)
         console.log(finalArr) */

          return(
          <>
            <div className="leaderBoard">
            <span className="leaderBoardTitle-item">
              {leader.indexOf(listing) + 1}
            </span>
            <span className="leaderBoardTitle-item leader-listing">{listing.playerName}</span>
            <span className="leaderBoardTitle-item leader-listing">{listing.firstPokemon}</span>
            <span className="leaderBoardTitle-item leader-listing">{listing.secondPokemon}</span>
            <span className="leaderBoardTitle-item leader-listing">{listing.rounds}</span>
            <span className="leaderBoardTitle-item leader-listing"onChange={playerScore}>{listing.score}</span>
          </div>
            </>
          )
        }) :"No Scoring available"} 
    

      </div>
    </>
  );
};

export default Leaderboard;
