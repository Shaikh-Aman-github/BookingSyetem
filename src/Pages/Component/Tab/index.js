import React, { useEffect, useState } from 'react'
import "./Tab.css"

const Tab = ({children, active = 0}) =>{
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabData] = useState([]);

    useEffect(() =>{
        let data = [];
        React.Children.forEach(children, element =>{
            if(!React.isValidElement(element)) return;

            const {props: {tab, children }} = element;
            data.push({tab, children});
        })
        setTabData(data);
    }, [children])

    return(
        <div className="mainTab">
            <ul className="nav nav-tab">
                {
                    tabsData.map(({tab}, idx) => (
                        <li className="nav-item">
                            <a rel="referrer" className={`nav-link ${idx === activeTab ? "active" : ""}`} 
                            onClick={()=> setActiveTab(idx)}
                            href="#"
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
            </ul>  
            <div className="container-fluid tab-content p-3">
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>  
        </div>
    )
}

const TabPanel = ({children}) =>{
    return{children}
}

Tab.TabPanel = TabPanel;
export default Tab;