import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const TrackingScence = React.lazy(() => import('./container/tracking'));
const EarthTrackingScence = React.lazy(() => import('./container/earthTracking'));
const ModelTrackingScence = React.lazy(() => import('./container/3Dmodel'));

const AppRouter = () => {

    return (
        <>
            <Suspense fallback={<p>Loading ...</p>}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <TrackingScence />
                        </Route>
                        <Route exact path="/earth">
                            <EarthTrackingScence />
                        </Route>
                        <Route exact path="/model">
                            <ModelTrackingScence />
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        </>
    )
}
export default AppRouter;