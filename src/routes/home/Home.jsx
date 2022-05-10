import { CreatePost, PostLists, Links, NewsLinks } from "../../components";

export function Home() {
	return (
		<div style={containerStyles} className="container mt-5">
			<div className="grid-styles">
				<div
					style={{
						backgroundColor: "#112340",
						alignSelf: "start",
					}}
					className="rounded shadow"
				>
					<Links />
				</div>
				<div>
					<CreatePost />
					<hr className="bg-white" />
					<PostLists />
				</div>
				<div
					style={{
						backgroundColor: "#112340",
						alignSelf: "start",
					}}
					className="rounded shadow"
				>
					<NewsLinks />
				</div>
			</div>
		</div>
	);
}

let containerStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};