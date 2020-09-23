import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Saurabh Anand</h2>
            <h4 style={{color: 'grey'}}>Software Engineer </h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p><b>Key Highlights</b></p>
            <br></br>
            <p>
            <b>
* Expertise in Spring Boot, Spring Cloud, Netflix OSS frameworks to build complex Backend Applications using Java.
<br></br>

* Extensive experience in SQL (MySQL, PostgreSQL) and NoSQL databases like Apache Cassandra and MongoDB.
<br></br>

* Experience in Cloud Environment, Amazon Web Services (AWS).
<br></br>
* Expertise in Collection Framework, Executor Framework, Java 8 Lambda, and Streams.
<br></br>
* Worked in Agile Development Methodology such as JIRA etc.
<br></br>
* Well-versed in Computer Science Concepts - Algorithms, Data Structures, Object-Oriented Programming (OOP). Good Analytical and Problem-Solving skills.
</b>
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3800 SW 34 St, Gainesville, Florida, 32608</p>
            <h5>Phone</h5>
            <p>(352) 871-5669</p>
            <h5>Email</h5>
            <p>saurabh789789@gmail.com</p>
            <h5>Web</h5>
            <p>https://anand-saurabh.github.io/portfoliowebsite/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2021}
              schoolName="University of Florida (Gainesville, Florida)"
              schoolDescription="I am currently a computer science graduate masters student at University of Florida."
               />

               <Education
                 startYear={2011}
                 endYear={2015}
                 schoolName="R.V. College of Engineering (Bangalore, India)"
                 schoolDescription="I completed my Bachelor's Degree in Information Science and Engineering from this university."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Senior Software Engineer Intern, Visa Inc. (Austin, Texas)"
              jobDescription="I was a summer'2020 intern at Visa in the Digital and Developer platform team. During the internship, I played the role of a full-stack developer. I worked on the UI using Vue JS, JavaScript, Bootstrap, HTML, CSS, etc. For backend services, I used Golang, Gorilla Mux framework, Java, SpringBoot, etc.

Major Projects on which I worked:
1) Created a mobile app using React Native and Spring Boot to enable contactless payments to support around 3 million small businesses in COVID times. Made use of Near Field Communication NFC and Visa token service.
2)Developed a dashboard for the service discovery of different Visa services in different environments. Used Vue.js for UI and Golang Gorilla Mux Framework for developing REST services.
3) Proposed a solution to reduce cash usage (approx 24%) in US by combining Visa merchant service and customer loyalty program for small merchants and customers."
              />

              <Experience
                startYear={2016}
                endYear={2019}
                jobName="Senior Software Engineer, J.C. Penney (Bangalore, India)"
                jobDescription="I was working as a Senior Software Engineer in the Pricing and Promotion team of J.C. Penney with the main area of focus on Backend and Big Data application development. My day to day work involved building various REST services, developing Spring Batch jobs for data migration, implementing Spring Integration projects as well as the integration of various backend services with Databases such as Cassandra, PostgreSQL, etc. Also, a major part of my work involved writing scalable Big Data applications using Apache Spark.

Primary Projects on which I worked:
1) Worked on building the first in-house Pricing Engine platform for J.C. Penney from scratch with major features such as real-time pricing, competitive pricing.
Used Spring Boot, Spring MVC for microservices, Hazelcast Caching.
2) Wrote and Scaled Big Data Applications using Apache Spark and Cassandra. This reduced the data processing time
for approx. 10 million records from 4 hours to 25 minutes.
Designed and developed Promotion and Coupon system for J.C. Penneys entire .com site with the help of Neo4j Graph DB, PostgreSQL, Spring Boot, Batch Jobs. Coupons increased the order conversion by almost 4 percent.
3) Built Pricing Notification System to process real-time price updates using AWS Kinesis and ZooKeeper."
                />


                              <Experience
                                startYear={2015}
                                endYear={2016}
                                jobName="Software Engineer, Snapdeal (Bangalore, India)"
                                jobDescription="I was working as a Software Engineer in the Reviews and Rating (RnR) and Question and Answer(QnA) team of Snapdeal. My day to day work involved building features for my team using Java, REST framework, Spring MVC, Spring Boot, etc. Also, a major part of the work involved working with SQL (MySQL etc) as well as NoSQL databases like Cassandra, etc.

Primarily I worked on:
1) Implemented Search QnA feature for a product using Elasticsearch. This feature supports fuzzy and natural language search. Employed Aggregations, Custom Analyzers, Indexing, and Stemming in Elasticsearch.
2) Built a platform that supported submission and moderation of reviews and rating RnR and QnA for a product by customers.
Made use of Spring, Java, Cassandra, MongoDB, and Redis caching.
3) Project Selfie: Take a Selfie with the product you buy from Snapdeal and post on Snapdeal along with its review. Java along with Spring framework was used for backend microservices and Cassandra as a data store."
                                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Technical Skills</h2>
              <b>Programming Skills: </b>Java, Golang, Python, C++, C, Solidity
              <br></br>
              <br></br>

<b>Frameworks/ Tools</b>: Spring MVC, Spring Boot, REST, SOAP, Gorilla Mux, Django, Spring Batch, Spring Integration, Splunk, Junit, Mockito, JIRA, GIT, Agile, Maven, Gradle, Ansible, Jenkins, Docker, ZooKeeper, Netflix OSS
<br></br>
<br></br>

<b>Databases:</b> Cassandra, MongoDB, MySQL, PostgreSQL, Oracle, Neo4j Graph Database
<br></br>
<br></br>

<b>Streaming/Search/Big Data/Caching:</b> AWS Kinesis, Kafka, Elasticsearch, Apache Spark, Redis, Hazelcast
<br></br>
<br></br>

<b>Web Technologies:</b> JavaScript, React JS, Vue JS, Bootstrap, Web3 JS, PHP, Html, CSS
<br></br>
<br></br>

<b>Operating Systems:</b> Mac, Windows, Unix

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
