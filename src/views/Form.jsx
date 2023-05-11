import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: { email: "", password: "", },
            errors: { emailError: "", passwordError: "", }
        };
    }
    setForm({ name, value }) {
        this.setState((prevState) => ({
            ...prevState,
            forms: { ...prevState.forms, [name]: value }
        }))
    }
    setErrors(errors) {
        this.setState((prevState) => ({
            ...prevState,
            errors: { ...prevState.errors, ...errors }
        }))
    }
    /**
     * Check the input and set 'errors' state.
     * 
     * @param {object} event - input's event 
     * @returns {void}
     */
    onChange = (event) => { this.setForm(event) }

    componentDidUpdate(prevProps) {
        if (prevProps.forms !== this.props.forms) {
            const { email, password } = this.props.forms
            email.length ?
                this.setErrors({ emailError: "Enter a valid email" }) : 
                this.setErrors({ emailError: "" }) 
        }
    }
    // componentWillReceiveProps = (nextProps) => {
    //     if (nextProps.position !== this.props.position) {
    //         this.moveMap(nextProps.position)
    //     }
    // }
    render() {

        // Access nested state properties

        const { email, password } = this.state.forms;
        const { emailError, passwordError } = this.state.errors;

        return (
            <form action="">
                <div>
                    <label htmlFor="">EMAIL</label>
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={this.onChange}
                    />
                </div>
                <p>{emailError}</p>
                <div>
                    <label htmlFor="">PASSWORD</label>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={this.onChange}
                    />
                </div>
                <p>{passwordError}</p>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;