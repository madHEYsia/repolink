/**
*
* ButtonAntd
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button } from 'antd';

class ButtonAntd extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p>button text</p>
        <Button>ANTD BUTTON</Button>
      </div>
    );
  }
}

ButtonAntd.propTypes = {

};

export default ButtonAntd;
