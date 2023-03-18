import { Component } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { SearchWrapper } from "./Searchbar.styled";


export class Searchbar extends Component {
	state = {
		searchValue: '',
	}

	handleChange = (e) => {
		this.setState({
			searchValue: e.target.value,
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const searchValue = this.state.searchValue.trim().toLowerCase();
		const { onSubmit } = this.props;

		if (searchValue === '') {
			toast.error('Введіть якесь значення в інпут.');
			return;
		}
		onSubmit(searchValue);
		
		this.setState({
			searchValue: '',
		})
	}

	render() {
		
		return (
			<SearchWrapper>
				<form className="form" onSubmit={this.handleSubmit}>
					<button type="submit" className="button">
						<AiOutlineSearch
							className="button-label"
						/>
						
						{/* <span className="button-label">
							<AiOutlineSearch />
						</span> */}
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