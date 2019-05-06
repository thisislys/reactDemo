import React, { Component } from 'react';
import { getTopListInfo } from 'api/RequestData'

class TopList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TopListCont: []
        }
    }
    componentDidMount() {
        this._getTopListInfo()
    }
    _getTopListInfo() {
        getTopListInfo().then((res) => {
            console.log(res)
            this.setState({
                TopListCont: res.data.TopListInfo.data.topList
            })
        })
       
    }
    render() {
        const { TopListCont } = this.state;
        return <div className='topList_wapper'>
            {
                TopListCont.length && TopListCont.map((item, index) => {
                    return <dl className='topic_info' key={index} onClick={()=>{
                        //   this.props.api.history.push('/detail')
                        this.props.api.history.push({
                             pathname:`/detail/${item.id}`
                        })
                    }}>
                        <dt><img src={item.picUrl} alt="" /></dt>
                        <dd>
                            <h3>{item.topTitle}</h3>
                            {
                                item.songList.map((song, index) => {
                                    return <p key={index}><span>{index + 1}</span> {song.songname}</p>
                                })
                            }
                        </dd>
                    </dl>
                })
            }

        </div>
    }
}

export default TopList