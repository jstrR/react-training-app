import React from 'react' 
import { Article } from './Article'


class Comments extends React.Component {

    renderComments = () => {
        const {data} = this.props;
        let CommentsTemplate = null;
        if(data.length > 0) {
            CommentsTemplate = data.map(function(item) {
                return(
                    <Article articleData = { item } key = {item.id}/>
                )
            })
        }   else CommentsTemplate = <p>Unfortunately, no Comments</p>
        return CommentsTemplate;
    }

    render() {
        const {data} = this.props;       
        return(
            <div className="Comments">
                {this.renderComments()}
                {
                data.length > 0 ? <strong>Total Comments: {data.length}</strong> : null
                }                
            </div>
        )
    }    
}

export { Comments }