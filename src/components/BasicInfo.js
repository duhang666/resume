import React from 'react'
import './BasicInfo.css'

// 年龄计算
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

class BasicInfo extends React.Component {
    render() {
        return (
            <div className="basic_info">
                <p className="name">{this.props.data.name}</p>
                <ul className="row label_list">
                    <li>{this.props.data.experience}年经验</li>
                    <li>{this.props.data.education}</li>
                    <li>{getAge(this.props.data.birthday)}岁</li>
                    <li>{['女', '男'][this.props.data.sex]}</li>
                </ul>
                <ul className="label_list">
                    {
                        this.props.data.homepages.map((item, index) =>
                            <li key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <i className={'iconfont ' + item.iconfont}/>
                                    <span>{item.url}</span>
                                </a>
                            </li>
                        )
                    }
                </ul>
                <ul className="label_list">
                    <li>
                        <a href={'tel:' + this.props.data.contact_info.mobile}>
                            <i className="iconfont icon-iconfontdianhua1"/>
                            <span>{this.props.data.contact_info.mobile}</span>
                        </a>
                    </li>
                    <li>
                        <a href={'mailto:' + this.props.data.contact_info.email}>
                            <i className="iconfont icon-youxiang"/>
                            <span>{this.props.data.contact_info.email}</span>
                        </a>
                    </li>
                    <li>
                        <i className="iconfont icon-027weizhidian1"/>
                        <span>{this.props.data.contact_info.address}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default BasicInfo;
