import React from 'react';
import getRelatedIconClass from '../utils/getRelatedIconClass';

class Section extends React.Component {
	render () {
		return (
			<div className="dashboard-group" data-section-label={this.props.label}>
				<div className="dashboard-group__heading">
					{this.props.label}
				</div>
				{this.props.children}
			</div>
		);
	}
}

Section.propTypes = {
	children: React.PropTypes.element.isRequired,
	icon: React.PropTypes.string,
	id: React.PropTypes.string,
	label: React.PropTypes.string.isRequired,
};

export default Section;
