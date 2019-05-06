import React, { Component } from 'react';
import axios from 'axios'
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            DetailList: [],
            DetailTop: []
        }
    }
    componentDidMount() {
        this._getDetailList()
    }

    _getDetailList() {
        axios.get('/getDetail', {
            params: {
                id: this.props.api.match.params.id
            }
        }).then((res) => {
            this.setState({
                DetailList:res.data.getDetail.songlist,
                DetailTop:res.data.getDetail.topinfo
            })
        })
    }

    render() {
        const { DetailList, DetailTop } = this.state;
        return <div className="detail">
            <div className="top">
                <div className="album">
                    <div className="img">
                        <img src={DetailTop.pic_v12} alt="" />
                    </div>
                    <div className="right">
                        <h3>{DetailTop.ListName}</h3>
                        <div className="date">第347天</div>
                        <div className="date">2018-12-13 更新</div>
                    </div>
                </div>
                <div className="bottom">
                    <button>播放全部</button>
                </div>
            </div>
            <div className="section">
                <div className="tit">排行榜共 {DetailList.length}首</div>
                <ul className="list">
                    {
                        DetailList.length && DetailList.map((item, index) => {
                            return <li key={index}>
                                <div className="num">{index + 1}</div>
                                <div className="con">
                                    <div className="song">{item.data.songname}</div>
                                    <div className="singer">{item.data.singer[0].name}</div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

export default Detail