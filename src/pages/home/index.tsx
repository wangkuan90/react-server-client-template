import React, { useEffect } from 'react';
import './index.less';
import {
    useHistory
} from "react-router-dom";
import { connect } from 'react-redux';
import chessKingIndex from "../../assets/img/chess-king-index.png";

type RoomType = 'xiang' | 'tian' | 'wei';
function Home({ homeChess, homeNews }: any) {
    let history = useHistory();
    useEffect(function () {
    }, []);

    function goRoom(type: RoomType) {
        history.push(`/join-room/${type}`);
    }


    // const tabItems
    // console.log(listItems);
    return (
        <div className="pg-home">
            {/* <button type="button" onClick={() => goLogin()}>goLogin1</button>
            <button onClick={goLogin} className="fs20"> goLogin!</button> */}
            <p className="flex flex-justify-center mb20">
                <img src={chessKingIndex} />
            </p>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        homeChess: state.homeChess,
        homeNews: state.homeNews
    }
}

export default connect(mapStateToProps)(Home)
