export class Fighter {
    constructor(name, hp, attack, defense, speedAttack, speedDefense, speed) {
      this.name = name
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.speedAttack = speedAttack;
      this.speedDefense = speedDefense;
      this.speed = speed;
    }
  
    attack() {
      let result =
        Math.floor(Math.random() * this.attack) +
        Math.floor(Math.random() * this.speedAttack) +
        Math.floor(Math.random() * this.speed);
      //console.log(`Player A:${result}`);
      return result;
    }
  
    defenser() {
      let result =
        Math.floor(Math.random() * this.defense) +
        Math.floor(Math.random() * this.speedDefense) +
        Math.floor(Math.random() * this.speed);
      //console.log(`Player B:${result}`);
      return result;
    }
  }
  
  export class Fight {
    constructor(playerA, playerB) {
      this.playerA = playerA;
      this.playerB = playerB;
    }
  
    doAttack(turn_playerA = true) {
      let round = 0;
      let player_A_Attacked = null;
      let player_A_Defensed = null;
      let player_B_Attacked = null;
      let player_B_Defensed = null;
      while (this.playerA.hp > 0 && this.playerB.hp > 0) {
        console.log(`<<<<< round game =  ${++round}   >>>>>`);
  
        if (turn_playerA) {
          console.log("<<<<<<< A attack to B >>>>>>>");
          player_A_Attacked = this.playerA.attack; //Yanmega
          player_B_Defensed = this.playerB.defenser; //Onix
  
          if (player_A_Attacked >= player_B_Defensed) {
            let dmg = 10 + ((this.playerA.attack + this.playerA.speedAttack - this.playerB.defense - this.playerB.speedDefense)/10) + Math.floor(Math.random()*10)
            if (dmg <0) dmg = 0;
            this.playerB.hp = this.playerB.hp - dmg;
            console.log(`PlayerB HP = ${this.playerB.hp}`);
          } else {
            let dmg = 10 + ((this.playerB.attack + this.playerB.speedAttack - this.playerA.defense - this.playerA.speedDefense)/10) + Math.floor(Math.random()*10)
            if (dmg <0) dmg = 0;
            this.playerA.hp = this.playerA.hp - dmg;
            console.log(`PlayerA HP = ${this.playerA.hp}`);
          }
        } else {
          console.log("<<<<<<< B attack to A >>>>>>>");
          player_A_Defensed = this.playerA.defenser; //Onix
          player_B_Attacked = this.playerB.attack; //Yanmega
  
          if (player_B_Attacked >= player_A_Defensed) {
            this.playerA.hp = this.playerA.hp - 10;
            console.log(`PlayerA HP = ${this.playerA.hp}`);
          } else {
            this.playerB.hp = this.playerB.hp - 10;
            console.log(`PlayerB HP = ${this.playerB.hp}`);
          }
        }
        turn_playerA = !turn_playerA; // next time is turn B to attack to A
  
        if (this.playerA.hp <= 0) {
          console.log(`${this.playerB.name} won!`);
        } else if (this.playerB.hp <= 0) {
          console.log(`${this.playerA.name} won!`);
        }
      }
    }
    //console.log(match(a_HP, b_HP));
  }