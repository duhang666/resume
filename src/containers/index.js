import React from 'react'
import data from '../data/data'
import BasicInfo from '../components/BasicInfo'
import Skill from '../components/Skill'
import Work from '../components/Work'
import './index.css'

class Index extends React.Component {
    render() {
        return (
            <main>
                <h1>{data.job}</h1>
                <section>
                    <BasicInfo data={data.basic_info}/>
                </section>
                <section>
                    <Skill data={data.kills}/>
                </section>
                <section>
                    <Work title="工作经历" data={data.works}/>
                </section>
                <section>
                    <Work title="项目经历" data={data.productions}/>
                </section>
            </main>
        );
    }
}

export default Index;
