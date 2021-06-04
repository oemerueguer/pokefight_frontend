import tbm from './typeBoniMali'

export class Fighter {
    constructor(name, hp, attack, defense, specialAttack, specialDefense, speed, type) {
        this.name = name
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.speed = speed;
        this.type = type;
        this.spAttack = false;
        this.bm = 1;
        this.pokeValue = (this.attack + this.defense)*2/3 + (this.specialAttack + this.specialDefense)*1/3 + this.speed + this.hp
    }

    attackSum() {
        const randVal = Math.floor(Math.random() * 3)
        this.spAttack = randVal >= 2; //boolean 2/3 false, 1/3 true, if change also change pokeValue
        this.spAttack && console.log("special attack!")
        let result = this.spAttack
            ? Math.floor(Math.random() * (this.specialAttack + this.speed / 2) * this.bm)
            : Math.floor(Math.random() * (this.attack + this.speed / 2) * this.bm)
        return result;
    }

    defenseSum(spAttack) {
        spAttack && console.log("special defense!")
        let result = spAttack
            ? Math.floor(Math.random() * (this.specialDefense + this.speed / 2))
            : Math.floor(Math.random() * (this.defense + this.speed / 2));
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
        this.playerA.type.forEach(type => {
            // for each type that a pokemon has, it will get a bonus for every enemy type, that this type is strong against. The buff is applied to the attackSum.
            // e.g. Fletchinder (Fire, Flying) will get buffed 4x against Levanny (Bug, Grass) because each of Fletchinders types is strong against each of Leavanny's types.
            let typus = tbm.find(entry => entry.type === type);
            typus.bonus.forEach(bonus => {
                if (this.playerB.type.some(oppType => oppType === bonus)) this.playerA.bm *= 1.25
            })
            typus.malus.forEach(malus => {
                if (this.playerB.type.some(oppType => oppType === malus)) this.playerA.bm *= 0.80
            })
        })
        this.playerB.type.forEach(type => {
            let typus = tbm.find(entry => entry.type === type);
            typus.bonus.forEach(bonus => {
                if (this.playerA.type.some(oppType => oppType === bonus)) this.playerB.bm *= 1.25
            })
            typus.malus.forEach(malus => {
                if (this.playerA.type.some(oppType => oppType === malus)) this.playerB.bm *= 0.80
            })
        })

        while (this.playerA.hp > 0 && this.playerB.hp > 0) {
            console.log(`<<<<< round game =  ${++round}   >>>>>`);

            if (turn_playerA) {
                console.log(`Your ${this.playerA.name} attacks the enemy ${this.playerB.name}`);
                let player_A_AttackerValue = this.playerA.attackSum() + tirednessBonus;
                console.log(`AV: ${player_A_AttackerValue}`);
                let player_B_DefenderValue = this.playerB.defenseSum(this.playerA.spAttack);
                console.log(`AV: ${player_B_DefenderValue}`);
                // check if attack succeeds
                if (player_A_AttackerValue >= player_B_DefenderValue) {
                    let dmg = this.playerA.spAttack
                        ? 10 + Math.floor(((this.playerA.specialAttack - this.playerB.specialDefense) / 10 + (Math.random() * 10)) * this.playerA.bm)
                        : 10 + Math.floor(((this.playerA.attack - this.playerB.defense) / 10 + (Math.random() * 10)) * this.playerA.bm)
                        if (dmg < 5) {
                        dmg = 5
                        console.log("min dmg")
                    };
                    this.playerB.hp -= dmg;
                    if (this.playerB.hp < 0) this.playerB.hp = 0;
                    console.log(`The enemy ${this.playerB.name} suffered ${dmg} Damage and has now ${this.playerB.hp} HP.`);
                } else {
                    console.log(`The enemy ${this.playerB.name} evaded the attack.`)
                }
            } else {
                console.log(`The enemy ${this.playerB.name} attacks your ${this.playerA.name}`);
                let player_B_AttackerValue = this.playerB.attackSum() + tirednessBonus;
                console.log(`AV: ${player_B_AttackerValue}`);
                let player_A_DefenderValue = this.playerB.defenseSum(this.playerB.spAttack);
                console.log(`AV: ${player_A_DefenderValue}`);
                // check if attack succeeds
                if (player_B_AttackerValue >= player_A_DefenderValue) {
                    let dmg = this.playerB.spAttack
                        ? 10 + Math.floor(((this.playerB.specialAttack - this.playerA.specialDefense) / 10 + (Math.random() * 10)) * this.playerB.bm)
                        : 10 + Math.floor(((this.playerB.attack - this.playerA.defense) / 10 + (Math.random() * 10)) * this.playerB.bm)
                    if (dmg < 5) dmg = 5;
                    this.playerA.hp -= dmg;
                    if (this.playerA.hp < 0) this.playerA.hp = 0;
                    console.log(`Your ${this.playerA.name} suffered ${dmg} Damage and has now ${this.playerA.hp} HP.`);
                } else {
                    console.log(`Your ${this.playerA.name} evaded the attack.`)
                }
            }
            tirednessBonus += 1;
            turn_playerA = !turn_playerA; // switch attacker

            if (this.playerA.hp <= 0) {
                console.log(`The enemy ${this.playerB.name} won!`);
            } else if (this.playerB.hp <= 0) {
                console.log(`Your ${this.playerA.name} won!`);
                console.log(`Your score is ${Math.floor(this.playerB.pokeValue/this.playerA.pokeValue*1000)}`)
                alert(`Your ${this.playerA.name} won! Your score is ${Math.floor(this.playerB.pokeValue/this.playerA.pokeValue*1000)}.`)
            }
        }
    }
}