'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
        // write your code here
        let newArr = [];
        newArr = arr.filter(odd => odd%2)
        return newArr
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
        // write your code here
        let newArr = [];
        newArr = arr.filter(x => (x.yearsOfExperience >4) && (x.tech == 'JS'))
        newArr.map( x =>{
          let full = x.firstName + ' ' + x.LastName;
          const obj = x;
          const startAdded = {'fullName':full , ...obj};
          delete startAdded.firstName;
          delete startAdded.LastName;
          delete startAdded.yearsOfExperience;
          console.log(startAdded)
          newArr = [];
          newArr.push(startAdded)
        })
        return newArr;
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    // write your code here
    let newArr = arr.filter( x => (x.includes('a')) ||  x.includes('e')||  x.includes('i')||  x.includes('o')||  x.includes('u'))
    const a = arr;
    const b = newArr;
    const c = a.filter(az => !b.includes(az));
    return c;
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let newArr = [];
    newArr = arr1.filter(az => !arr2.includes(az))
    let newArr2 = arr2.filter(az => !arr1.includes(az))
    let newArr3 = newArr.concat(newArr2)
    return newArr3;
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

