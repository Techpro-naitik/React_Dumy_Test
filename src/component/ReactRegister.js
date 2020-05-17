import React,{ Component } from 'react';

class ReactRegister extends Component{
  
    
    render(){
        const { history } = this.props;
        return(
            <div>
                <div style={{color:'red',background:'blue'}}>ReactRegister</div><br />
                <button onClick={() => history.push("/Login")}>ReactLogin</button><br />
                <button onClick={() => history.push("/Dashboard")}>DashBoard</button>
            </div>
        )
    }
}
export default ReactRegister;