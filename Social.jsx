import React from 'react';
import injectSheet from 'react-jss';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/lib/fa';

const styles = {
    bannerWrapper: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    banner: {
        display: 'flex',
        flex: {
            basis: null,
            direction: 'row',
            flow: null,
            grow: null,
            shrink: null,
            wrap: null
        }
    }
};

const Social = ({ classes }) => {
    const info = [
        { name: 'Github', url: 'https://github.com/ahgharian', icon: <FaGithub size="60" /> },
        { name: 'Twitter', url: 'https://twitter.com/ahgharian', icon: <FaTwitter size="60" /> },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/nomaan-ahgharian-0382a12a/',
            icon: <FaLinkedin size="60" />
        }
    ];

    return (
        <div className={classes.bannerWrapper}>
            {info.map(social => (
                <span className={classes.banner}>
                    <a href={social.url}> {social.icon}</a>
                </span>
            ))}
        </div>
    );
};

export default injectSheet(styles)(Social);
