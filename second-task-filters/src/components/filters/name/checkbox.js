import React from 'react';

const Checkbox = ({name, setFilters, filters}) => {
    function checkHandler(e) {
        setFilters({...filters, selected_names: []})
        setTimeout(() => {
            if(e.target.checked){
                setFilters({...filters, selected_names: [ name]})
            }
        }, 0)
    }
    return (
        <label>
            {name}
            <input type="checkbox" onClick={checkHandler}/>
        </label>
    );
};

export default Checkbox;