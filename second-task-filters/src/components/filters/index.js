import React from 'react';
import FruitFilter from "./fruit/fruitFilter";
import NameFilter from "./name/nameFilter";
import PhoneFilter from "./phone/phoneFilter";

const Index = ({setFilters, filters}) => {
    return (
        <form className='filter-form'>
            <FruitFilter setFilters={setFilters} filters={filters}/>
            <PhoneFilter setFilters={setFilters} filters={filters}/>
            <NameFilter setFilters={setFilters} filters={filters}/>
        </form>
    );
};

export default Index;