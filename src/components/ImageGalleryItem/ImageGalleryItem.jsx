import { Component } from "react";
import { getImages } from "services/pixabayApi";
import { ImageItem } from "./ImageGalleryItem.styled";


// getImages
export class ImageGalleryItem extends Component {
	state = {
		images: null,
	}

	componentDidUpdate(prevProps, prevState) {

		if (prevProps.searchValue !== this.props.searchValue) {
			console.log(this.props.searchValue);
			console.log('change value');
		}
	}

	render() {
		

		return (
			<ImageItem className="gallery-item">
				<img src="#" alt="#" />
			</ImageItem>
		)
	}
}