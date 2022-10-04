import React from "react";
import './CompoCSS/Book.css';
import Form from './Component/forms/forms'
import NavBar from './NavBar'
import PlaceApi from "./Apis/placeApi";
//import Tab from "./Component/Tab";
{/*
const tabContent =[
  {
    title: "Destination booking",
    content: <PlaceApi/>
  },  
  {
    title: "Movie ticke",
    content: `Working..`
  },
  {
    title: "flight ticket",
    content: `Working..`
  },
  {
    title: "Hotel ticket",
    content: `Working..`
  },
];*/}

class Book extends React.Component{
  render(){
    return(
    <div className = "placeApiDiv">
      <NavBar/>
      <h1>Book your Teckets from here</h1>
        <Form/>
      {/*<div className="row">
        <div className="col text-center">
          <div className="data">
              <Tab>
                  {tabContent.map((tab, idx) => (
                      <Tab.TabPanel key={`Tab-${idx}`} tab={tab.title}>
                        {tab.content}
                      </Tab.TabPanel>
                  ))}
              </Tab>
          </div>
        </div>
                  </div>*/}
		</div>
    )
  }
}
export default Book;

