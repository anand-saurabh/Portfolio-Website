import React from 'react';
import './App.css';
import {Navigation, Layout, Header, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Saurabh Anand">
                <Navigation>
                    <Link to="/portfoliowebsite/resume">Resume</Link>
                    <Link to="/portfoliowebsite/projects">Projects</Link>
                    <Link to="/portfoliowebsite/contact">Contact</Link>
                    <Link to="/portfoliowebsite">Home</Link>
                </Navigation>
            </Header>
            <Drawer title="Quick Link">
                <Navigation>
                <Link to="/portfoliowebsite/resume">Resume</Link>
                <Link to="/portfoliowebsite/projects">Projects</Link>
                <Link to="/portfoliowebsite/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
