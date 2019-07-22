import React from 'react'
import './Plate.css'

class Plate extends React.Component {
    render() {
        return (
            <div className="plate">
                <header>{this.props.title}</header>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Plate;
