import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, hashHistory, IndexRedirect, Link} from 'react-router';
import AllAlbums from './components/AllAlbums';
import Album from './components/SingleAlbum';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component= {Main}>
      <IndexRedirect to='/albums' />
      <Route path='/albums' component={AllAlbums}/>
      <Route path='/albums/:albumId' component={Album} />
      <Route path='/artists' component={Artists} />
      <Route path='/artists/:artistId' component={Artist}>
        <Route path='/artists/:artistId/albums' component={AllAlbums}/>
        <Route path='/artists/:artistId/songs' component={Songs}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
