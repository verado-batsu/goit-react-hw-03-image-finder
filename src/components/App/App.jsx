// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export class App extends Component {
	state = {
		searchValue: ''
	}

	getSearchValue = (value) => {
		this.setState({
			searchValue: value,
		})
	}

	render() {
		const { searchValue } = this.state;

		return (
			<Container>
				<Searchbar onSubmit={this.getSearchValue} />
				<ImageGallery>
					<ImageGalleryItem searchValue={searchValue} />
				</ImageGallery>
				<ToastContainer
					autoClose={3000}
				/>
			</Container>
		);
	}
};
