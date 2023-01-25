import * as React from 'react';

const Search = () => {
    const handleChange = (event) => {
      // synthetic event
      console.log(event);
      // value of target (here: input HTML event)
      console.log(event.target.value);
    }
    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
    );
  }


export { Search };