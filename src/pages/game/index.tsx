import React, { useEffect } from 'react';
import './index.less';
import {
    useHistory
} from "react-router-dom";
import { connect } from 'react-redux';

function Home({ homeChess }: any) {

    return (
        <p>
            准备开始下起了哦
        </p>
    )
}

const mapStateToProps = (state: any) => ({
    homeChess: state.homeChess
})

export default connect(mapStateToProps)(Home)
