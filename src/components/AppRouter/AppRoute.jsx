import React, {useContext} from 'react';
import {PrivateRoute, PublicRoute} from "../../router";
import {Redirect, Route, Switch} from "react-router-dom";
import AuthContext from "../../auth/AuthContext";

const AppRoute = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        isLoggedIn
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

export default AppRoute
