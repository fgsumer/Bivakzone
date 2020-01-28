import Bivakzones from './bivakzones.json';
import React from 'react';

const Filter= () => {

    return
        Bivakzones.features.map(bivazone => bivazone.properties.openfire === "yes")
        
    }

export default Filter;
