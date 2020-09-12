import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  routeToPJ1(){
  window.open('https://github.com/anand-saurabh/Movie-Review-Service'); //This will open Google in a new
    }

    routeToPJ2(){
    window.open('    https://github.com/anand-saurabh/Cassandra-SSTable-Generation-Utility'); //This will open Google in a new
      }

      routeToPJ4(){
      window.open('https://github.com/anand-saurabh/BitTorrent-Application-Using-Socket-Programming'); //This will open Google in a new
      }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div class="top-level-content">
        <div class="row1">
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Movie Review Dashboard</CardTitle>
            <CardText>
            This is a movie review dashboard which lets you create, edit, delete or view reviews of different movies based on your role such as critics etc.
            <br></br>
            <br></br>

            <span class="label success">Vue</span>
            &nbsp;
            <span class="label info">JavaScript</span>
            &nbsp;
            <span class="label danger">Bootstrap</span>
            &nbsp;
            <span class="label warning">HTML</span>
            <br></br>
            <br></br>
            <span class="label info">CSS</span>

            </CardText>
            <CardActions border>
              <Button onClick={()=>this.routeToPJ1()} colored>GitHub</Button>
              </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Cassandra SSTable Generation Utility</CardTitle>
            <CardText>
            Implemented a utility to generate SSTables from a existing Cassandra table or a .csv file. The application can be used to bulk import the data into Cassandra tables.
            <br></br>
            <br></br>

            <span class="label success">Cassandra</span>
            &nbsp;
            <span class="label info">Java</span>
            &nbsp;
            <span class="label danger">Spring</span>
            &nbsp;
            <span class="label warning">Spring Batch</span>
            <br></br>
            <br></br>
            <span class="label info">SSTables</span>
            </CardText>
            <CardActions border>
              <Button onClick={()=>this.routeToPJ2()} colored>GitHub</Button>
              </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Application To Track User GitHub Issues</CardTitle>
            <CardText>
            Developed REST APIs to talk to GitHub client code and get data for a user based on user's GitHub Ids. The data include number of open issues, issues opened more than 7 days ago.
            <br></br>
            <br></br>

            <span class="label success">SpringBoot</span>
            &nbsp;
            <span class="label info">Spring MVC</span>
            &nbsp;
            <span class="label danger">Spring</span>
            &nbsp;
            <span class="label warning">Java</span>
            <br></br>
            <br></br>
            <span class="label info">Heroku</span>
            </CardText>

            <CardActions border>
              <Button onClick={()=>this.routeToPJ3()} colored>GitHub</Button>
              </CardActions>
          </Card>
          </div>
          </div>
          <br></br>
          <br></br>

          <div class="row2">
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >BitTorrent Application</CardTitle>
              <CardText>
              This a implementation of BitTorrent application using socket programming in Java.
              <br></br>
              <br></br>

              <span class="label success">Networking</span>
              &nbsp;
              <span class="label info">Java</span>
              &nbsp;
              <span class="label danger">Multithreading</span>
              &nbsp;
              <span class="label warning">Socket</span>
              <br></br>
              <br></br>
              <span class="label info">Distributed System</span>
              </CardText>
              <CardActions border>
                <Button onClick={()=>this.routeToPJ4()} colored>GitHub</Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Application Deployment using Jenkins, Ansible, Tomcat</CardTitle>
              <CardText>
              This project shows step by step process to deploy a Maven or Gradle Application in Cloud using Jenkins, Tomcat and Ansible Scripts.
              <br></br>
              <br></br>

              <span class="label success">Jenkins</span>
              &nbsp;
              <span class="label info">Ansible</span>
              &nbsp;
              <span class="label danger">Tomcat</span>
              &nbsp;
              <span class="label warning">Cloud</span>
              <br></br>
              <br></br>
              <span class="label info">Maven</span>
              </CardText>
              <CardActions border>
                <Button onClick={()=>this.routeToPJ5()} colored>GitHub</Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Most Frequent Hashtags on Social Media</CardTitle>
              <CardText>
              This application finds the most frequent hashtags on Social Media like Twitter,Facebook. This application is capable of processing millions of tags in less than a sec.
              <br></br>
              <br></br>

              <span class="label success">Java</span>
              &nbsp;
              <span class="label info">Fibonacci Heap</span>
              &nbsp;
              <span class="label warning">Data Structures</span>
              <br></br>
              <br></br>
              </CardText>

              <CardActions border>
                <Button onClick={()=>this.routeToPJ6()} colored>GitHub</Button>
                </CardActions>
            </Card>
            </div>
            </div>
            <br></br>
            <br></br>
            <div class="row3">
            <div className="projects-grid">
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Distributed Messaging Application using RabbitMQ and Golang</CardTitle>
                <CardText>
                This is messaging application built using RabbitMQ as the message-broker. I implemented this using Golang language.
                <br></br>
                <br></br>

                <span class="label success">Golang</span>
                &nbsp;
                <span class="label info">RabbitMQ</span>
                &nbsp;
                <span class="label danger">Streaming</span>
                &nbsp;
                <br></br>
                <br></br>
                <span class="label info">Distributed System</span>
                </CardText>
                <CardActions border>
                  <Button onClick={()=>this.routeToPJ7()} colored>GitHub</Button>
                  </CardActions>
              </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Blockchain Bidding Application using Solidity</CardTitle>
                  <CardText> Implemented a smart contract using Solidity language for a Blockchain bidding application
                  <br></br>
                  <br></br>

                  <span class="label success">Solidity</span>
                  &nbsp;
                  <span class="label info">Blockchain</span>
                  &nbsp;
                  <span class="label danger">Smart Contracts</span>
                  &nbsp;
                  <br></br>
                  <br></br>
                  <span class="label info">Distributed System</span>
                  </CardText>
                  <CardActions border>
                    <Button onClick={()=>this.routeToPJ8()} colored>GitHub</Button>
                    </CardActions>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Merger and Acquistion using Blockchain</CardTitle>
                  <CardText>
                  This project is an implementation of the merger and acquisition process on a Blockchain Network using Solidity.
                  <br></br>
                  <br></br>

                  <span class="label success">Solidity</span>
                  &nbsp;
                  <span class="label info">Blockchain</span>
                  &nbsp;
                  <span class="label danger">Smart Contracts</span>
                  &nbsp;
                  <br></br>
                  <br></br>
                  <span class="label info">Distributed System</span>
                  </CardText>
                  <CardActions border>
                    <Button onClick={()=>this.routeToPJ9()} colored>GitHub</Button>
                    </CardActions>
                </Card>
              </div>
              </div>
              </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
