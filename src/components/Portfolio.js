import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row skill">

<div className="three columns header-col">
   <h1><span>certifications</span></h1>
</div>

	 <div className="nine columns main-col">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p >
                          {item.IssuedBy}
                          <span>&bull;</span> <em className="date">{item.validfrom} {item.Validto}</em></p>
                          <p >
                          {item.id}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
   
  </section>
        );
  }
}