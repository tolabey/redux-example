import React from 'react';
import I from 'immutable';


export const Context = React.createContext({});


export class CProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: ''};
  }

  render() {
    return (
      <Context.Provider
        value={
          {
            value: this.state,
            setter: (val) => this.setState(val)
          }
        }
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}


export default CProvider;
