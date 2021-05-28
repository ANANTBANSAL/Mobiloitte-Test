import React from 'react';

import Postapi from './postapi.js';
import Getapi from './getapi.js';
import Delete from './delete.js';
import Updateapi from './updateapi.js';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {



    return (
        <div>
            <Switch>
                <Route exact path='/add' component={Postapi} />
                <Route exact path='/delete' component={Delete} />
                <Route exact path='/update' component={Updateapi} />
                <Route exact  path='/get'  >
                    <Getapi />
                </Route>
            </Switch>
        </div>
    );
}
export default Routes;