import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


const url = 'http://api.giphy.com/v1/gifs/search?q='
const other_bullshit = '&api_key=dc6zaTOxFJmzC'


class GifListContainer extends React.Component {

  state = {
    search: "",
    gifs: []
  }

  getGifs = (e) => {
    e.preventDefault()
    fetch(url + this.state.search + other_bullshit).then(r => r.json()).then(json => this.setState({gifs: json.data}))
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render () {
    return (
      <div>
        < GifSearch search={this.state.search} handleChange={this.handleChange} fetchshit={this.getGifs}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}

export default GifListContainer
