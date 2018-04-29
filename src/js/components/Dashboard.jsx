import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import DashboardHome from './DashboardHome';

class Dashboard extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="dashboard">
				<Switch>
					<Route path="/dashboard/profile" component={Profile} />
					<Route exact path="/dashboard" component={DashboardHome} />
				</Switch>
			</div>
		);
	}
}

export default Dashboard;

Dashboard.propTypes = {
	//getAction: PropTypes.func.isRequired
};
