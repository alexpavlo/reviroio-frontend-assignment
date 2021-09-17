import React from 'react';
import arrays from "../../arrays";
import Checkbox from "./checkbox";

const NameFilter = ({setFilters, filters}) => {
    return (
        <div className='filter'>
            Выберите имя
            {arrays.Names.map((el, idx) => (
                <Checkbox key={idx} name={el} setFilters={setFilters} filters={filters}/>
            ))}
        </div>
    );
};

export default NameFilter;