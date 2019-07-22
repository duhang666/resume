import React from 'react'
import Plate from "./Plate";
import './Skill.css'

class Skill extends React.Component {
    render() {
        return (
            <Plate title="技能优势">
                <ul className="skill_list">
                    {
                        this.props.data.map((item, index) =>
                            <li key={index}>● {item}{index !== this.props.data.length - 1 ? '；' : '。'}</li>
                        )
                    }
                </ul>
            </Plate>
        );
    }
}

export default Skill;