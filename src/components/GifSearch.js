import React from 'react';


class GifSearch extends React.Component {
  render() {
    return (
      <form>
        <input value={this.props.search} onChange={this.props.handleChange} />
        <button onClick={ this.props.fetchshit }>HAY</button>
      </form>
    )
  }

}


export default GifSearch
