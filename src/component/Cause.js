import React, { Component }  from 'react'
import { Input, Menu, Segment,Icon ,Divider, Header, Image} from 'semantic-ui-react'
const style1={
    color:'white'
 }
 const style2 = {
  fontSize: 50
}
const style3 = {
  fontSize: 20
}



class Cause extends React.Component{
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
          const { activeItem } = this.state

        return(
            
            
            <div>
                 <Header style={style2}as='h2'>
    <Icon name='question circle outline' />
    <Header.Content style={style2}>
      What cause poverty and inequality?
      <Header.Subheader style={style3}>3 causes are shown below</Header.Subheader>
    </Header.Content>
  </Header>
            <Menu pointing>
              <Menu.Item
                name='education'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='healthcare'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='family condition'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
             
            </Menu>
    
            <Segment style={style3}>
              <p>Firstly, the education is the key. Most of the poor have nearly no education. so that may make them be unskilled and lazy. Secondly, healthcare is also an important indicator as people who are weak have a lower possibility of finding a job. Thirdly, famliy condition affects it because people living in a poor family usually cannot enjoy many opportunities like education, job seeking, and so on.</p>
            </Segment>
          </div>
            
        )
    }
    
}
export default Cause