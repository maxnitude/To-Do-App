import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from  '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Написать что-нибудь в форме снизу', important: false, id: 1000},
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.newId = 1001;
        }
 
    deleteItem (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice (0, index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];
            return {
                data: newData
            }
        });
    }

    addItem (body) {
        const newItem = {
            label: body || null,
            important: false,
            id: this.newId++
            }

        this.setState(({data}) => {
            if (newItem.label === null || newItem.label.length > 40 || !newItem.label.trim()) {   
                return [...data]
            } else {
                const newData = [...data, newItem];
                return {
                data: newData
                }
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice (0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0 ) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'important') {
            return items.filter(item => item.important)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render () {
        const {data, term, filter} = this.state;
        const allPosts = data.length;
        const importantPosts = data.filter(item => item.important).length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        
        return (
            <div className="app">
                <AppHeader
                    allPosts={allPosts}
                    importantPosts ={importantPosts}/>
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

