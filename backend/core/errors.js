class NotFoundError extends Error {
    constructor(message = "Entity Not Found") {
        super(message);
        this.name ="NotFoundError";
    }
}

class ValidationError extends Error {
    constructor(message = "Invalid Input") {
        super(message);
        this.name = "ValidationError";
    }
}

module.exports = {
    NotFoundError,
    ValidationError
}