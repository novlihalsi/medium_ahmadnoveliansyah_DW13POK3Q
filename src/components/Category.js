import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

 

// list of items
const list = [
    { name: 'HOME', url: '#' },
    { name: 'ONEZERO', url: '/categorypage' },
    { name: 'ELEMENTAL', url: '#' },
    { name: 'GEN', url: '#' },
    { name: 'ZORA', url: '#' },
    { name: 'FORGE', url: '#' },
    { name: 'HUMAN PARTS', url: '#' },
    { name: 'MARKER', url: '#' },
    { name: 'LEVEL', url: '#' },
    { name: 'MODUS', url: '#' },
    { name: 'MC', url: '#' },
    
  ];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected, url}) => {
  return<Link to={url}><Button style={{marginRight:'10px'}}>{text}</Button></Link>
  
  // <div style={style.menuitem}>{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name, url} = el;
 
    return <MenuItem text={name} key={name} url={url} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
 
class Category extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div style={{marginBottom:10}}>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Category;