import styles from 'style';
import React from 'react';
import $ from 'jquery';
import HomeListItem from 'HomeListItem';

class Home extends React.Component {

	constructor(props, context) {
	  super(props);
	  context.router;
	  this.state = {
	    recordingState: false,
	    recordId: null,
	    recordBtn: '●',
	    className: 'round-button-record',
	    status: null,
	    users: []
	  };
	}

	componentDidMount() {
	  this.init();
	}

	init() {
	  var context = this;

	  //Populate front page with users
	  $.get('/api/users', data => {
	    context.setState({ users: data });
	  });
	}

	handleClick(user) {
		const path = `/player/${user.username}`;
		console.log('click', path)
		this.context.router.push(path);
	}

	render() {
		return (
			<div className="player">
			  <h1>Welcome</h1>

			  <div className="homeList">
			    <div className="homeListOverlay">
			      <h2>Available Stations:</h2>
			      <div className="homeListContainer">
		          {this.state.users.map(user =>
		            <HomeListItem handleClick={()=>{this.handleClick(user).bind(this)}} key={user._id} user={user} />
		          )}
			      </div>
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
export default Home;
