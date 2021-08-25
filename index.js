const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const add = (prev, current) => prev + current;

let totalBatteries = batteryBatches.reduce(add);
