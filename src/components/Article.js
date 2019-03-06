import React from 'react' 
import PropTypes from 'prop-types' 

class Article extends React.Component {
    state = {
        displayBigText: false,
    }

    handleLinkClick = (e) => {
        e.preventDefault()
        this.setState({displayBigText: !this.state.displayBigText})
    }

    render() {
        const {articleData} = this.props;
        const {displayBigText} = this.state;
        return(
            <div className = "article">
                <p className="comments_author">{articleData.author}</p>
                <p className="comments_text">{articleData.text}</p>
                {
                    displayBigText ? <React.Fragment><p className="comments_big-text">{articleData.bigText}</p>
                        <a href="#hide" className='comments_hide' onClick={this.handleLinkClick}>Hide</a>
                    </React.Fragment> : 
                    articleData.bigText.trim().length > 0 ? <a href="#readmore" className='comments_readmore' onClick={this.handleLinkClick}>Extend</a> :
                    null
                }                
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired, 
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
}

export { Article }