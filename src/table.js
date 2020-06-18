import React, {Fragment} from "react";
import axios from "axios";



class Table extends React.Component {
    state = {
        users:[]
    };
    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
           this.setState({users:response.data});
        });
    }
    render(){
        return(
        <Fragment>
            <table className ="table">
                <tbody>
              {this.state.users.map(user => (
                  
                    <React.Fragment key={user.id}>
                       <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      
                     

                        </tr>
                    </React.Fragment>
                    
               ))}
               </tbody>
            </table>
            </Fragment>
       );

    }
    
}
export default Table;