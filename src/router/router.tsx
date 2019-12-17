import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import IndexModule from '../pages/index';
import RecordModule from '../pages/record';
import StatisticsModule from '../pages/statistics';

//引入一些模块
import { Switch, Route } from "react-router-dom";

class Routes extends React.Component<RouteComponentProps, any> {
    public render() {
        return (
            <Switch>
                <Route exact path="/" component={IndexModule} ></Route>
                <Route exact path="/index" component={IndexModule} ></Route>
                <Route exact path="/record" component={RecordModule} ></Route>
                <Route exact path="/statistics" component={StatisticsModule} ></Route>
            </Switch>
        );
    }
}

export default withRouter(Routes);