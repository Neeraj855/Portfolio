import React, { Component } from 'react';

import Header from '../Common/Header';
import Services from '../Common/Services/Services';
import Portfolio from '../Common/Portfolio/Portfolio';
import Timeline from "../Common/Timeline/Timeline";
import Team from "../Common/Team/Team";


import image from "../assets/img/background/header-bg.jpg";

class Home extends Component {

    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subTitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />

            </div>
        );
    }
}

export default Home;