import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignHome.css";
import SignNavbar from "../SignNavBar/SignNavBar.js";

const SignHome = () => {

	const [ modalShowSignUp, setModalShowSignUp ] = useState(false);

	return (
		<div>
			<div><SignNavbar></SignNavbar></div>
			<div className="mHome">
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2">
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2">
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2 tinBlock"></div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
						<img
							src="https://image.flaticon.com/icons/svg/263/263105.svg"
							width="150"
							height="150"
							alt="Arrow"
							align="right"
						/>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2 tinBlock"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2 tinBlock"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
						<p className="oText">¡Welcome!</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-1">
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignHome;