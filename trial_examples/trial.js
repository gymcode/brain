const brain = require('brain.js');

const net = new brain.NeuralNetwork({hiddenLayers: [3]});

// declaringhte array 
const training_data = [
    {input: [0,0], output: [0]},
    {input: [0,1], output: [1]},
    {input: [1,0], output: [1]},
    {input: [1,1], output: [1]}
]

// training the array data
//during the training, forward propergation and backward propagaation is done
net.train(training_data, {
    log: (TrainingError) => {console.log(TrainingError)}, 
    logPeriod: 10
}); 

const output = net.run([0,0])
const output1 = net.run([0,1])
const output2 = net.run([1,0])
const output3 = net.run([1,1])

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);