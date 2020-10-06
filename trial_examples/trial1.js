const brain = require('brain.js');
const net = new brain.NeuralNetwork({
    hiddenLayers: [3]
})

// data set 
const {colors, brightnesses} = require('../Data/data')

const trainingData = []

// colors.forEach((data, index) => {
//     trainingData.push({
//         input: brightnesses[index],
//         output: colors[index]
//     })
// });

for (let i = 0; i < colors.length; i++) {
    trainingData.push({
        input: colors[i], 
        output:brightnesses[i]
    })
}

// training the data set
const errorlog = net.train(trainingData, {
    log: (stat) => {
        // console.log(stat)
    }
})

//running the trained program
const program = net.run({
    red: 0.6
})

console.log(errorlog)
console.log(program);