import React, {Component} from 'react'

// the App component should render out the GifListContainer component
  export default class GifListContainer extends Component {
    constructor (props){
      super(props)
      this.state = {
        searchTerm: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event){
      this.setState({
        searchTerm: event.target.value
      })
    }

    handleSubmit (event){
      event.preventDefault()
      this.props.onSubmit(this.state.searchTerm)
    }

    render (){
      return(
      <div>
        <form onSubmit={this.handleSubmit} action="#">
          <input value={this.state.search} onChange={this.handleChange} name="search" type="text"></input>
          <input type="submit" />
        </form>
      </div>
    )
    }
}
