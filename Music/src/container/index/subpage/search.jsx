import React, { Component } from 'react';

class Search extends Component {
    render() {
        return <div>
            <form className='mod_search_bar'>
                 <input type="text" placeholder='搜索歌曲'/>
            </form>
            <div className='hot_keys'>
                 <p className='result_tit'>热梦搜索</p>
            </div>
        </div>
    }
}

export default Search