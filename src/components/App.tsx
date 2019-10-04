import './App.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import { routes } from '../config/constants';
import { applicationActions } from '../store/actions';
import { RootState } from '../store/reducers';
import { Loader } from './molecules/Loader';
import { NavigationHeader } from './molecules/NavigationHeader';
import { About } from './screens/About';
import { Hiragana } from './screens/Hiragana';

interface TMapProps {
  initialized: boolean;
}

interface TActionProps {
  initialize: () => void;
}

type TProps = TMapProps & TActionProps & RouteComponentProps<any>;

class App extends React.Component<TProps> {
  componentDidMount() {
    this.props.initialize();
  }

  hiragana = ({ match }: RouteComponentProps<any>) => <Hiragana match={match} />;
  katakana = () => <div>Katakana</div>;
  numbers = () => <div>Numbers</div>;
  about = () => <About />;

  render() {
    return (
      <div className="app-outerContainer">
        {!this.props.initialized ? (
          <Loader />
        ) : (
          <div>
            <NavigationHeader location={this.props.location} />
            <div className="app-innerContainer">
              <Switch>
                <Route path={routes.hiragana.path} render={this.hiragana} />
                <Route path={routes.katakana} render={this.katakana} />
                <Route path={routes.numbers} render={this.numbers} />
                <Route path={routes.about} render={this.about} />
                <Redirect to={routes.hiragana.path} />
              </Switch>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): TMapProps => ({
  initialized: state.application.initialized,
});

export default withRouter(
  connect(
    mapStateToProps,
    { initialize: applicationActions.actions.initialize },
  )(App),
);
