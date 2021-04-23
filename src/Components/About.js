import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
       var state = this.props.data.address.state;
       var country = this.props.data.address.country;
      var email = this.props.data.email;
      var resume= this.props.data.resume;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <strong>
                        Hi, I am Bharathi
                    </strong>
                    <p>
                        Self-taught, self-driven, passionate learner and developer focusing on  HTML, CSS, Bootstrap, Javascript, React, Node. Looking forward to working with ingenious teams on challenging projects.
                        <br/> <br/>
                        I’m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.
                        <br/><br/>
                        I have a great passion for learning languages and exploring the world and also programming. I have always loved technology and programming. And this is my profession now.

                    </p>
                    <strong>
                My philosophy of programming
                   </strong>
            <div className="row">
                <div className="columns programming">

                    <p>
                         I have a deep understanding of how JavaScript works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks.
                    </p>
                   </div>
                   </div>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                         <span>{name}</span><br />
                         <span>{email}</span><br/>
						   <span>
                            {state}<br/>
                            {country}
                         
                   </span><br />
			
                     
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resume} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
