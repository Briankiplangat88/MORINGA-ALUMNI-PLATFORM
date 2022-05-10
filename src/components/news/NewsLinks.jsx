import { Link } from 'react-router-dom'

export function NewsLinks(){
    return (
			<div className="d-flex flex-column">
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
		);
}