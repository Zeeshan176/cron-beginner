module.exports = {
    hello: {
        frequency: "* * * * *",
        handler: "handlers/sayhello"
    },
    goodbye: {
        frequency: "* * * * *",
        handler: "handlers/saygoodbye"
    },
    task: {
        frequency: "* * * * *",
        handler: "handlers/task"
    }
}