import React, {Component} from 'react';
import {connect} from 'react-redux';

import HomeHeader from '_components/HomeHeader/index';
import Category from '_components/Category/index';

import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height: '15px'}}/>
                <Ad/>
                <List/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

