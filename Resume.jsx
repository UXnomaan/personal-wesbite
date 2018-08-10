import React from 'react';
import injectSheet from 'react-jss';
import MUButton from '@material-ui/core/Button';

const styles = {
  wrapper: {
    textAlign: 'center'
  }
};

const Resume = ({classes}) => {
  return (
    <div className={classes.wrapper}>
      <MUButton color='primary' size='large' variant='contained' onClick={()=> {
        window.open('https://www.dropbox.com/s/gqv55b84mdj5xre/Ahgharian_Nomaan_Resume_2.pdf?dl=0')
      }}>
      RESUME
      </MUButton>
    </div>
  );
};

export default injectSheet(styles)(Resume);