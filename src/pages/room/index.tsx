import React, { useEffect, useState } from 'react';
import './index.less';
import {
    useHistory,
    useParams
} from "react-router-dom";
import { connect } from 'react-redux';
import { RoomModel } from '../../api/model';
import MaskDom from '../../components/maskdom';
import Nav from './nav';
import List from './list';
import Rule from './rule';
import { getGameInfoByType, GameTypeInterface } from '../../utils/game';

interface FunParamsType {
    roomList: RoomModel[]
}

const Room: React.FC<FunParamsType> = function ({ roomList }) {
    let history = useHistory();
    let { type } = useParams<GameTypeInterface>();
    let info = getGameInfoByType(type);
    let [rule, setRule] = useState(false);
    useEffect(function () {
    }, []);

    function goLogin() {
        history.push('/login');
    }

    return (
        <div className="pg-room">
            <Nav title={info.name}></Nav>
            <List list={roomList}></List>
            <MaskDom>
                <div className="nav-con" onClick={() => setRule(true)}>创建房间</div>
            </MaskDom>
            {rule && <Rule type={type} closeFn={setRule} />}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    roomList: state.roomList
})

export default connect(mapStateToProps)(Room);
