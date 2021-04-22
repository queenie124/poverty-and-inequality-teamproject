import React from 'react'
import Head from './component/Head'
import { Segment, Container } from 'semantic-ui-react'
import Gallery from './component/Gallery'
import Global from './component/Global'
import Local from './component/Local'
import Cause from './component/Cause'
import Solutions from './component/Solutions'

const styles = {
  gallery: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    paddingTop: 80,
    paddingBottom: 100,
  },
  section: {
    backgroundColor: '#ffffff',
    paddingTop: 80,
   
  },
  head:{
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    paddingTop: 40,
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <Segment style={{
          border: 0,
          padding: 0
        }}>

          <div id="section-head" class="section" style={styles.head}>
            <Head></Head>
          </div>

          <div id="section-gallery" class="section" style={styles.gallery}>
            <Container >
              <Gallery />
            </Container>
          </div>

          <div id='section-global' class='section' style={styles.section}>
            <Container>
              <Global />
            </Container>
          </div>

          <div id='section-local' class='section' style={styles.section}>
            <Container>
              <Local />
            </Container>
          </div>

          <div id='section-cause' class='section' style={styles.section}>
            <Container>
              <Cause></Cause>
            </Container>
          </div>
          <div id='section-solutions' class='section' style={styles.section}>
            <Container>
              <Solutions></Solutions>
            </Container>
          </div>
        </Segment>

      </div >
    )
  }
}
export default App