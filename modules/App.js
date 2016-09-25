import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
})
