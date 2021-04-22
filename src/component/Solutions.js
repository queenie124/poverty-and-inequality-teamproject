import React, { Component }  from 'react'
import {Container, Header,Icon,Grid,Image  } from 'semantic-ui-react'
import pic1 from '../metas/pic1.jpg'
import pic2 from '../metas/pic2.jpg'
import pic3 from '../metas/pic3.jpg'
import pic4 from '../metas/pic4.jpg'
import pic5 from '../metas/pic5.jpg'
import pic6 from '../metas/pic6.jpg'
const style1={
    color:'white'
 }


class Solutions extends React.Component{
  

    render() {
        return(
        <div>
                     <Header as='h1'>
    <Icon style={style1}name='chart bar' />
    <Header.Content style={style1}>
      Course of Action
      <Header.Subheader style={style1}>There are two solutions for us as individuals to solve this problem.</Header.Subheader>
    </Header.Content>
  </Header>
        <Container fluid>
          <Header style={style1} as='h3'>RECORD YOUR VOICE!</Header>
          <p>
To encourage people who are still poor,we need your help！
We want to collect your 1-minute-recording which record 
your encouraging words for the poors around the world.
          </p>
          <p>
 For you, it only takes you one minute or even less time to 
 record, but it can bring the hope of living for the people
  who need help .If you do that,please send it to 956585542@qq.com，
  thank for your kindness！
          </p>
        </Container>
        <Container fluid>
          <Header style={style1} as='h3'>Do some charity!</Header>
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
  <p>International Committee of the Red Cross -- ICRC </p>
      </Grid.Column>
      <Grid.Column>
      <Image
    src={pic2}
    as='a'
    size='medium'
    href='https://www.orbis.org'
    target='_blank'
  />
  <p>Project Orbis--ORBIS </p>
      </Grid.Column>
      <Grid.Column>
      <Image
    src={pic3}
    as='a'
    size='medium'
    href='https://www.unicef.org/zh'
    target='_blank'
  />
  <p>UNICEF </p>
      </Grid.Column>
    </Grid.Row>
    <Image
    src={pic4}
    as='a'
    size='medium'
    href='http://www.globalimpactintl.org'
    target='_blank'
  />
  <p>Global Impact </p>
    <Grid.Row>
      <Grid.Column>
      <Image
    src={pic5}
    as='a'
    size='medium'
    href='https://www.humana.org'
   
    target='_blankgit push -u origin main'
  />
  <p> HUMANA PEOPLE TO PEOPLE</p>
      </Grid.Column>
      <Grid.Column>
      <Image
    src={pic6}
    as='a'
    size='medium'
    href='https://www.wvi.org'
  
    target='_blank'
  />
  <p>World Vision（WVI）</p>
      </Grid.Column>
     
    </Grid.Row>
  </Grid>
        </Container>
<br></br>
        <Container fluid>
         
          <p>
Your help will be their hope. Please click the pictures and donate some your valuable money...
          </p>
          
        </Container>
      </div>
            
        )
    }
    
}
export default Solutions