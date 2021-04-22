import React from'react'
import Head from './component/Head'
import { Segment } from 'semantic-ui-react'
import Gallery from'./component/Gallery'
import Global from'./component/Global'
import Local from'./component/Local'
import Cause from'./component/Cause'
import Solutions from'./component/Solutions'
const Bgstyle = {
  minHeight: '800px',
  backgroundColor: '#000000de',
  borderRadius: '0'
}
class App extends React.Component{
  render(){
    return(
      <div className='App'>
            <Segment inverted style={Bgstyle}>
        <Head></Head>
        <br></br>
        <br></br>
        <Gallery></Gallery>
        <br></br>
        <Global></Global>
        <br></br>
        <br></br>
        <Local></Local>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Cause></Cause>
        <br></br>
        <br></br>
        <br></br>
        <Solutions></Solutions>
   </Segment>

      </div>
    )
  }
}
export default App