import React, { Component } from 'react';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
      artists: [],
      selectedArtist: {},
      artistAlbums: [],
      artistSongs: [],
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.selectArtist = this.selectArtist.bind(this);
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
    axios.get('/api/artists/')
      .then(res => res.data)
      .then(artists => {
        this.setState({ artists })
      })
  }

  selectAlbum (albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  selectArtist (artistId) {
    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({
        selectedArtist: artist
      }));
    axios.get(`/api/artists/${artistId}/albums`)
      .then(res => res.data)
      .then(albums => this.setState({
        artistAlbums: albums
      }))
    axios.get(`/api/artists/${artistId}/songs`)
      .then(res => res.data)
      .then(songs => this.setState({
        artistSongs: songs
      }))
  }



  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
        {
          this.props.children ?
          React.cloneElement(this.props.children, {
            album: this.state.selectedAlbum,

            albums: this.state.albums,
            selectAlbum: this.selectAlbum,

            artists: this.state.artists,
            artist: this.state.selectedArtist,
            selectArtist: this.selectArtist,
            artistAlbums: this.state.artistAlbums,
            artistSongs: this.state.artistSongs
          }) 
          : null
        }
        </div>
        <Player />
      </div>
    );
  }
}
// <SingleAlbum album={this.state.selectedAlbum} /> :
// <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />