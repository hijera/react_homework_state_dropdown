import React from 'react';
import PropTypes from 'prop-types';
import Link from "../models/Link";

DropdownItem.propTypes = {
    item: PropTypes.instanceOf(Link)
};

function DropdownItem(props) {
    const {item} = props;
    return (
        <li className={(item.highlight) ? 'active' : ''}>
            <a href={item.url}>{item.title}</a>
        </li>
    );
}

export default DropdownItem;