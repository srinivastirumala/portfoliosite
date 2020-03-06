import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <div className="aboutblock">
               <ul>
               <li>
               . Full stack developer having good hands on experience in developing Web applications using JAVA/J2EE frameworks like Spring .
              </li>
              <li>
               . Hands on Experience in developing Mobile Applications using Android,Kotlin,Ionic and Flutter.
              </li>
              <li>
                . Good Exposure in developing micro services using Spring Boot and DevOps tools like kubernates.
              </li>
              <li>
                . Good Knowlegde on cloud Infrastucture like Amazon cloud.
              </li>
              <li>
                . Good knowlege on Agile Methodalogy and TDD (Test Driven Design)
              </li>
               </ul>
               </div>
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}