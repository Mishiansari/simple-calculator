import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondName" },
    { message: "enter third number", type: "number", name: "thirdName" },
    { message: "enter fourth  number", type: "number", name: "fourthName" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//condition statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondName + answer.thirdName + answer.fourthName);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondName - answer.thirdName - answer.fourthName);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondName * answer.thirdName * answer.fourthName);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondName / answer.thirdName / answer.fourthName);
}
else {
    console.log("please select valid operator");
}
