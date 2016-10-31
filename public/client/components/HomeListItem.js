import styles from 'style';
import React from 'react';
import { Link } from 'react-router';

class HomeListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  };

  render() {
    return(
      <Link to="" className="userBox" onClick={()=>{this.props.handleClick(this.props.user)}}>
				<div className="userBoxText"><strong>{this.props.user.station}</strong></div>
				<img src={this.props.user.picture} />
				<div className="userBoxText">{this.props.user.tagline}</div>
			</Link>
    )
  }


};

export default HomeListItem;