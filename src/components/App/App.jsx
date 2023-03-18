// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from 'components/Button/Button';


export class App extends Component {
	state = {
		searchValue: '',
		cards: false,
		page: 1,
	}

	getSearchValue = (value) => {
		this.setState({
			searchValue: value,
			page: 1
		})
	}

	getCards = (cards) => {
		this.setState({ cards });
	}

	loadMoreClick = () => {
		this.setState(prevState => {
			return {
				page: prevState.page + 1,
			}
		})
	}

	render() {
		const { searchValue } = this.state;

		return (
			<Container>
				<ToastContainer
					autoClose={3000}
				/>

				<Searchbar onSubmit={this.getSearchValue} />
				<ImageGallery>
					<ImageGalleryItem
						searchValue={searchValue}
						getCards={this.getCards}
						page={this.state.page}
					/>
				</ImageGallery>
				{this.state.cards && <Button onClick={this.loadMoreClick} />}
			</Container>
		);
	}
};
