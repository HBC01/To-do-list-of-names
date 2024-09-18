#! /usr/bin/env node
import inquirer from "inquirer";
let Arry = [];
let condition = true;
while (condition) {
    let Friend = await inquirer.prompt([
        {
            message: "Select the option that you want?",
            type: "list",
            name: "Chose",
            choices: ["addname", "updatename", "viewlist", "deletename", "exit"],
        },
    ]);
    if (Friend.Chose === "addname") {
        let add = await inquirer.prompt([
            { message: "Add name", type: "input", name: "add", validate: function (input) {
                    if (input.trim() == "") {
                        return "plz leave non empty";
                    }
                    return true;
                }
            },
        ]);
        if (add.add.trim() !== "") {
            Arry.push(add.add);
            Arry.forEach(add => console.log(add));
        }
    }
    if (Friend.Chose === "updatename") {
        let update = await inquirer.prompt([
            {
                message: "replaced name",
                type: "list",
                name: "update",
                choices: Arry.map((item) => item),
            },
        ]);
        let addnew = await inquirer.prompt([
            { message: "update name", type: "input", name: "add" },
        ]);
        let newupdate = Arry.filter((val) => val !== update.update);
        Arry = [...newupdate, addnew.add];
    }
    if (Friend.Chose === "viewlist") {
        Arry.forEach(add => console.log(add));
    }
    if (Friend.Chose === "deletename") {
        let deletename = await inquirer.prompt([
            {
                message: "Delete the name",
                type: "list",
                name: "delete",
                choices: Arry.map((item) => item),
            },
        ]);
        let newupdate = Arry.filter((val) => val !== deletename.delete);
        Arry = [...newupdate];
        Arry.forEach(add => console.log(add));
    }
    if (Friend.Chose === "exit") {
        let exit = await inquirer.prompt([
            {
                message: "Press ENTER to exit",
                type: "input",
                name: "exit",
            },
        ]);
        condition = false;
        console.log("Programme Ended");
    }
}
