import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
 headers: {
 Authorization: 'Client-ID c267d41de472d69'
 }
 }).then(response => this.setState({ images: response.data.data }));
    
  }

  render() {
    return (
      <div>
      <nav className="nav navbar-inverse">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">Image details - upvotes/downvotes</a>
        </div>
        
    </nav><br/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
