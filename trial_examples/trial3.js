// decalring the training dataset

const trainingData = [
    [1,2,3,4,5], 
    [5,4,3,2,1]
]

const trainingData2 = [
    [5,6,7,8,9,10], 
    [10,9,8,7,6,5]
]

const brain = require('brain.js');
const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData2, {
    log: status => (console.log(status))
})

console.log(net.run([5,6]))
console.log(net.run([10,9]))