/**
Problem Description
We need a function that will take an array of values and will return two unique entries that sum to a specified value. 
The pseudo function signature would be as follows.

findPair(array values, int desired_sum) : array?

The function returns the pair of values if found, if not it returns null.

Additional Conditions
This data is coming straight from a user so it has not been validated. 
The following conditions must be verified by your code. If the data is determined to be invalid, return null.
The array must not contain anything other than integers or strings that can be parsed as integers
All array values must be greater than 0
All array values must unique
If there are multiple pairs that when summed together equal the desired_sum, return the pair that contains the smallest value. 
(e.g. [1,2,3,4] with desired_sum 5 would return [1,4] and not [2,3] since 1 < 2)
The returned pair must be in the format [smaller_value, greater_value]
When we expose this functionality to the user, we expect array lengths to be in the hundreds of thousands, if not bigger.
Examples
[2,5,1,3,4,6,7] with desired_sum 8 would return [1,7]
[3,3,5,6,7] with desired_sum 11 would return null
[4,2,8,25] with desired_sum 26 would return null

Expected Solution
A solution can be coded quite quickly, but this is not the desired result. Try to optimize your approach 
and be ready to discuss your code and how you came up with any optimizations.
Use git init and commit your changes locally with comments before sending the zipped folder to us
Be ready to possibly run your code during the followup.
The solution can be written in any programming language.
While we want this to run quickly, we are also very concerned with the amount of memory each findPair process will take. 
*/

// solution requires us to store multiple solutions
function findPair(array, desiredSum){
//The following conditions must be verified by your code. If the data is determined to be invalid, return null.

}

//All array values must unique
let example = [1,2,3,4,5]
findPair()
//The array must not contain anything other than integers or strings that can be parsed as integers
example = [1,2,3,4,5]
findPair()
//All array values must be greater than 0
example = []
findPair()

//If there are multiple pairs that when summed together equal the desired_sum, return the pair that contains the smallest value. 
// (e.g. [1,2,3,4] with desired_sum 5 would return [1,4] and not [2,3] since 1 < 2)
// The returned pair must be in the format [smaller_value, greater_value]
example = []
findPair()