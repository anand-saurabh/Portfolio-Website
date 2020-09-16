import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
  componentDidMount(){
    document.title = "Saurabh Anand"
  }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className='landing-grid'>
      <Cell col={12}>
      <div className='banner-text'>
      <h1>Full Stack Developer</h1>
      <hr/>
      <p> Java | Golang | Spring | SpringBoot | JavaScript | React | VueJS | Bootstrap | Cassandra | MongoDB </p>
      <p> Area of Interest : Cloud and Distributed Systems </p>
      <div className="social-links">

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/saurabh-anand-29081589/" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true" />
    </a>

    {/* Github */}
    <a href="https://github.com/anand-saurabh" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github-square" aria-hidden="true" />
    </a>
    </div>
    </div>
    </Cell>
    </Grid>
  </div>
    )
  }
}

export default Landing;
