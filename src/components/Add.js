import React from 'react' 

class Add extends React.Component {
    state = {
        nameValue: '',
        commentsValue: '',
        bigCommentsValue: '',
        agree: false
    }

    handleFormChange = (e) => {
        const {id,value} = e.currentTarget;
        this.setState({[id]: value})
    }

    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }

    handleButtonClick = (e) => {
        e.preventDefault()
        const { nameValue, commentsValue, bigCommentsValue} = this.state
        this.props.onAddComments({
            id: +new Date(),
            author: nameValue,
            text: commentsValue,
            bigText: bigCommentsValue
          })
    }

    validate = () => {
        const { nameValue, commentsValue, agree } = this.state
        if (nameValue.trim() && commentsValue.trim() && agree) {
            return true
        }
            return false
    }

    render() {
      return (
            <React.Fragment>
                <form className='add'>
                    <input className='add_author' id="nameValue" placeholder='Your name' onChange={this.handleFormChange} value={this.state.nameValue}/>
                    <textarea className='add_text' id="commentsValue" placeholder='Comment text' onChange={this.handleFormChange} value={this.state.commentsValue}></textarea>
                    <textarea className='add_big-text' id="bigCommentsValue" placeholder='Extended comment' onChange={this.handleFormChange} value={this.state.bigCommentsValue} rows="10"></textarea>
                    <label className='add_checkrule' id="agree" >
                        <input type='checkbox' onChange={this.handleCheckboxChange}/> I agree with rules.
                    </label>
                    <button className='add_btn' disabled={!this.validate()} onClick={this.handleButtonClick}>Add Comment!</button>
                </form>              
            </React.Fragment>
      )
    }
}

export { Add }