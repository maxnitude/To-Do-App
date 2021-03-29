import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdate = this.onUpdate.bind(this);
    } 
    
    onUpdate(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            <input  
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdate}
            />
        )
    }
}
