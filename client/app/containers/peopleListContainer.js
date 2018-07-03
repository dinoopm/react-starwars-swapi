
import React from "react";
import {connect} from "react-redux";

import PeopleList from "../components/PeopleList";

import {getPeopleList} from "../actions/PeopleActions";

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    goToPage:(page)=>{
       event.preventDefault();
       if(page){
       	   dispatch(getPeopleList(page));	
       }
      
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList)  