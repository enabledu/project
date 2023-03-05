import './SideBar.css'
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";
import Server from './../Server/Server';
import { useState } from 'react';




const SideBar = () =>{

    // const [showFeatures, setShowFeatures] = useState(false);

    // const handleClick = () => {
    //     setShowFeatures(!showFeatures);
    //   };

    const [selectedFeatures, setSelectedFeatures] = useState(['Q & A']);

    const addFeature = (feature) => {
        setSelectedFeatures([...selectedFeatures, feature]);
    }

    const features = ['Q & A', 'Quizes']


    const navLinkStyles = ({ isActive }) =>{
        return {
            backgroundColor: isActive ? '#F3F4F6' : '#ffffff'   
        }
    }

    return(

        <div className='sideBar'>
            <div className='sideIcons'>
                <div className='top'>
                    <Server/>
                </div>
                <div className='footer'>
                    <span><RxAvatar/></span>
                </div>
            </div>
        
            <nav className='sideNavs' >
                <div className='navItemsContainer'>


                    {selectedFeatures.map((feature,index) => (
                        <NavLink key={index} style={navLinkStyles} className='navItem' to={`/feature/${index}`}> {feature} </NavLink>
                    ))}

                    {/* <button className="add"> + Add</button> */}
                    

                    {/* {features.map((feature) => (

                        <button key={feature} onClick={() => addFeature(feature)}>
                            {feature}
                        </button>
                    ))} */}
        

                </div>      
                
            </nav>
        
      </div>
    )
}

export default SideBar;


//  <NavLink style={navLinkStyles} className='navItem' to='/'> Home </NavLink> 
//  <NavLink style={navLinkStyles} className='navItem' to='Q&A'> Q & A </NavLink>  