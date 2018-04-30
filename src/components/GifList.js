import React from 'react';

class GifList extends React.Component {

  render() {
    console.log(this.props.gifs)
    const gifs = this.props.gifs.map((things) => <img src={things.images.original.url}/>)

    return (
      <ul>
        {gifs}
      </ul>
    )
  }
}

export default GifList
