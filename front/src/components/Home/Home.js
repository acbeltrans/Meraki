import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../NavBar/NavBar.js";
import FormSignUp from "../Form/FormSignUp.js";

const Home = () => {

	const [ modalShowSignUp, setModalShowSignUp ] = useState(false);

	return (
		<div>
			<div><NavBar></NavBar></div>
			<div className="mainHome">
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
						<img
							src="https://image.flaticon.com/icons/svg/263/263105.svg"
							width="70"
							height="70"
							alt="Arrow"
							align="right"
						/>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
						<p className="text">
							than to do something for others."<br></br> -Martin
							Luther King Jr.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
						<p className="text">
							we must learn that there is nothing greater
						</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2 tinyBlock"></div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2">
						<p className="text">"Somewhere along the way,</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-2 tinyBlock"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2 tinyBlock"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-2"></div>
					<div className="col-sm-3 col-md-3 col-lg-1">
						<img
							src="https://image.flaticon.com/icons/svg/60/60758.svg"
							width="70"
							height="70"
							alt="Arrow"
							align="right"
						/>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-1">
						<p className="otherText">
						<Link to="" className="uText" onClick={() => setModalShowSignUp(true)}>
							Join us
						</Link> <br></br> in this aventure</p>
						<FormSignUp show={modalShowSignUp} onHide={() => setModalShowSignUp(false)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
