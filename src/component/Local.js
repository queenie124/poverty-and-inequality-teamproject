import React from 'react'
import { Icon ,Divider, Header, Image, Segment} from 'semantic-ui-react'

  const style1={
     color:'white'
  }

class Local extends React.Component{
    render(){
        return(
            <div >
                  <Header as='h2'>
    <Icon style={style1}name='chart bar' />
    <Header.Content style={style1}>
      Local Perspective
      <Header.Subheader style={style1}>situations in America and Africa.</Header.Subheader>
    </Header.Content>
  </Header>
  <Segment>
    <Header as='h3'>Africa Countries</Header>
    <p>In some African countries, there is mainly absolute poverty which means people cannot maintain thieir basic life needs. what's worse, they occupy nearly 60 percents of the poverty in the world. Because their whether condition is extreme so they cannot develop their primary production. Also, they are live in the poverty trap which means it is hard for them to jump out of the trap. If one generation was poor, they cannot get a high-quality education and it may be hard for them to get a job which means they have no enough money to give their children a good education. that is a circulation.</p>

    <Divider section />

    <Header as='h3'>America</Header>
    <p>In the US, there is mainly relative poverty, and there are some correlations. First of all, single parent families occupied most of the poverty which made up about 40 percent of the poverty. Secondly, women are also a big portion of the poverty mainly because they are less educated and skilled. However, there are some subsidy given by their government already so there is less needs for charity, and the poor can sustain their essential life. </p>
  </Segment>
          
          </div>
            )
    }
    
}
export default Local 