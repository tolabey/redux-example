import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";


class Navbar extends PureComponent {

  render() {

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

export default withRouter(Navbar);
