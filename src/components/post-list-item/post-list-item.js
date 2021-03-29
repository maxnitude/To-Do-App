import React from 'react';
import './post-list-item.css';


export default class PostListItem extends React.Component {

    render() {
        const {label, onDelete, onToggleImportant, important} = this.props;
        let classNames = "app-list-item";
        
        if (important) {
            classNames += " important";
        }

        return (
            <div className={classNames}>
                <p className="app-list-item-label" >{label}</p>
                <div className="button-container">
                    <button 
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                </div>
        </div>
        );
    }
}
