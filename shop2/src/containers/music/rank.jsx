import React from "react";

import { connect } from "react-redux";
import { getRankList } from "api/rank";
import { Link } from "react-router-dom";


const ListItem = (props) => {
    const { item } = props;
    return <li>
        <Link to={{
            pathname:"/music/detail",
            aaadsfsafdsf:{
                asddfsdafbsadfk:"sdfsdf"
            },
            params:{
                id:6656
            },
            state:{
                id:888
            }
        }}>
            <dl className="clearfix mb15">
                <dt className="col-xs-4">
                    <img src={`http://y.gtimg.cn/music/photo_new/T002R90x90M000${item.data.albummid}.jpg?max_age=2592000`} alt=""/>
                </dt>
                <dd className="col-xs-8">
                    <h4>{item.data.songname}</h4>
                    <ol>
                        {
                            item.data.singer.map(item=>{
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ol>
                </dd>
            </dl>
        </Link>
    </li>
}
class Rank extends React.Component {
    componentDidMount() {
        this._getRankList();
    }
    _getRankList() {
        const { update } = this.props;
        getRankList().then(res => {
            let payload = res.data.datalist.songlist;
            update(payload)
        })
    }
    render() {
        const { rankList } = this.props;
        return <div className="wraper">
            <ul className="pt15">
                {
                    rankList.map(item=>{
                        return  <ListItem key={item.data.songmid} item={item}/>
                    })
                }
            </ul>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.RankReducer;
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: "UPDATE", payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank);