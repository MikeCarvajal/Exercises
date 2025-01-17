//function para sacar la suma y total / para el numero de array

function getAverage(scores) {
    let total = 0;
    for (const score of scores) {
        total = total + score;
    }
    const average = total / scores.length;
    return average;
}



console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/*Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
Tips

Remember that you learned about conditional statements (if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).*/

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

/* para saber cual aprueba o no*/
function hasPassingGrade(score) {
    const grade = getGrade(score)
    if (grade != 'F'){
      return true;
    }else{
      return false;
    }
  
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

/*function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {

  // Calculate the class average
  const classAverage = getAverage(totalScores);

  // Get the student's grade
  const studentGrade = getGrade(studentScore);

  // Determine if the student passed
  const passed = hasPassingGrade(studentScore);

  // Construct the message
  if (passed) {
    return "Class average: " + classAverage + 
           ". Your grade: " + studentGrade + 
           ". You passed the course.";
  } else {
    return "Class average: " + classAverage + 
           ". Your grade: " + studentGrade + 
           ". You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));*?*/