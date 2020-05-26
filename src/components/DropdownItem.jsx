import React from 'react';
import PropTypes from 'prop-types';

DropdownItem.propTypes = {
    
};

function DropdownItem(props) {
    const { item } = props;
    return (
        <li className={(item.highlight)?'active':''}>
            <a  href={item.url}>{item.title}</a>
        </li>
    );
}

export default DropdownItem;