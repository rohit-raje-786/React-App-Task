import React, { useEffect, useState } from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import Graph from './graph';
import data from '../../data/data';
import Map from '../map/index';
export default function MainData() {
  //Write logic to render all countries as dropdown options
  let Country_or_Area = new Set();
  let Year = new Set();
  let Category = new Set();
  let Value = new Set();

  let CountryArray = [];
  let YearArray = [];
  let CategoryArray = [];
  let ValueArray = [];

  let Avg;

  let defaultOptionCountry = CountryArray[0];
  let defaultOptionYearFrom = YearArray[5];
  let defaultOptionYearTo = YearArray[0];
  let defaultOptionCategory = CategoryArray[0];

  const [yearsFrom, setYearsFrom] = useState(1990);
  const [yearsTo, setYearsTo] = useState(2014);
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState();
  const [value, setValue] = useState([]);

  const [avg, setAvg] = useState(0);

  useEffect(() => {
    getData();
    <Map />;
    <Graph from={yearsFrom} to={yearsTo} country={country} values={value} />;

    console.log(avg, country);
  }, [yearsFrom, yearsTo, country, category, avg]);

  let getData = async () => {
    for (let i = 0; i < data.length; i++) {
      Country_or_Area.add(data[i].country_or_area);
      Year.add(data[i].year);
      Category.add(data[i].category);
    }

    for (let i of Country_or_Area.keys()) {
      CountryArray.push(i);
    }
    for (let i of Year.keys()) {
      YearArray.push(i);
    }
    for (let i of Category.keys()) {
      CategoryArray.push(i);
    }
  };
  let changeCategory = cat => {
    Value.clear();

    ValueArray = [];
    var filterdata = data.filter(function (x) {
      return x.country_or_area == country && x.category == cat;
    });
    for (let i = 0; i < filterdata.length; i++) {
      Value.add(filterdata[i].value);
    }
    for (let i of Value.keys()) {
      ValueArray.push(parseInt(i));
    }
    Avg = 0;
    for (let i = 0; i < ValueArray.length; i++) {
      Avg += ValueArray[i];
    }
    Avg = Avg / ValueArray.length;
    setAvg(Avg);
    setValue(ValueArray);
    return;
  };
  let changeCountry = country => {
    Value.clear();

    ValueArray = [];
    var filterdata = data.filter(function (x) {
      return x.country_or_area == country && x.category == category;
    });
    for (let i = 0; i < filterdata.length; i++) {
      Value.add(filterdata[i].value);
    }
    for (let i of Value.keys()) {
      ValueArray.push(parseInt(i));
    }

    Avg = 0;
    for (let i = 0; i < ValueArray.length; i++) {
      Avg += ValueArray[i];
    }
    Avg = Avg / ValueArray.length;
    setAvg(Avg);
    setValue(ValueArray);
    return;
  };
  return (
    <>
      <div className="country-select">
        <Dropdown
          options={CountryArray}
          value={defaultOptionCountry}
          placeholder="Country"
          onChange={e => {
            setCountry(e.value);
            changeCountry(e.value);
            return;
          }}
        />
      </div>
      <div className="parameter-select">
        <Dropdown
          options={YearArray}
          value={defaultOptionYearFrom}
          placeholder="TimePeriod From"
          onChange={e => {
            setYearsFrom(e.value);

            return;
          }}
        />
      </div>
      <div className="parameter-select">
        <Dropdown
          options={YearArray}
          value={defaultOptionYearTo}
          placeholder="TimePeriod To"
          onChange={e => {
            setYearsTo(e.value);

            return;
          }}
        />
      </div>
      <div className="parameter-select">
        <Dropdown
          options={CategoryArray}
          value={defaultOptionCategory}
          placeholder="Category"
          onChange={e => {
            setCategory(e.value);
            changeCategory(e.value);
            return;
          }}
        />
      </div>
      <br />
      <br />
      <div>
        <Graph from={yearsFrom} to={yearsTo} country={country} values={value} />
      </div>
     
        
      
    </>
  );
}
