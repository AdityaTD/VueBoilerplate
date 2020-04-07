module.exports = {
    prompts: {
        name: {
            type: "string",
            required: true,
            message: "Project Name"
        },
        description: {
            type: "string",
            required: false,
            message: "Project Description",
            default: "My Awesome Project"
        },
        author: {
            type: "string",
            message: "Author"
        }
    },
    completeMessage: "Project Complete!"
};