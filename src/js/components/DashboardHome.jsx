import React from 'react';
import PropTypes from 'prop-types';

class DashboardHome extends React.Component {
	constructor() {
		super();
	}
	render() {
		return <div className="dashboardHome">This is the dashboard Home</div>;
	}
}

export default DashboardHome;

DashboardHome.propTypes = {
	//getAction: PropTypes.func.isRequired
};
