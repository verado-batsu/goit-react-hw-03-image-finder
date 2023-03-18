import { Component } from "react";
import { LoadMoreBtn } from "./Button.styled";

export class Button extends Component {
	render() {
		return (
		<LoadMoreBtn>
			<button onClick={this.props.onClick}>Load more</button>
		</LoadMoreBtn>
		)
	}
}