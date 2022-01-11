import React from 'react';
import {PrivateRoute, PublicRoute} from "../../router";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {store} from "../../store/store";
import {LOG_IN} from "../../store/actions";

const AppRoute = (props) => {
    const currentToken = localStorage.getItem('token')
        if (currentToken) {
            store.dispatch({type: LOG_IN, isLoggedIn: true, token: currentToken})
        }
    return (
        props.isLoggedIn
        ?
            <Switch>
                {PrivateRoute.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        component={route.element}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/map'/>
            </Switch>
                :
                <Switch>
                    {PublicRoute.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            component={route.element}
                            exact={route.exact}
                        />
                    )}
                    <Redirect to='/login'/>
                </Switch>

    );
};

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn, token: state.auth.token})
)(AppRoute)
