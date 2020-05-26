import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from "./DropdownItem";

DropdownList.propTypes = {
    
};

function DropdownList(props) {
    const { items } = props;
    return (
        <ul data-id={"dropdown"} className={"dropdown"}>
            {items.map((item,i)=><DropdownItem item={item} key={i} />)}
        </ul>
    );
}

export default DropdownList;