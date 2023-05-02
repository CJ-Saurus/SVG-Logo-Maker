const fs = require('fs');
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter the text color you would like.",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "What color would you like the shape?",
    },
];

function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You've created an SVG Logo!");
    });
}

async function init() {
    console.log("Starting init");
    let svgString = "";
    const svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

    let user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Only 1-3 characters please.");
        return;
    }
    console.log("Text: [" + user_text + "]");

    let user_font_color = answers["text-color"];
    console.log("Font color: [" + user_font_color + "]");

    let user_shape_color = answers["shape-color"];
    console.log("Shape color: [" + user_shape_color + "]");

    let user_shape_type = answers["shape"];
    console.log("Shape = [" + user_shape_type + "]");

    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("You've selected Square shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("You've selected Circle shape");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("You've selected Triangle shape");
    }
    else {
        console.log("Invalid shape!");
    }
    user_shape.setColor(user_shape_color);

    const svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    console.log("Displaying shape:\n\n" + svgString);

    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);
}

init();