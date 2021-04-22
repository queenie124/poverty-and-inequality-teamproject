import React, { Component } from 'react'
import { Container, Header, Icon, Grid, Image , Card} from 'semantic-ui-react'
import pic1 from '../metas/pic1.jpg'
import pic2 from '../metas/pic2.jpg'
import pic3 from '../metas/pic3.jpg'
import pic4 from '../metas/pic4.jpg'
import pic5 from '../metas/pic5.jpg'
import pic6 from '../metas/pic6.jpg'
const style1 = {
    color: 'white'
}
const style2 = {
    fontSize: 50
  }
  const style3 = {
    fontSize: 30
  }

  const style4 = {
    fontSize: 17
  }
class Solutions extends React.Component {
    render() {
        return (
            <div>
                <Header style={style2}as='h1'>
                    <Icon  name='chart bar' />
                    <Header.Content >
                        Course of Action
      <Header.Subheader >There are two solutions for us as individuals to solve this problem.</Header.Subheader>
      
                    </Header.Content>
                </Header>

                <Container fluid>
                    <Header style={style3} as='h3'>RECORD YOUR VOICE!</Header>
                    <p style={style4}>
                        To encourage people who are still poor,we need your help！
                        We want to collect your 1-minute-recording which record
                        your encouraging words for the poors around the world.
          </p>
                    <p style={style4}>
                        For you, it only takes you one minute or even less time to
                        record, but it can bring the hope of living for the people
                        who need help .If you do that,please send it to 956585542@qq.com，
                        thank for your kindness！
          </p>

                </Container>
                <Container fluid>
                    <Header style={style3}  as='h3'>DO SOME CHARITY!</Header>
                    <h1>
                        Your help will be their hope. Please click the pictures and donate some your valuable money...
          </h1>
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Image
                                    src={pic1}
                                    as='a'
                                    size='medium'
                                    href='https://www.icrc.org'
                                    target='_blank'
                                />
                                
                            </Grid.Column>
                            <Grid.Column>
                                <Image
                                    src={pic2}
                                    as='a'
                                    size='medium'
                                    href='https://www.orbis.org'
                                    target='_blank'
                                />
                            
                            </Grid.Column>
                            <Grid.Column>
                                <Image
                                    src={pic3}
                                    as='a'
                                    size='medium'
                                    href='https://www.unicef.org/zh'
                                    target='_blank'
                                />
                              
                            </Grid.Column>
                        </Grid.Row>
                        <Image
                            src={pic4}
                            as='a'
                            size='medium'
                            href='http://www.globalimpactintl.org'
                            target='_blank'
                        />
                       
                        <Grid.Row>
                            <Grid.Column>
                                <Image
                                    src={pic5}
                                    as='a'
                                    size='medium'
                                    href='https://www.humana.org'

                                    target='_blankgit push -u origin main'
                                />
                              
                            </Grid.Column>
                            <Grid.Column>
                                <Image
                                    src={pic6}
                                    as='a'
                                    size='medium'
                                    href='https://www.wvi.org'

                                    target='_blank'
                                />
                                
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
                <br></br>
               
            </div>

        )
    }

}
export default Solutions