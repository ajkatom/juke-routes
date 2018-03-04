import React, { Component } from 'react';
import Albums from './AllAlbums';
import Songs from './Songs';
import { Link } from 'react-router';


export default class Artist extends Component{
  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }
  render(){
    const selectedArtist = this.props.artist;
    console.log(selectedArtist)
    const children = this.props.children;
    const propsToPassToChildren = {
      artist: this.props.artist,
      albums: this.props.artistAlbums,
      songs: this.props.artistSongs,
    }
    return (
      <div>
        <h3>{selectedArtist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    )
  } 
}


  // componentDidMount(){
  //   const artistId = this.props.routeParams.artistId;
  //   const selectArtist = this.props.selectArtist;
  
  //   selectArtist(artistId);
  // }
  //   render(){    
    
  //     const artist = this.props.artist;
  //     const albums = this.props.artistAlbums;
  //     const songs = this.props.artistSongs;
      
  //     return(
  //       <div>
  //         <h3>{artist.name}</h3>
  //         <Albums albums={albums}/>
  //         <Songs songs={songs}/>
  //       </div>
  //     )
  //   }
