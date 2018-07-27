import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    imageWrapper: {
        display: 'flex',
        margin: 80,
        justifyContent: 'space-around'
    },
    image: {
        borderRadius: 1000,
        textAlign: 'center'
    }
};

const Banner = ({ classes }) => {
    return (
        <div className={classes.imageWrapper}>
            <img
                className={classes.image}
                src="https://avatars0.githubusercontent.com/u/3068499?s=400&u=f9a33f50256300c9f39b5206e661bf8506d95f7c&v=4"
                alt=""
            />
        </div>
    );
};

export default injectSheet(styles)(Banner);
