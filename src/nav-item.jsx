'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const NavItem = (props) => {
  // CSS classes
  let type = {
    divder: 'uk-nav-divder',
    header: 'uk-nav-header'
  };

  const cssClassNames = uikit.helpers.cleanClasses([
    props.classes,
    props.active ? 'uk-active' : null,
    type[props.type] ? type[props.type] : null,
    props.parent ? 'uk-parent' : null,
    props.className
  ]);


  // Elements
  const subtitle = props.subtitle ? <div>{props.subtitle}</div> : null;

  const link = <a
    href={props.href}
  >
    {props.label}
    {subtitle}
  </a>;


  const component = {
    divider: <li
      {...props}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
    </li>,

    header: <li
      {...props}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.label}
    </li>,

    link: <li
      {...props}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {link}
      {props.children}
    </li>,

    item: <li
      {...props}
      className={cssClassNames}
      data-kitid={props.kitid}
    >
      {props.children}
    </li>
  };


  // Return Component
  return component[props.type] || component['link'];

};


NavItem.propTypes = {
  active    : React.PropTypes.bool,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  divder    : React.PropTypes.bool,
  header    : React.PropTypes.bool,
  href      : React.PropTypes.string,
  kitid     : React.PropTypes.string,
  label     : React.PropTypes.string,
  parent    : React.PropTypes.bool,
  type      : React.PropTypes.oneOf(['divider', 'link', 'header', 'item'])
};


export default uikit.base(NavItem);