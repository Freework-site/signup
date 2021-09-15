import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Button from "../../components/forms/button/Button";
import FormInput from "../../components/forms/formInput/FormInput";



const Signup = () => {
	return (
		<div className="main">
			<div className="headings">
				<h1>Start Making Money With Freeworking</h1>
				<p>
					Freeworking is the Best Marketplace Where You Can Earn Money And Grow
					Your Income By Selling Your Skills And Time
				</p>
			</div>
			<div className="textcontent">
				<div className="message">
					<button type="button">SignUp And Earn</button>
				</div>
				<form className="signup_box">
					<FormInput
						type="text"
						name="firstname"
						placeholder="First Name"
						required
					/>
					<FormInput type="text" name="lastname" placeholder="Last Name" required />
					<FormInput
						type="text"
						name="emaiaddress"
						placeholder="Email Address"
						required
					/>
					<FormInput
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
					<Button type="submit">Sign Up</Button>
					<p className="terms">
						By clicking the button, you are agreeing to our{" "}
						<span>Terms and Services</span>
					</p>
					<p className="terms">
						Already Have an Account <Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
