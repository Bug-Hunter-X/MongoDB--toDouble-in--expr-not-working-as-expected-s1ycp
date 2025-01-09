# MongoDB $toDouble in $expr Unexpected Behavior

This repository demonstrates an unexpected behavior when using the `$toDouble` operator within the `$expr` operator in a MongoDB aggregation pipeline.

The issue occurs when attempting to convert string representations of numbers to doubles for comparison.  The aggregation fails to correctly perform the conversion leading to inaccurate results.

The `bug.js` file contains the code that reproduces the problem, while `bugSolution.js` offers a solution.

## Reproduction

1. Clone this repository.
2. Ensure you have MongoDB installed and running.
3. Insert some documents into your MongoDB collection with a `price` field containing strings representing numbers.
4. Run the code in `bug.js`. The result will be unexpected.

## Solution

The `bugSolution.js` file provides a corrected approach that handles the conversion of string prices to numbers reliably. 

## Contributing

Contributions are welcome. Please open an issue or submit a pull request if you encounter any problems or have suggestions for improvement. 