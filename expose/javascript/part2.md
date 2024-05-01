1. prints 3, since i is a var it will persist outside the function block and there are 3 things in the array
2. prints 150, since it is the last element of array discounted
3. prints 150, since it is the final discounted price pushed to array.
4. [50,100,150], returns array discounted
5. error, i declared with let but return outside of function block
6. error, discountedPrice declared with let insdie function block
7. prints 150, as it is the final price of array and final price declared in same function block
8. [50,100,150], returns array discounted
9. errors before it gets to that, discounted is a const and the for loop tries to push. also i is declared with let outside scope of console.log
10. errors before it gets to that, discounted is a const and the for loop tries to push. That line would print 3 though since it is the array length
11. errors, discounted is a const and the for loop tries to push.
12. a. student.name, b. student['Grad Year'], c. student.greeting(), d. student['Favorite Teacher']['name], e. student['courseLoad'][0]
13. a. 32, the 2 is converted to string, b. 1, the 3 is converted to int, c. 3, the null is converted to 0, d. 3null, the null is converted to string, e. 4, true converted to 1, f. 0, false and null are converted to 0, g. 3undefined, undefined converts to string, h. 'NaN', 3 converted to int
14. a. true, 2 is converted to int, b. strings are compared by chars, c. true, == equates loosely so a conversion is made to int, d. false, strict equality strictly equates, e. false, true converts to 1 which is not 2, f. true, Boolean(2) is true
15. == performs type cohersion while === does not.
16. in part2 16 js
17. newArr created as blank array -> for each array element, push element*2 to the blank array -> return the array. Overall, this returns an array of 2x the values. i.e. [2,4,6].
18. in js file
19. 1, 4, 3, 2 (with newlines between them for each console output)