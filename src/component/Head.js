import React from 'react'
import {  Header, Icon, Image  } from 'semantic-ui-react'

const headstyle={
 color:'white'

}

const Bgstyle = {
  //minHeight: '400px',
  borderRadius: '0'
}


class Head extends React.Component{
    render(){
        return(
            <div style={Bgstyle}>
            <Header style={headstyle}  as='h1' icon textAlign='center'>
            <Icon style={headstyle}  name='heartbeat' circular />
            <Header.Content style={headstyle} >POVERTY AND INEQUALITY</Header.Content>
          </Header>
          <Header as='h3' style={headstyle} textAlign='center'>
    Please help to solve the poverty and inequality!
  </Header>
  <Header as='h3' style={headstyle} dividing textAlign='center'>
    'what are effects of individuals' help to the poverty and inequality?'
  </Header>
          </div>
            )
    }
    
}
export default Head 