import * as React from 'react';
  

const Actions = (props) => {
    return (
      <ul>
        {props.actions.map(
          (item) => 
          <Item key={item.id} item={item}/>
        )}
      </ul>
    );
  }


const Item = (props) => {

  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.action}</a>
      </span>
    </li>
  )
}

export { Actions }