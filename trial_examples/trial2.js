const {
    restaurants
} = require("../Data/data");
const brain = require('brain.js');
const net = new brain.NeuralNetwork({
    hiddenLayers: [3]
})

// todo
// input : day (monday or tuesday....)
// output : {restaurant}

const trainingData = [];

for (const restaurantName in restaurants) {
    const daysOfWeek = restaurants[restaurantName]

    // passing both input and output into the empty array 
    trainingData.push({
        input: {
            [daysOfWeek]: 1
        },
        output: {
            [restaurantName]: 1
        }
    })
}

const errorlog = net.train(trainingData, {
    log: (error) => {
        // console.log(error)
    }
})

function retaurantForDay(daysOfWeek){
    const result = net.run({[daysOfWeek]: 1})
    let HighestProb = 0;
    let HighesRestaurant = ''
    for (const restaurantName in result) {
       if (result[restaurantName] > HighestProb) {
        HighestProb = result[restaurantName]
        HighesRestaurant = restaurantName   
       }
    }

    return HighesRestaurant
}

console.log(retaurantForDay('Wednesday'))
