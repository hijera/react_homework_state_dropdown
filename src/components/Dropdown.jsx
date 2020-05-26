import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DropdownList from "./DropdownList";

Dropdown.propTypes = {
    
};

function Dropdown(props) {
    const { isOpen } = props;
    const [currentStatus,setStatus] = useState(isOpen);
    const toggleOpen = evt => {

        setStatus((prevMenuActive) => !prevMenuActive);

    };
    const items=[
        {url:"https://google.ru",title:'Profile Information',highlight:true},
        {url:"#",title:'Change Password'},
        {url:'#',title:'Become PRO'},
        {url:'#',title:'Help',highlight:true},
        {url:'#',title:'Log Out'}
    ];

    return (
        <div className={"container"}>
            <div  className={"dropdown-wrapper "+(currentStatus?'open':'')}>
                <button className={"btn"} onClick={toggleOpen}>
                    <span>Account Settings</span>
                    <i className={"material-icons"}>public</i>
                </button>
                <DropdownList items={items} />
            </div>
        </div>
    );
}

export default Dropdown;