import React, { useEffect } from 'react';

import { WorldMap } from 'react-svg-worldmap';

export default function Map() {
 

  const data = [
    { country: 'au', value: 1389618778 }, // australia
    { country: 'at', value: 1389618778 }, // austria
    { country: 'by', value: 1389618778 }, // belarus
    { country: 'be', value: 1389618778 }, // belgium
    { country: 'bg', value: 1389618778 }, // bulgaria
    { country: 'ca', value: 1389618778 }, // canada
    { country: 'hr', value: 1389618778 }, // croatia
    { country: 'cy', value: 1389618778 }, // cyprus
    { country: 'cz', value: 1389618778 }, // czech republic
    { country: 'dk', value: 1389618778 }, // denmark
    { country: 'ee', value: 1389618778 }, // estonia
    { country: 'eu', value: 1389618778 }, // european union
    { country: 'fi', value: 1389618778 }, // finland
    { country: 'fr', value: 1389618778 }, // france
    { country: 'de', value: 1389618778 }, // germany
    { country: 'el', value: 1389618778 }, // greece
    { country: 'hu', value: 1389618778 }, // hungary
    { country: 'is', value: 1389618778 }, // iceland
    { country: 'ie', value: 1389618778 }, // ireland
    { country: 'it', value: 1389618778 }, // italy
    { country: 'jp', value: 1389618778 }, // japan
    { country: 'lv', value: 1389618778 }, // latvia
    { country: 'li', value: 1389618778 }, // liechtenstein
    { country: 'lt', value: 1389618778 }, // lithuania
    { country: 'lu', value: 1389618778 }, // luxemborg
    { country: 'mt', value: 1389618778 }, // malta
    { country: 'nl', value: 1389618778 }, // netherland
    { country: 'nz', value: 1389618778 }, // newzealand
    { country: 'no', value: 1389618778 }, // norway
    { country: 'pl', value: 1389618778 }, // poland
    { country: 'pt', value: 1389618778 }, // portugal
    { country: 'ro', value: 1389618778 }, // romania
    { country: 'ru', value: 1389618778 }, // russian federation
    { country: 'sk', value: 1389618778 }, // slovakia
    { country: 'es', value: 1389618778 }, // slovenia
    { country: 'se', value: 1389618778 }, // spain
    { country: 'ch', value: 1389618778 }, // switzerland
    { country: 'tr', value: 1389618778 }, // turkey
    { country: 'ua', value: 1389618778 }, // ukraine
    { country: 'uk', value: 1389618778 }, // united kingdom
    { country: 'us', value: 1389618778 }, // united states
  ];
  return (
    <div className="map">
      <WorldMap
        color="blue"
        title="Green House Gas Emmission"
        value-suffix="people"
        size="lg"
        data={data}
      />
    </div>
  );
}
