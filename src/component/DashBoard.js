import React,{ Component } from 'react';

class DashBoard extends Component{
    

    render(){
        const { history } = this.props;
        return(
            <div>
                <div style={{color:'green',background:'Red'}}>DashBoard</div>
                <br />
                <button onClick={() => history.push("/Register")}>ReactRegister</button><br />
                <button onClick={() => history.push("/Login")}>ReactLogin</button>
                {/* <button onClick={() => history.push("/Dashboard")}>DashBoard</button> */}
            </div>
        )
    }
}
export default DashBoard