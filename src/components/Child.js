import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import actionCreator from "../redux/actionCreator";


class Child extends PureComponent {


  render() {

    console.log('child props', this.props);
    const { name, setName } = this.props;

    return(
      <>
        <div className="child">
          <button onClick={() => {
              console.log('Action Oluştu')
              setName('Tola')
            }}
          >
            {name.split()}
          </button>
        </div>
      </>
    )
  }
}

function mapStateToProps(store) {
  return {
    name: store.get('name', 'undefined'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setName: (name) => dispatch(actionCreator('SET_NAME', name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);
