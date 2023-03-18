import { Component } from "react";
import { toast } from 'react-toastify';
import { getImages } from "services/pixabayApi";
import { ImageItem } from "./ImageGalleryItem.styled";


export class ImageGalleryItem extends Component {
	state = {
		images: null,
	}

	componentDidUpdate(prevProps, prevState) {
		const { searchValue, getCards, page } = this.props;

		if (prevProps.searchValue !== searchValue) {
			getImages(searchValue)
				.then(res => { 
					return res.json();
				})
				.then(({ hits }) => {
					if (hits.length === 0) {
						toast.error(`За запитом '${searchValue}' не знайдено картинок!`);
						this.setState({
							images: null,
						});

						getCards(false);
						return;
					}

					const images = hits.reduce((acc, { id, webformatURL, largeImageURL }) => {
						const image = {
							id,
							webformatURL,
							largeImageURL,
						}
						return [...acc, image]
					}, [])
					
					this.setState({ images });

					getCards(true);
				})
				.catch(error => {
					console.log(error);
				});
		}

		if (prevProps.page !== page && this.state.images !== null) {
			getImages(searchValue, page)
				.then(res => res.json())
				.then(({ hits }) => {
					const images = hits.reduce((acc, { id, webformatURL, largeImageURL }) => {
						const image = {
							id,
							webformatURL,
							largeImageURL,
						}
						return [...acc, image]
					}, [])

					this.setState(prevState => {
						return {
							images: [...prevState.images, ...images]
						}
					});
				})
				.catch(error => console.log(error));
		}
	}

	render() {
		const { images } = this.state;
		const { searchValue } = this.props;

		return (
			images && (
					images.map(({ id, webformatURL, largeImageURL }) => {
						return (
							<ImageItem key={id} className="gallery-item">
								<img src={webformatURL} alt={searchValue} />
							</ImageItem>
						)
					})
				)	
		)
	}
}