import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pager } from 'react-bootstrap';
import { fetchImages, fetchNextPage, fetchPreviousPage } from '../actions/imagesActions';
import { addToFavorites } from '../actions/favoritesActions';
import ImagesList from '../components/ImagesList';

class ImagesListContainer extends Component {
  handlePrevious = (event) => {
    event.preventDefault();
    this.props.fetchPreviousPage();
  }

  handleNext = (event) => {
    event.preventDefault();
    this.props.fetchNextPage();
  }

  componentWillMount() {
    if (this.props.images.length === 0) {
      this.props.fetchImages()
    }
  }

  render(){
    if (this.props.images.data === undefined) {
      return (
        <div>
          LOADING!...
        </div>
      )
    } else {
      return(
        <div>
          <Pager>
            <Pager.Item onClick={this.handlePrevious}>Previous</Pager.Item>
            <Pager.Item onClick={this.handleNext}>Next</Pager.Item>
          </Pager>
          <ImagesList images={this.props.images} add={this.props.addToFavorites}/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    images: state.images.images
  }
}


export default connect(mapStateToProps, { fetchImages, fetchNextPage, fetchPreviousPage, addToFavorites })(ImagesListContainer);
