import './About.scss';

import { Typography } from '@material-ui/core';
import * as React from 'react';

export const About = () => (
  <div>
    <div className="about-part">
      <div className="about-title">
        <Typography variant="h4">About</Typography>
      </div>
      <Typography>
        This website was made to practice the basics of the Japanese language. While taking lessons, I found most of the
        tools (websites, apps...) lacking a combination of features I wanted, so I decided to make my own.
      </Typography>
    </div>
    <div>
      <div className="about-title">
        <Typography variant="h4">Changelog</Typography>
      </div>
      <Typography variant="h5">0.3.0</Typography>
      <ul>
        <li>
          <Typography>Added quick reading practice page</Typography>
        </li>
        <li>
          <Typography>Added tooltips in the drawer explaining the use of each page</Typography>
        </li>
      </ul>
      <Typography variant="h5">0.2.0</Typography>
      <Typography>Decided to go for a restyle.</Typography>
      <ul>
        <li>
          <Typography>Switched style from Ant Design to Material Design</Typography>
        </li>
        <li>
          <Typography>Added About page with Changelog</Typography>
        </li>
      </ul>
      <Typography variant="h5">0.1.0</Typography>
      <Typography>Initial release.</Typography>
      <ul>
        <li>
          <Typography>Overview of Hiragana</Typography>
        </li>
        <li>
          <Typography>Flash card mode for Hiragana</Typography>
        </li>
      </ul>
    </div>
  </div>
);
