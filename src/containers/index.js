import React from 'react'
import data from '../data/data'
import Plate from '../components/Plate'
import BasicInfo from '../components/BasicInfo'
import './index.css'

class Index extends React.Component {
    render() {
        return (
            <main>
                <h1>{data.job}</h1>
                <div className="column">
                    <BasicInfo data={data.basic_info}/>
                </div>
                <div className="column">
                    <Plate title="技能优势">
                        <ul className="skill_list">
                            {
                                data.kill.map((item, index) =>
                                    <li key={index}>● {item}{index !== data.kill.length - 1 ? '；' : '。'}</li>
                                )
                            }
                        </ul>
                    </Plate>
                </div>
            </main>
        );
    }
}

export default Index;
