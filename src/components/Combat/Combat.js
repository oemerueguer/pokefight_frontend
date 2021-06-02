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

    attacksum() {
        let result =
            Math.floor(Math.random() * this.attack) +
            Math.floor(Math.random() * this.speedAttack) +
            Math.floor(Math.random() * this.speed);
        //console.log(`Player A:${result}`);
        return result;
    }

    defensesum() {
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

    startFight(turn_playerA = true) {
        let round = 0;
        let tirednessBonus = 0;
        while (this.playerA.hp > 0 && this.playerB.hp > 0) {
            console.log(`<<<<< round game =  ${++round}   >>>>>`);

            if (turn_playerA) {
                console.log(`Your ${this.playerA.name} attacks the enemy ${this.playerB.name}`);
                let player_A_AttackerValue = this.playerA.attacksum() + tirednessBonus;
                console.log(`AV: ${player_A_AttackerValue}`);
                let player_B_DefenderValue = this.playerB.defensesum();
                console.log(`AV: ${player_B_DefenderValue}`);
                // check if attack succeeds
                if (player_A_AttackerValue >= player_B_DefenderValue) {
                    let dmg = 10 + Math.floor((this.playerA.attack + this.playerA.speedAttack - this.playerB.defense - this.playerB.speedDefense) / 10 + (Math.random() * 10))
                    if (dmg < 5) dmg = 5;
                    this.playerB.hp -= dmg;
                    console.log(`The enemy ${this.playerB.name} suffered ${dmg} Damage and has now ${this.playerB.hp} HP.`);
                } else {
                    console.log(`The enemy ${this.playerB.name} evaded the attack.`)
                }
            } else {
                console.log(`The enemy ${this.playerB.name} attacks your ${this.playerA.name}`);
                let player_B_AttackerValue = this.playerB.attacksum() + tirednessBonus;
                console.log(`AV: ${player_B_AttackerValue}`);
                let player_A_DefenderValue = this.playerB.defensesum();
                console.log(`AV: ${player_A_DefenderValue}`);
                // check if attack succeeds
                if (player_B_AttackerValue >= player_A_DefenderValue) {
                    let dmg = 10 + Math.floor((this.playerB.attack + this.playerB.speedAttack - this.playerA.defense - this.playerA.speedDefense) / 10 + (Math.random() * 10))
                    if (dmg < 5) dmg = 5;
                    this.playerA.hp -= dmg;
                    console.log(`Your ${this.playerA.name} suffered ${dmg} Damage and has now ${this.playerA.hp} HP.`);
                } else {
                    console.log(`Your ${this.playerA.name} evaded the attack.`)
                }
            }
            tirednessBonus += 1;
            turn_playerA = !turn_playerA; // switch attacker

            if (this.playerA.hp <= 0) {
                console.log("Player B won!");
            } else if (this.playerB.hp <= 0) {
                console.log("Player A won!");
            }
        }
    }
    //console.log(match(a_HP, b_HP));
}