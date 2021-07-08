import React, { useEffect, useState } from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';

import data from '../../data/data';
export default function ParameterSelect() {
  //Write logic to render all countries as dropdown options
  const set = new Set();
  const options = [];
  const defaultOption = options[0];
  const [category, setCategory] = useState();
  useEffect(() => {
    getData();
  }, [category]);
  const getData = async () => {
    for (let i = 0; i < data.length; i++) {
      set.add(data[i].category);
    }
    for (let i of set.keys()) {
      options.push(i);
    }
  };
  return (
    <div className="parameter-select">
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Category"
        onChange={e => {
          setCategory(e.value);
          return;
        }}
      />
      <h4>{category}</h4>
    </div>
  );
}
