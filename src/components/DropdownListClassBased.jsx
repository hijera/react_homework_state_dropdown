import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DropdownItem from "./DropdownItem";
import Link from "../models/Link";

class DropdownListClassBased extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    render() {
        return (
            <ul className={"custom-dropdown"}>
                {this.items.map((item, i) => <DropdownItem item={item} key={i}/>)}
            </ul>
        );
    }
}

DropdownListClassBased.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(Link))
};

export default DropdownListClassBased;