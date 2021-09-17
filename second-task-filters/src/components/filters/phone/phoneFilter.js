import React from 'react';
import arrays from "../../arrays";
import Checkbox from "./checkbox";

const PhoneFilter = ({setFilters, filters}) => {
    return (
        <div className='filter'>
            Выберите Iphone
            {arrays.Iphones.map((el, idx) => (
                <Checkbox key={idx} name={el} setFilters={setFilters} filters={filters}/>
            ))}
        </div>
    );
};

export default PhoneFilter;