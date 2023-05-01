const fs = require ("fs");
const inquirer = require("inquirer");

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
        type: "checkbox",
        description: "shape",
        choices: ["square", "circle", "triangle"],
    },
    {
        type: "input",
        description: "shape-color",
        message: "What color would you like the shape?"
    },

]