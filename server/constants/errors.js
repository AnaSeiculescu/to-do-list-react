export const ERROR_400 = {
    InvalidUsername: {
        errorCode: 1000,
        errorMessage: 'Username must be a string of 3 to 12 alphanumeric (a-z, A-Z, 0-9) characters.',
    },
    InvalidPassword: {
        errorCode: 1001,
        errorMessage: 'Password must be a string of 3 to 12 characters.',
    },
    PasswordMismatch: {
        errorCode: 1002,
        errorMessage: 'Password confirmation does not match the given password.',
    },
    UsernameExists: {
        errorCode: 1003,
        errorMessage: 'The username has already been registered.',
    },
    InvalidCredentials: {
        errorCode: 1010,
        errorMessage: 'Invalid username or password.',
    },
};
