import { useState } from 'react'

export function CreatePost() {

	const [post, setPost] = useState('')

	let handleChange = (e) => setPost(e.target.value)

	let handleSubmit = (e) => {
		e.preventDefault()
		console.log(post)
	}

	return (
		<div
			style={{ backgroundColor: "#0A192F" }}
			className="d-flex align-items-center bg-danger py-4"
		>
			<div>
				<img
					src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
					className="rounded-circle"
					height="35"
					alt="Black and White Portrait of a Man"
					loading="lazy"
				/>
			</div>
			<div>
				<form onSubmit={handleSubmit} className="d-flex">
					<input type="text" className="form-control bg-light" value={post} onChange={handleChange} />
					<button
						style={{ backgroundColor: "#0A192F" }}
						className="btn text-light"
					>
						Post
					</button>
				</form>
			</div>
		</div>
	);
}
