import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav
			style={{ backgroundColor: "#102340" }}
			className="navbar navbar-expand-lg navbar-light mb-3"
		>
			<div className="container">
				<h1 className="navbar-brand fs-2 fw-light mt-2 mt-lg-0 text-light">
					Moringa School Alumni
				</h1>
				<button
					className="navbar-toggler border-light"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="text-light fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="d-block d-md-flex  ms-3 ms-md-auto align-items-center">
						<Link className="text-light text-decoration-none me-3" to="#">
							Home
						</Link>
						<Link className="text-light text-decoration-none me-3" to="#">
							Messages
						</Link>
						<div className="dropdown mt-3 mt-md-0">
							<Link
								className="dropdown-toggle d-flex align-items-center hidden-arrow"
								to="#"
								id="navbarDropdownMenuAvatar"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
									className="rounded-circle"
									height="25"
									alt="Black and White Portrait of a Man"
									loading="lazy"
								/>
							</Link>
							<ul
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="navbarDropdownMenuAvatar"
							>
								<li>
									<Link className="dropdown-item" to="#">
										My profile
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="#">
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
