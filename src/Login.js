import React from 'react'
import'./Login.css'
class Login extends React.Component {

    state = {
        accno: '',
        password: ''
    }


    accnoChange = (event) => {
        this.setState({
            accno: event.target.value
        })

    }
    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

handleSubmit=(event)=>{
    alert("AccountNumber:"+this.state.accno)
    alert("password:"+this.state.password)
}

    render() {
       
        return <div className="container">
             <h1>Welcome to SBI</h1>
             <form onSubmit={this.handleSubmit}>
            <div class="mb-3">
        <label htmlFor="accno"><b>Account number:</b>
        <input onChange={this.accnoChange}  type="text"name="accno" className="form-control"/> 
        </label></div>
        <div class="mb-3">
        <label><b>Password:</b>
        <input onChange={this.passwordChange} type="text"name="accno" className="form-control"/></label> </div>

        <button type="submit" class="btn btn-primary" value="Submit">login</button> 
        </form>

        </div>
        

    }
}
export default Login;