import React,{ Component } from 'react';

class ReactLogin extends Component{



    
    render(){
        const { history } = this.props;
        return(
            <div>
                                <div style={{color:'blue',background:'green'}}>ReactLogin</div> <br />
                <button onClick={() => history.push("/Register")}>ReactRegister</button><br />
                {/* <button onClick={() => history.push("/Login")}>ReactLogin</button> */}
                <button onClick={() => history.push("/Dashboard")}>DashBoard</button>
            </div>
        )
    }
}
export default ReactLogin