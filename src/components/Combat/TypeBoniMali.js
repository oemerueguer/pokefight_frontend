const tbm = [
    {
        type: "Bug",
        bonus: ["Dark", "Grass", "Psychic"],
        malus: ["Fairy", "Fighting", "Fire", "Flying", "Ghost", "Poison", "Steel"]
    },
    {
        type: "Dark",
        bonus: ["Ghost", "Psychic"],
        malus: ["Dark", "Fairy", "Fighting"]
    },
    {
        type: "Dragon",
        bonus: ["Dragon"],
        malus: ["Fairy", "Steel"]
    },
    {
        type: "Electric",
        bonus: ["Flying", "Water"],
        malus: ["Dragon", "Electric", "Grass", "Ground"]
    },
    {
        type: "Fairy",
        bonus: ["Dark", "Dragon", "Fighting"],
        malus: ["Fire", "Poison", "Steel"]
    },
    {
        type: "Fighting",
        bonus: ["Dark", "Ice", "Normal", "Rock", "Steel"],
        malus: ["Bug", "Fairy", "Flying", "Ghost", "Poison", "Psychic"]
    },
    {
        type: "Fire",
        bonus: ["Bug", "Grass", "Ice", "Steel"],
        malus: ["Dragon", "Fire", "Rock", "Water"] 
    },
    {
        type: "Flying",
        bonus: ["Bug", "Fighting", "Grass"],
        malus: ["Electric", "Rock", "Steel"]
    },
    {
        type: "Ghost",
        bonus: ["Ghost", "Psychic"],
        malus: ["Dark", "Normal"]
    },
    {
        type: "Grass",
        bonus: ["Ground", "Rock", "Water"],
        malus: ["Bug", "Dragon", "Fire", "Flying", "Grass", "Poison", "Steel"]
    },
    {
        type: "Ground",
        bonus: ["Electric", "Fire", "Poison", "Rock", "Steel"],
        malus: ["Bug", "Flying", "Grass"]
    },
    {
        type: "Ice",
        bonus: ["Dragon", "Flying", "Grass", "Ground"],
        malus: ["Fire", "Ice", "Steel", "Water"]
    },
    {
        type: "Normal",
        bonus: [],
        malus: ["Ghost", "Rock", "Steel"]
    },
    {
        type: "Poison",
        bonus: ["Fairy", "Grass"],
        malus: ["Ghost", "Ground", "Poison", "Rock", "Steel"]
    },
    {
        type: "Psychic",
        bonus: ["Fighting", "Poison"],
        malus: ["Dark", "Psychic", "Steel"]
    },
    {
        type: "Rock",
        bonus: ["Bug", "Fire", "Flying", "Ice"],
        malus: ["Fighting", "Ground", "Steel"]
    },
    {
        type: "Steel",
        bonus: ["Fairy", "Ice", "Rock"],
        malus: ["Electric", "Fire", "Steel", "Water"]
    },
    {
        type: "Water",
        bonus: ["Fire", "Ground", "Rock"],
        malus: ["Dragon", "Grass", "Water"]
    }
]

export default tbm;