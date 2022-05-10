import { CreatePost, PostLists, Links } from "../../components";

export function Home() {
	return (
		<div style={containerStyles} className="container">
			<div className="grid-styles">
				<div
					style={{
						backgroundColor: "#112340",
						border: "1px solid white",
						alignSelf: "start",
					}}
				>
					<Links />
				</div>
				<div style={{ backgroundColor: "#112340", border: "1px solid white" }}>
					<CreatePost />
					<hr className="bg-light" />
					<PostLists />
				</div>
				<div
					style={{
						backgroundColor: "#112340",
						border: "1px solid white",
						alignSelf: "start",
					}}
				>
					stories
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