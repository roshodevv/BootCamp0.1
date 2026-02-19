// Problem Description – Sum of Two Promises

// You are given two Promises that each resolve to numeric values. 
// Your task is to return a new Promise that resolves to the sum of these two numbers. 
// Both Promises should be executed in parallel using Promise.all to avoid unnecessary waiting.


async function sumPromises(p1, p2) {  // since async -> automaticall returns Promise !! 
        try{
            // Run both the promises using Promise.all
            let [a, b] = await Promise.all([p1, p2]);

            // Add both the values
            // return the sum 
            return a+b;
        }
        catch(err){
            return new Error("error");
        }
}

module.exports = sumPromises;

// PASSED 