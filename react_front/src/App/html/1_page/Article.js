
import React from "react"

import List from "../3_unit/List"
import Form from "../3_unit/Form"
import Post from "../3_unit/Posts"
import Cover from '../2_component/Cover'

const Article = () => {
	return (
		<>
			<div>
				<div>
					<Cover title="Articles" />
				</div>
				
				<div>
					<List />
				</div>
				
				<div>
					<h2>Add a new article</h2>
					<Form type="Article" show_input={['title']} />
				</div>
				
				<div>
					<h2>API posts</h2>
					<Post />
				</div>
				
				<div style={{color: "gray"}}>
					<p><b>This example demonstrates how to shrink a navigation bar when the user starts to scroll the page.</b></p>
					<p>Scroll down this frame to see the effect!</p>
					<p>Scroll to the top to remove the effect.</p>
					<p><b>Note:</b> We have also made the navbar responsive, resize the browser window to see the effect.</p>
					<p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</>
	)
}

export default Article

