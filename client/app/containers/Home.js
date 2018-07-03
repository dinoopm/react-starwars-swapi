import React from "react";
import {connect} from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";


import { getPeopleList} from "../actions/PeopleActions";

import PeopleList from "../containers/peopleListContainer";


class Home extends React.Component {

    componentDidMount(){
       this.props.init();
    }
    render() {
        return (
            <div>
              <Header />
              <main>
                  <PeopleList people={this.props.people} location={this.props.location} />

              </main>    
              <Footer />
                
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
  return {
      people: state.people,
      location: state.routing
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
          dispatch(getPeopleList());
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
