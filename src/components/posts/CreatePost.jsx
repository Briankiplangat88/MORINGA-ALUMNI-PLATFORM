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
			style={{ backgroundColor: "#112340" }}
			className="d-flex align-items-center justify-content-around py-4 mb-4 rounded shadow"
		>
			<div className='ms-3'>
				<img
					src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
					className="rounded-circle"
					height="50"
					alt="Black and White Portrait of a Man"
					loading="lazy"
				/>
			</div>
			<div style={{ width: "78%" }}>
				<form onSubmit={handleSubmit} className="d-flex ">
					<input
						type="text"
						className="form-control bg-light"
						value={post}
						onChange={handleChange}
						placeholder="Create a Post"
					/>
					<button
						style={{ backgroundColor: "#0A192F" }}
						className="btn text-light ms-3"
					>
						Post
					</button>
				</form>
			</div>
		</div>
	);
}
