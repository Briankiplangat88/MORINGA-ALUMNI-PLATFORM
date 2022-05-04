import { useState } from "react";

import logo from "../../assets/moringa-logo.png";

export function Signup() {
	const [userDetails, setUserDetails] = useState({
		email: "",
		password: "",
        password2: ""
	});

	const handleChange = (e) =>
		setUserDetails({ [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userDetails);
	};

	const { email, password, password2 } = userDetails;

	return (
		<div className="vh-100 d-flex align-items-center justify-content-center">
			<div>
				<h2 className="text-light display-4 mb-4 ps-4">Signup</h2>
				<div style={styles} className="rounded shadow d-flex flex-wrap">
					<div className="w-50">
						<img
							src={logo}
							alt="moringa-logo"
							className="w-100 h-100 rounded-start"
						/>
					</div>
					<div className="px-4 w-50 d-flex flex-column justify-content-center h-100">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="email" className="form-label text-light">
									Email address
								</label>
								<input
									type="email"
									className="form-control w-100 rounded"
									id="email"
									name={email}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3 ">
								<label htmlFor="password" className="form-label text-light">
									Password
								</label>
								<input
									type="password"
									className="form-control w-100 rounded"
									id="password"
									name={password}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3 ">
								<label htmlFor="confirm-password" className="form-label text-light">
									Confirm Password
								</label>
								<input
									type="password"
									className="form-control w-100 rounded"
									id="confirm-password"
									name={password2}
									onChange={handleChange}
								/>
							</div>
							<div className="mt-4">
								<button
									style={{ color: "#102340 !important" }}
									className="btn btn-light"
								>
									Login
								</button>
							</div>
						</form>
						<div className="mt-5">
							<p className="text-light">
								Already have an Account?{" "}
								<a href="#" className="text-primary d-inline-block ms-2">
									Login
								</a>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

let styles = {
	width: "55rem",
	height: "30rem",
	backgroundColor: "#102340",
};
