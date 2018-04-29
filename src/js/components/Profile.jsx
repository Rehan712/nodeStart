import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
	constructor() {
		super();
	}
	render() {
		return <div className="profile">This is Profile</div>;
	}
}

export default Profile;

Profile.propTypes = {
	//getAction: PropTypes.func.isRequired
};
