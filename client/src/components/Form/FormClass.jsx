import React from "react";
import { validateEmail, validatePassword } from '../../utils/utils/utils'

class FormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: { email: "", password: "", },
            errors: { emailError: "", passwordError: "", }
        };
    }


    /**
     * Set a specific object of the state 
     * 
     * @param {object} object object element of the state
     * @param {object} obj object with the changes
     */
    setObject(object, obj) {
        this.setState((prevState) => ({
            ...prevState,
            [object]: { ...prevState[object], ...obj }
        }))
    }


    /**
     * Set 'errors' state, every time the input changes.
     * 
     * @param {object} event - input's event 
     * @returns {void}
     */
    componentDidUpdate(_, prevState) {

        const { email, password } = this.state.forms;
        const { email: prevEmail, password: prevPassword } = prevState.forms;

        if (prevEmail !== email) {
            const obj = {
                emailError: (
                    !validateEmail(email)
                        ? "Enter a valid email"
                        : "")
            }
            this.setObject("errors", obj)
        }
        if (prevPassword !== password) {
            const obj = {
                passwordError: (
                    !validatePassword(password)
                        ? "Invalid password"
                        : ""
                )
            }
            this.setObject("errors", obj)
        }
    }


    /**
     * set forms state when the input changes.
     * 
     * @param {object} event 
     */
    onChange = (event) => {
        const { name, value } = event.target
        this.setObject("forms", { [name]: value })
    }



    /**
     * Run 'login'
     * 
     * @param {object} event to prevent default
     * @returns 
     */
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.forms);
    }

    render() {

        const { email, password } = this.state.forms;
        const { emailError, passwordError } = this.state.errors;

        return (
            <div>
                {/* Render description */}
                <h2>Please, enter your data here</h2>
                {/* Render form */}
                <form action="" onSubmit={this.handleSubmit}>
                    {/* Email form */}
                    <div>
                        <label htmlFor="">Email: </label>
                        <input
                            type="text"
                            value={email}
                            name="email"
                            onChange={this.onChange}
                        />
                    </div>
                    <p>{emailError}</p>

                    {/* Password form */}
                    <div>
                        <label htmlFor="">Password: </label>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={this.onChange}
                        />
                    </div>
                    <p>{passwordError}</p>

                    {/* Submit button */}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormClass;