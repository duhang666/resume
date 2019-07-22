import React from 'react'
import './BasicInfo.css'

class BasicInfo extends React.Component {
    render() {
        return (
            <div>
                <p className="name">{this.props.data.name}</p>
                <ul className="row label_list">
                    <li>{this.props.data.age}</li>
                    <li>{['女', '男'][this.props.data.sex]}</li>
                    <li>{this.props.data.education}</li>
                    <li>{this.props.data.experience}年经验</li>
                </ul>
                <ul className="row label_list">
                    {
                        this.props.data.homepages.map((item, index) => <li key={index}><a href={item}>{item}</a></li>)
                    }
                </ul>
                <ul className="row label_list">
                    <li>
                        <a href={'tel:' + this.props.data.contact_info.mobile}>{this.props.data.contact_info.mobile}</a>
                    </li>
                    <li>
                        <a href={'mailto:' + this.props.data.contact_info.email}>{this.props.data.contact_info.email}</a>
                    </li>
                    <li>{this.props.data.contact_info.address}</li>
                </ul>
            </div>
        );
    }
}

export default BasicInfo;
