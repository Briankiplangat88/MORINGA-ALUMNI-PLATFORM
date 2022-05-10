import { CreatePost, PostLists } from "../../components";

export function Home() {
	return (
		<div style={containerStyles} className="container">
			<div className="grid-styles" >
				<div
					style={{backgroundColor: "#112340", border: "1px solid white" }}
				>
					links
				</div>
				<div
					style={{backgroundColor: "#112340" , border: "1px solid white"}}
				>
					<CreatePost />
					<hr />
					<PostLists />

				</div>
				<div
					style={{backgroundColor: "#112340", border: "1px solid white" }}
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