import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import {withConsumer} from "../context/Consumer";


class Navbar extends PureComponent {

  render() {
    console.log('this.NABBBAR', this.props)

    return(
      <>
        <div className="child">
          <button onClick={() => this.props.history.push("/child")}>
            TIK
          </button>
        </div>
      </>
    )
  }
}

export default withRouter(withConsumer(Navbar));
