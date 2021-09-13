import React, { useEffect } from 'react';
import './index.less';
import {
    useHistory,
    useParams
} from "react-router-dom";
import { connect } from 'react-redux';
import { startMenu, chessWordMenu, findMenu } from '../../utils/list';
import ListItem from '../../components/list/index'
// url包含的参数
interface ListTypeInterface {
    menuName: string
}

const menuListData: any = {
    startMenu,
    chessWordMenu,
    findMenu
}
function List({ homeChess }: any) {
    let history = useHistory();
    let { menuName } = useParams<ListTypeInterface>();

    useEffect(function () {
    }, []);

    const menuList = menuListData[menuName].map((items: any[], index: number) => (
        <div className="items mb4">
            {
                items.map((inner, index) => (
                    <ListItem innerData={inner} key={index}></ListItem>
                ))
            }
        </div>
    ))

    return (
        <div className="pg-list">
            <div className="body ml22 mr22 mt22">
                {menuList}
            </div>
            我是学期的界面{menuName}
        </div>
    )
}
// 这个函数允许我们将store中的数据作为props绑定到组件上。
const mapStateToProps = (state: any) => ({
    homeChess: state.homeChess
})

export default connect(mapStateToProps)(List)
