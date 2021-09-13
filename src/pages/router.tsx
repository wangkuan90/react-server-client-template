import React from 'react';
import { getCookie } from '../utils';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
interface routerItem {
    exact: boolean;
    name: string;
    path: string;
    component: () => Promise<any>;
    children?: routerItem[];
}

const LoginRouterArr = [{
    exact: false,
    name: 'menu',
    path: '/menu',
    component: () => import('./menu'),
    children: [{
        exact: true,
        name: 'home',
        path: '/home',
        component: () => import('./home')
    }],
}, {
    exact: true,
    name: 'Login',
    path: '/login',
    component: () => import('./login')
}, {
    exact: true,
    name: 'room',
    path: '/join-room/:type',
    component: () => import('./room')
}, {
    exact: true,
    name: 'game',
    path: '/game/:roomId',
    component: () => import('./game')
}];

const UnLoginRouterArr = [{
    exact: true,
    name: 'Login',
    path: '/login',
    component: () => import('./login')
}];

function getRouterPages(arr: routerItem[], parentPath = '') {
    const list = arr.map((item) => {
        const Component = React.lazy(item.component);
        const itemPath = parentPath + item.path;
        return (
            <Route
                key={item.name}
                path={itemPath}
                exact={!!item.exact}
            >
                <Component>
                    {item.children && getRouterPages(item.children, itemPath)}
                </Component>
            </Route>
        )
    });
    return (
        <Switch>
            {list}
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

interface AppProps {
    isLogin: boolean;
}

const App: React.FC<AppProps> = function ({ isLogin }) {

    return (
        <Router>
            <React.Suspense fallback={<div>loading...</div>}>
                {isLogin ? getRouterPages(LoginRouterArr) : getRouterPages(UnLoginRouterArr)}
            </React.Suspense>
        </Router>
    )
}

const mapStateToProps = (state: any) => {
    return {
        isLogin: state.userData.isLogin
    }
}

export default connect(mapStateToProps)(App)


function NotFound() {
    return <h2>404</h2>;
}

