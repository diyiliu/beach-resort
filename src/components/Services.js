import React, {Component} from 'react';
import Title from "./Title";

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaHiking/>,
                title: "endless hiking",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaBeer/>,
                title: "strongest beer",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title/>
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article className="service" key={index}>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Services;