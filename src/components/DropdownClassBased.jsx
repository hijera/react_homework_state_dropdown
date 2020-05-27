import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DropdownList from "./DropdownList";
import DropdownListClassBased from "./DropdownListClassBased";
import Link from "../models/Link";

class DropdownClassBased extends Component {

    constructor(props) {
        super(props);
        this.state = {currentStatus: props.isOpen};
        this.items = [
            {url: "https://google.ru", title: 'Profile Information', highlight: true},
            {url: "#", title: 'Change Password'},
            {url: '#', title: 'Become PRO'},
            {url: '#', title: 'Help', highlight: true},
            {url: '#', title: 'Log Out'}
        ];
        this.objects = this.items.map(item => (new Link(item)));
    }

    toggleOpen(evt) {
        this.setState((prevState) => ({...prevState, currentStatus: (!prevState.currentStatus)}));
    }


    render() {
        return (
            <div className={"custom-container"}>
                <div className={"custom-dropdown-wrapper " + (this.state.currentStatus ? 'open' : 'closed')}>
                    <button className={"b-container"} onClick={evt => this.toggleOpen(evt)}>
                        <span className={'b-caption'}>Account Settings</span>
                        <i className={"material-icons"}>public</i>
                    </button>
                    <DropdownListClassBased items={this.objects}/>
                </div>
            </div>
        );
    }
}

DropdownClassBased.propTypes = {
    isOpen: PropTypes.bool
};

export default DropdownClassBased;