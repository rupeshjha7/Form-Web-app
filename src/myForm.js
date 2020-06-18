import React from "react";


class MyForm extends React.Component {
    constructor(props) {
        console.log("Constructor method");
        super(props);
        this.state = {
            name: '',
            Password: ''
            
        };

    }
componentDidMount() {
        console.log("ComponentDidMount method");
    }
    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate method");
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate method");
        console.log("prev State", prevState);
        console.log("New State", this.state);

    }
    login()
    {
        console.warn (this.state)
     fetch("https://45.76.142.157:3000/api/v1/login" +this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                
            })
        })
    };
    render() {
        console.log("Render method");

        return (

<form className="mt-3" onSubmit={this.login}>
                <div className="form-group">
                    <h2>Login  Details</h2>
                </div>
            <div className="form-group">
                    <input type="text" name="user"
                    onChange={(e) => this.setState({name:e.target.value})} required 
                    className="form-control" placeholder="Enter Email..." />
                </div>
                <div className="form-group">
                    <input type="text" name="Password" 
                      onChange={(e) => this.setState({Password:e.target.value})} required 
                      className="form-control" placeholder="Enter Password..." />
                </div>
                
                <div className="form-group">
                    <input type="Login" onClick={() => {this.login()}} className="btn btn-primary" />
                </div>
            </form>
        )
    }
}
export default MyForm;