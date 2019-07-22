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
            </main>
        );
    }
}

export default Index;
