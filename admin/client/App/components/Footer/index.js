/**
 * The global Footer, displays a link to the website and the current Keystone
 * version in use
 */

import React from "react";
import { css } from "glamor";
import { Container } from "../../elemental";
import theme from "../../../theme";

var Footer = React.createClass({
	displayName: "Footer",
	propTypes: {
		appversion: React.PropTypes.string,
		backUrl: React.PropTypes.string,
		brand: React.PropTypes.string,
		user: React.PropTypes.object,
		User: React.PropTypes.object, // eslint-disable-line react/sort-prop-types
		version: React.PropTypes.string
	},
	// Render the user
	renderUser() {
		const { User, user } = this.props;
		if (!user) return null;

		return (
			<span>
				<span> Signed in as </span>
				<a
					href={`${Keystone.adminPath}/${User.path}/${user.id}`}
					tabIndex="-1"
					className={css(classes.link)}
				>
					{user.name}
				</a>
				<span>.</span>
			</span>
		);
	},
	render() {
		const { backUrl, brand, appversion, version } = this.props;

		return (
			<footer className={css(classes.footer)} data-keystone-footer>
				<Container>
				<a href="https://github.com/engagementlab"><img src="https://res.cloudinary.com/engagement-lab-home/image/upload/c_scale,w_80/v1543874087/logos/logo-sm-black.png" /></a>
				</Container>
				<Container>
					<a href={backUrl} tabIndex="-1" className={css(classes.link)}>
						{brand}
					</a> | 
					{this.renderUser()}
					<p>Powered by a customized fork of <a href="https://github.com/engagementlab/keystone" className={css(classes.link)}>Keystone v{version}</a></p>
				</Container>
			</footer>
		);
	}
});

/* eslint quote-props: ["error", "as-needed"] */
const linkHoverAndFocus = {
	color: theme.color.white60,
	outline: "none"
};
const classes = {
	footer: {
		boxShadow: "0 -1px 0 rgba(0, 0, 0, 0.1)",
		fontSize: theme.font.size.small,
		paddingBottom: 30,
		paddingTop: 40,
		background: "black",
		color: "white",
		display: "flex",
		width: "100%",
		alignItems: "center"
	},
	link: {
		color: '#fecf33',

		":hover": linkHoverAndFocus,
		":focus": linkHoverAndFocus
	}
};

module.exports = Footer;
