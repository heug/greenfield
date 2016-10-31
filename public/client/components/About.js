import styles from 'style';
import React from 'react';
import $ from 'jquery';

class About extends React.Component {

	constructor(props, context) {
	  super(props);
	}

	render() {
		return (
			<div className="about">
			  <h1>About</h1>

			  <div className="aboutContainer">
			    <div className="aboutOverlay">
			      <h2 className="teamH2">The Team</h2>
			      <div className="teamPics">
			      	<img src="client/img/gilles.jpg" />
			      	<img src="client/img/eric.jpg" />
			      	<img src="client/img/jp.jpg" />
			      	<img src="client/img/eugene.jpg" />
			      </div>
			      <p className="teamDesc">Gilles, Eric, JP, and Eugene are currently students at Hack Reactor studying full-stack JavaScript. Their widely varied backgrounds provide an excellent framework for organizing and building the many features required by this app.</p>

			      <h2>Purpose</h2>
			      <p>We set out to build a web radio where users can create their own station to broadcast live. Listeners can tune in to their favorite stations live or listen to past broadcasts. The goal was to create an app that could both record and stream simultaneously and to make it look as professional as possible. We feel that the app was a resounding success.</p>

			      <h2>Architecture</h2>
			      <p>The app itself is designed in React JS while the audio streaming is handled with WebRTC. The server is Express and the database is Mongo DB with Mongoose. Authentication is handled by Passport. We currently have it deployed on Kurento.</p>
			    </div>
			    <div className="opacityBG4">
			    </div>
			    <div className="opacityBG3">
			    </div>
			  </div>
			</div>
		)
	}
}
export default About;
