import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  routeToPJ1(){
  window.open('https://github.com/anand-saurabh/Movie-Review-UI-Dashboard--JavaScript-Vue-Bootstrap'); //This will open Google in a new
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

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle><b>Cassandra SSTable Generation Utility</b></CardTitle>
          <CardText style={{'text-align': 'justify'}}>
          Implemented a utility to generate SSTables from a existing Cassandra table or a .CSV file. This utility can be used to bulk import millions of data into Cassandra tables directly.
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
            <CardTitle><b>Application To Track User GitHub Issues</b></CardTitle>
            <CardText style={{'text-align': 'justify'}}>
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

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle><b>Movie Review Dashboard with CRUD Operations</b></CardTitle>
            <CardText style={{'text-align': 'justify'}}>
            The movie review dashboard project lets you create, edit, delete or view reviews of movies based on the user roles such as critics. Also, we can search a movie by applying filters in UI.
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

          </div>
          </div>
          <br></br>
          <br></br>

          <div class="row2">
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle><b>BitTorrent Application: Distributed and Scalable System Implementation</b></CardTitle>
              <CardText style={{'text-align': 'justify'}}>
              This a implementation of BitTorrent application using socket programming in Java. This uses decentralized P2P communication protocol for sharing data and files.
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
              <CardTitle><b>Application Deployment using Jenkins, Ansible, Tomcat</b></CardTitle>
              <CardText style={{'text-align': 'justify'}}>
              This project shows step by step process to deploy a Maven or Gradle Application in the Cloud (AWS etc) using Jenkins, Tomcat and Ansible Scripts.
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
              <CardTitle><b>Most Frequent Hashtags on Social Media</b></CardTitle>
              <CardText style={{'text-align': 'justify'}}>
              This application finds the most frequent hashtags on Social Media like Twitter, Facebook. This application is capable of processing millions of tags in less than a sec.
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
                <CardTitle ><b>Distributed Messaging Application using RabbitMQ and Golang</b></CardTitle>
                <CardText style={{'text-align': 'justify'}}>
                This is messaging application built using RabbitMQ as the message-broker. I made use of Golang language for the implementation.
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
                  <CardTitle><b>Distributed System: Blockchain Bidding Application using Solidity</b></CardTitle>
                  <CardText style={{'text-align': 'justify'}}>
                  Implemented smart contracts using solidity language for a Blockchain Bidding application. Scaled the system to support multiple users.
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
                  <CardTitle><b>Distributed System: Merger and Acquistion using Blockchain</b></CardTitle>
                  <CardText style={{'text-align': 'justify'}}>
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
