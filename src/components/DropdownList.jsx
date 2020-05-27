import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from "./DropdownItem";
import Link from "../models/Link";

DropdownList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(Link))
};

function DropdownList(props) {
    const {items} = props;
    return (
        <ul className={"dropdown"}>
            {items.map((item, i) => <DropdownItem item={item} key={i}/>)}
        </ul>
    );
}

export default DropdownList;