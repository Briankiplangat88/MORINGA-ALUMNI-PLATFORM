export function Post() {
	return (
		<div class="card w-100 mx-auto mb-3">
			<div class="card-header d-flex align-items-center">
				<img
					class="rounded-circle z-depth-2"
					alt="100x100"
					src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
					width="45"
					height="45"
				/>
				<p class="fs-5 ms-4 mt-2">username</p>
			</div>
			<div class="card-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nobis.
					Sit aliquid voluptatem eligendi rem dolor ut id. Placeat, quos.
				</p>
			</div>
			<div class="card-footer">
				<div class="small d-flex justify-content-start">
					<a
						href="#!"
						class="d-flex align-items-center fs-4 me-3 text-decoration-none"
					>
						<i class="fa-solid fa-heart"></i>
					</a>
					<a
						data-bs-toggle="collapse"
						href="#comments-1"
						role="button"
						class="d-flex align-items-center me-3 fs-4 text-decoration-none"
					>
						<i class="far fa-comment-dots me-2"></i>
					</a>
				</div>
				<div
					id="comments-1"
					class="collapse card-footer py-3 border-0"
					style={{ backgroundColor: "#f8f9fa" }}
				>
					<div>
						<div class="mt-3">
							<p>
								<span class="text-primary">username</span>: comment
							</p>
						</div>
						<p class="text-muted">Be the first to comment on this post</p>
					</div>
					<form action="/comment/{{post.id}}/" method="POST">
						<div class="d-flex flex-start w-100">
							<div class="form-outline w-100">
								<input type="text" className="form-control" />
							</div>
						</div>
						<div class="float-end mt-2 pt-1">
							<button type="submit" class="btn btn-primary btn-sm">
								Comment
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
