import React from 'react';
import { Comments } from './components/Comments';
import { Add } from './components/Add';

class App extends React.Component {

  state = {
    commentsStack: JSON.parse(localStorage.getItem("commentsData")),
    isLoading: false
  }

  componentWillMount() {
    console.log(this.state.commentsStack)
    const {commentsStack} = this.state
    if(!commentsStack){
      this.setState({commentsStack: []})
    } 

    /*download comments from server
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/commentsData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('server data is loaded')
        this.setState({ isLoading: false, comments: data })
      })*/
  }
  
  
  handleAddcomments = data => {
    console.log(data)
    let {commentsStack} = this.state
    let newComment = [...commentsStack, data]
    localStorage.setItem("commentsData", JSON.stringify(newComment))
    this.setState({ commentsStack: JSON.parse(localStorage.getItem("commentsData")) })    
  }

  render(){
    const { commentsStack, isLoading } = this.state
    console.log(commentsStack)
    return(
      <React.Fragment>
        <h3>Comments</h3>
        {isLoading && <p>Загружаю...</p>}
        <Comments data={commentsStack} />
        <Add onAddComments = {this.handleAddcomments}/>
      </React.Fragment>
      )
  }
}

export default App;
