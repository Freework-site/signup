import React from "react";
import "./signin.css";
import Button from "../../components/forms/button/Button"

const Login = () => {
	return (
		<div classNameName="main">
			<div className="headings">
				<h1>Welcome Back To Freeworking</h1>
				<p>
					Freeworking is the Best Marketplace Where You Can Earn Money And Grow
					Your Income By Selling Your Skills And Time
				</p>
			</div>
			<div className="textcontent">
				<div className="signup_box">
					<input
						type="text"
						name="emaiaddress"
						placeholder="Email or Username"
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
					<Button type="submit">Login</Button>
					<p className="terms">
						New Member <a href="singup.html">Create An Account</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
