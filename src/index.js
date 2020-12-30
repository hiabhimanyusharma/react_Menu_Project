import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import menu from './data'
import Categories from './Categories'
import Items from './Items'

const type = ['all', ...new Set(menu.map((item)=>{
  return item.category;
}))]

const Container = () => {
  const [menuItems,setMenuItems] = useState(menu);
  const [categories,setCategories] = useState(type);

  const change = (category) => {
    if(category==="all") {
      setMenuItems(menu);
    }else {
      const newMenu = menu.filter((item)=>{
        return item.category === category
      })
    setMenuItems(newMenu);
    }
  }

  return (
    <div className="container">
      <h1 className="jumbotron">Our Menu</h1>
      <Categories categories={categories} change={change} />
      <Items menuItems={menuItems}/>
    </div>
  );
}

ReactDOM.render(
  <Container/>,
  document.getElementById('root')
);
