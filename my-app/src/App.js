import Users from "./Components/Card";
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
                loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      // document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav>
          <div className="box">
            <div className="row">
            <div className="column1">
              <img src="https://ci3.googleusercontent.com/mail-sig/AIorK4wDgjymT0K2TieyTMtml60CnEX33-RYx5RtqW5bjS4WWISmZGQ6LYRR7bq07zEWerw62ohTJko"
              class="image"/>
            
            </div>
            <div className="column2">
            <button onClick={this.updateState}>Get Users</button>
            </div>
            </div>
          </div>
        </nav>
        <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
	
export default App;