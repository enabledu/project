import React , { useState }from 'react'
import './features.css';

const Feature=()=> {

    const [list, setList] = useState([<li>Q & A</li>]);
    const [value, setValue] = useState("");

    const add = () => {
        let tempArr = list;
        tempArr.push(value);
        setList(tempArr);
        setValue("");
        
    };


        
    return (
        <div className="feat">
            <div className='icons'>
                
            </div>
        <div className='list'>
        <ul>
            {list.map((item) => <li>{item} </li>)}
        </ul>
        {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}
        
        <button onClick={add} className='add'> + Add </button>
        
       
       </div>
      </div>
  
   
    );



}

export default Feature;