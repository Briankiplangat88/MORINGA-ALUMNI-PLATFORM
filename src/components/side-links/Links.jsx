import { Link } from "react-router-dom";

export function Links() {
	return (
		<div className="d-flex flex-column px-3">
			<Link className="my-3 text-light" to="#"> Profile </Link>
			<Link className="my-3 text-light" to="#"> Groups </Link>
			<Link className="my-3 text-light" to="#"> Fundraiser </Link>
			<Link className="my-3 text-light" to="#"> Find Mentors </Link>
		</div>
	);
}
