import React, { PureComponent } from 'react';

class Input extends PureComponent {

  render() {
    const { title, ...rest } = this.props;

    return(
        <div className="course-input">
          <div>{title}</div>
          <input
            {...rest}
            placeholder={"BUDUR"}
          />
        </div>
    )
  }
}

export default Input;
