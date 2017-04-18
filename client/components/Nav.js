import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
        return (
            <ul>
              <li>
              	<a href="#"> Home </a>
           		</li>
           		<li>
              	<a href="#"> About </a>
           		</li>
           		<li>
              	<a href="#"> Sign up </a>
           		</li>
            </ul>
        );
    }
}