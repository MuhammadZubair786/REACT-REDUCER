import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {set_data} from './Store/action'

class App extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div className="App">

        <button onClick={()=>this.props.set_data("YA DATA APP SA JYA RHA HA")}>On Click</button>
       
      </div>
    );

  }
 
}

const mapStateToProps = (state) =>({
  name: state.auth.username,
  email:state.auth.email,
  app_name:state.app.app_name
})

const mapDispatchToProps=(dispatch)=>({

  set_data:(data) => dispatch(set_data(data))
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
