import React from 'react';

const Checkbox = ({name, setFilters, filters}) => {
    function checkHandler(e) {
        setFilters({...filters, selected_fruits: []})
        setTimeout(() => {
            if(e.target.checked){
                setFilters({...filters, selected_fruits: [ name]})
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