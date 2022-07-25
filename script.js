let submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

console.log(submissions);




function addSubmission(array, newName, newScore, newDate) {
    array.push({
        name: newName, 
        score: newScore, 
        date: newDate,
        passed: newScore >= 60,
    });
}

addSubmission(submissions, "Allie", 80, "2022-07-19");

console.log(submissions);




const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};



//Examples
const namesAreEqual = function (name1, name2) {
    return name1 === name2;
}

const nameEval = function (element, name) {
    return element.name === name;
}

const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex((element) => {
        return name === element.name;
    });
    deleteSubmissionByIndex(array, index); // don't need to use array.splice since it was already done prior but you can if you want
};

deleteSubmissionByName(submissions, "Allie");
console.log(submissions);



const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};

editSubmission(submissions, 1, 40);
console.log(submissions);




function findSubmissionByName(array, name) {
    return array.find((element) => {
        return name === element.name;
    });
}

console.log(findSubmissionByName(submissions, "Jane"));



function findLowestScore(array) {
    let lowest = array[0];

    array.forEach((thing) => {
        if (thing.score < lowest.score) {
            lowest = thing;
        }
    });
    
    return lowest;
}

console.log(findLowestScore(submissions));




function findAverageScore(array) {
    let sum = 0;

    for (const thing of array) {
        sum += thing.score;
    }

    return sum / array.length;
}

console.log(findAverageScore(submissions));




const filterPassing = (array) => {
    return array.filter((thing) => {
        return thing.passed;
    });
};

console.log(filterPassing(submissions));



const filter90AndAbove = (array) => {
    return array.filter((thing) => {
        return thing.score >= 90;
    });
};

console.log(filter90AndAbove(submissions));


//Extended challenge

const createRange = (start, end) => {
    let num = start;
    const range = [];

    while(num <= end) {
        range.push(num);
        num++;
    }

    return range;
};

console.log(createRange(2,5));



const countElement = (array) => {
    let counts = {};

    for (const thing of array) {
        if (counts[thing]) {
            counts[thing] += 1;
        } else {
            counts [thing] = 1
        }
    }
};

console.log(countElements(["a", "b", "a", "c", "a", "b"]));