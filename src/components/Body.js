import React, { PureComponent } from 'react';
import Child from "./Child";
import { Route } from 'react-router-dom';

class Body extends PureComponent {

render() {

  return(
    <div>

      Body
      <Route path={"/app/:id"} component={Child} />
    </div>
  )
}
}

export default Body;
