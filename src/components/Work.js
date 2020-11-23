import React from 'react'
import Plate from "./Plate";
import './Work.css'

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMore: false
        };
    }

    render() {
        return (
            <Plate title={this.props.title}>
                <ul className={`work_list ${this.state.isShowMore ? 'show_more' : ''}`}>
                    {
                        this.props.data.map((work_item, work_index) => {
                            return <li className="work_item" key={work_index}>
                                <div className="header">
                                    <p className="name">{work_item.name}（{work_item.job}）</p>
                                    <p className="date">{work_item.date}</p>
                                </div>
                                {/*<p className="job">{work_item.job}</p>*/}
                                <div className="columns">
                                    <div className="column_title">描述：</div>
                                    <ul className="column_list">
                                        {
                                            work_item.descriptions.map((description_item, description_index) =>
                                                <li key={description_index}>{description_item}{description_index !== work_item.descriptions.length - 1 ? '；' : '。'}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="columns">
                                    <div className="column_title">业绩：</div>
                                    <ul className="column_list">
                                        {
                                            work_item.performance.map((performance_item, performance_index) =>
                                                <li key={performance_index}>{performance_item}{performance_index !== work_item.performance.length - 1 ? '；' : '。'}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                {
                                    work_item.url ? <p className="link">
                                        <span>
                                            <i className="iconfont icon-lianjie"/>
                                            <span>项目链接：</span>
                                        </span>
                                        <a href={work_item.url} target="_blank" rel="noopener noreferrer">{work_item.url}</a>
                                    </p> : ''
                                }
                            </li>;
                        })
                    }
                </ul>
                <div className='more_btn' onClick={() => this.setState({isShowMore: !this.state.isShowMore})}>
                    <span className={`iconfont ${this.state.isShowMore ? 'icon-shouqi1' : 'icon-gengduo1'}`}/>
                    <span>{this.state.isShowMore ? '收起' : '查看更多'}</span>
                </div>
            </Plate>
        );
    }
}

export default Work;