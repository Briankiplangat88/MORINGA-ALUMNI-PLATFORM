import { Link } from "react-router-dom";

export function NewsLinks() {
	return (
		<div>
			<h2 className="text-light fs-3 fw-light my-2 text-center">Tech Stories</h2>
			<div className="d-flex flex-column px-3">
				<Link className="my-3 text-light" to="#">
					My Journey in Software Development
				</Link>
				<Link className="my-3 text-light" to="#">
					Life in Moringa School
				</Link>
				<Link className="my-3 text-light" to="#">
					Rise, fall and Rise Again of my startup
				</Link>
				<Link className="my-3 text-light" to="#">
					How to pass FAANG Interviews
				</Link>
			</div>
		</div>
	);
}
