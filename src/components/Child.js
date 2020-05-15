import React, { PureComponent } from 'react';

import {withConsumer} from "../context/Consumer";


class Child extends PureComponent {


  render() {

    console.log('child props', this.props);

    return(
      <>
        <div className="child">
          <button onClick={() => {
              console.log('Action Oluştu');

              console.log('this.props', this.props)
             this.props.context.setter({mustafa: 'mustafa'})
             this.props.context.setter({tola: 'mustafa'})
            }}
          >
            {'Burası'.split()}
          </button>
        </div>
      </>
    )
  }
}


export default withConsumer(Child);
