import React from "react";
import {connect} from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";


import { getPeople} from "../actions/PeopleActions";

import PeopleDetails from "../components/PeopleDetails";


class PeopleDetailsPage extends React.Component {

    componentDidMount(){
       this.props.init(this.props.location.locationBeforeTransitions.query.people);
    }
    render() {
        return (
            <div className="container">
              <Header />
              <main className="mdl-layout__content">
                <div className="page-content">
                  <PeopleDetails peopledetails={this.props.peopledetails} />
                </div>
              </main>
              <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      people: state.people,
      location: state.routing,
      peopledetails: state.peopledetails
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (id) => {
          dispatch(getPeople(id));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetailsPage);
