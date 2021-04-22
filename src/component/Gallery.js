import React from 'react'
import { Card, Placeholder,Image, Segment} from 'semantic-ui-react'
import headpic1 from '../metas/headpic1.png'
import headpic2 from '../metas/headpic2.png'
import headpic3 from '../metas/headpic3.jpg'

const styles = {
  cardstyle: {
    top: '50px',
    height:'300px',
    width:'350px',
  },
  picstyle:{
    height:'275px',
    borderRadius: '10px',
  },
  classstyle:{
    top:'50px',
    color:'#ffffff00'
  },
  Bgstyle :{
    //minHeight: '400px',
    borderRadius: '0'
  }
}

class Gallery extends React.Component{
   
    render() {
        
        return(
          <div style={styles.Bgstyle}>
            <Card.Group itemsPerRow={3} >
            <Card >
              <Card.Content>
                <Placeholder>
                  <Image style={styles.picstyle} wrapped src={headpic1} size='median' />
                </Placeholder>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image style={styles.picstyle} wrapped  src={headpic2} size='median' />
                </Placeholder>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image style={styles.picstyle} wrapped  src={headpic3} size='median' />
                </Placeholder>
              </Card.Content>
            </Card>
          </Card.Group>
      </div>
            )
    }
    
}
export default Gallery