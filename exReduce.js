const pets = [{
        type: "dog",
        name: "bolinha",
        age: 15,
        weight: 30
    },
    {
        type: "cat",
        name: "mingal",
        age: 6,
        weight: 2
    },
    {
        type: "dog",
        name: "rex",
        age: 4,
        weight: 5
    },
    {
        type: "cat",
        name: "marrom",
        age: 2,
        weight: 1
    },
    {
        type: "fish",
        name: "gulp",
        age: 1,
        weight: 0.01
    },
    {
        type: "horse",
        name: "pé de pano",
        age: 1,
        weight: 0.01
    }
]

const totalWeight0 = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeight0) //38.019999999999996

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })

console.log(totalWeight) //{ totalAge: 29, totalWeight: 38.019999999999996 }