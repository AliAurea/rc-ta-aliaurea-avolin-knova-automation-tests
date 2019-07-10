export class SelfServiceLoginPageConstant {
    static get testData() {
        return {
            userNameTxt: 'User1',
            passwordTxt: 'defaultPassword',
            firstNameTxt: 'Default firstName',
            lastNameTxt: 'Default lastName',
        };
    }

    static get elementNames() {
        return {
            username: 'Username',
            password: 'Password',
            login: 'Login',
            logout: 'Logout',
            saveLogin: 'saveLogin',
            selfServiceLogin: 'Self-Service Login',
            resetButton: 'Reset',
            registerNow: 'Register Now',
            customerMicrosite: 'Customer Microsite',
            submit: 'Submit',
            registeringMsg: 'Thank you for registering',
            forgotPassword: 'Forgot your password or user name?',
            forgotPassHeader: 'Forgot Password',
            temporaryPassword: 'Temporary password is sent to',
        };
    }

    static get attributes() {
        return {
            id: {
                username: 'username',
                password: 'password',
                login: 'Login',
            },
        };
    }

    static get messages() {
        return {
            loginError: 'Login Error! Ensure your user name and password are correct and try again.',
        };
    }

    static get customerMicrosite() {
        return {
            userNameTxt: 'userName',
            passwordTxt: 'password',
            confirmPasswordTxt: 'cpassword',
            firstNameTxt: 'firstName',
            lastNameTxt: 'lastName',
            emailTxt: 'email',
        };
    }
}
