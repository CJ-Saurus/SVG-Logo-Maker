const fs = require ("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        description: "text",
        message: "Enter up to 3 characters."
    },
    {
        type: "input",
        description: "text-color",
        message: "What color would you like the letters?"
    },
    {
        type: "list",
        description: "shape",
        message: "What shape would you like to use?",
        choices: ["square", "circle", "triangle"],
    },
    {
        type: "input",
        description: "shape-color",
        message: "What color would you like the shape?"
    },

]