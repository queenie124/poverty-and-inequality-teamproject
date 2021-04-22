import React from 'react'
import { Tab ,Header, Icon } from 'semantic-ui-react'
const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane >Firstly, the corona-virus influences countryside regions in the world seriously because people there can hardly get contact with the information about the virus. As a result, they are less able to prevent from being infected and they have no idea about how serious the pandemic is now, so they may not aware it. Generally, the possibility for them to be infected is higher than people in urban areas. Then, they may lose their job and income.</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Secondly, wars affects as well, because as some regions like Syria have a higher frequency of wars, they have to use a large amount of government spending on their military. Additionally, the social disorder also affect people’s work and they may lose their jobs from it, so they are in the poverty.</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Thirdly, the climate change influence Sub-Saharan Africa and South Asia because these countries are mainly depend on their primary production like crops. Consequently, they cannot have a good harvest and profit.</Tab.Pane> },
  ]
  const style1={
     color:'white'
  }

class Global extends React.Component{
    render(){
        return(
            <div >
                  <Header as='h2'>
    <Icon style={style1}name='globe' />
    <Header.Content style={style1}>
      Global Perspective
      <Header.Subheader style={style1}>There are three main reasons for the dramatic increase in poverty and inequality these years.</Header.Subheader>
    </Header.Content>
  </Header>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
          </div>
            )
    }
    
}
export default Global 