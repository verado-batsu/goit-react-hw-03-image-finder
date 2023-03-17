import { Component } from "react";
import { SearchWrapper } from "./Searchbar.styled";
import { AiOutlineSearch } from 'react-icons/ai';


export class Searchbar extends Component {
	state = {
		searchValue: '',
	}

	handleChange = (e) => {
		this.setState({
			searchValue: e.target.value,
		})
	}

	render() {

		return (
			<SearchWrapper>
				<form className="form">
					<button type="submit" className="button">
						<AiOutlineSearch
							className="button-label" />
						{/* <span className="button-label">Search</span> */}
					</button>

					<input
						className="input"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.handleChange}
						value={this.state.searchValue}
					/>
				</form>
			</SearchWrapper>
		)
	}
}