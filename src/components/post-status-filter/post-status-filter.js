import React from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons =[
            {name: 'all', label: 'Все'},
            {name: 'important', label: 'Избранное'},
        ]
    }
    
    render() {
        
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const buttonClass = active ? 'btn-primary' : 'btn-outline-secondary'
            
            return (
                <button 
                    key={name} 
                    className={`btn ${buttonClass}`} 
                    type="button"
                    onClick={() => this.props.onFilterSelect(name)}
                    >{label}
                </button>
            )
        })
        
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

