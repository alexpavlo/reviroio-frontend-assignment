import React from 'react';
import Checkbox from "./checkbox";
import arrays from "../../arrays";

const FruitFilter = ({setFilters, filters}) => {
    return (
        <div className='filter'>
            Выберите фрукт
            {arrays.Fruits.map((el, idx) => (
                <Checkbox key={idx} name={el} setFilters={setFilters} filters={filters}/>
            ))}
        </div>
    );
};

export default FruitFilter;