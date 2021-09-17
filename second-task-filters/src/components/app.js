import React, {useState} from 'react';
import Index from "./filters/index";

const App = () => {
    const [filters, setFilters] = useState( {
        selected_fruits: null,
        selected_iphones: null,
        selected_names: null
    });
    const [uri, setUri] = useState('www.api.fruits')
    const buttonHandler = () => {
        if(filters.selected_fruits && filters.selected_names && filters.selected_iphones){
            setUri(uri.concat(`/?selected_fruits=${filters.selected_fruits.toString()}&selected_iphones=${filters.selected_iphones.toString()}&selected_names=${filters.selected_names.toString()}`))
        } else if(filters.selected_fruits && filters.selected_iphones){
            setUri(uri.concat(`/?selected_fruits=${filters.selected_fruits.toString()}&selected_iphones=${filters.selected_iphones.toString()}`))
        } else if(filters.selected_fruits && filters.selected_names){
            setUri(uri.concat(`/?selected_fruits=${filters.selected_fruits.toString()}&selected_names=${filters.selected_names.toString()}`))
        } else if(filters.selected_names && filters.selected_iphones){
            setUri(uri.concat(`/?selected_iphones=${filters.selected_iphones.toString()}&selected_names=${filters.selected_names.toString()}`))
        }else if(filters.selected_fruits && uri === 'www.api.fruits'){
            setUri(uri.concat(`/?selected_fruits=${filters.selected_fruits.toString()}`))
        } else if(filters.selected_names && uri === 'www.api.fruits'){
            setUri(uri.concat(`/?selected_names=${filters.selected_names.toString()}`))
        } else if(filters.selected_iphones && uri === 'www.api.fruits'){
            setUri(uri.concat(`/?selected_iphones=${filters.selected_iphones.toString()}`))
        }
    }
    return (
        <div>
          <Index setFilters={setFilters} filters={filters}/>
            {JSON.stringify(filters)}
            <br/>
            <button type='button' onClick={buttonHandler}>Сгенерировать ссылку при клике</button>
            <p>{uri}</p>
        </div>
    );
};

export default App;