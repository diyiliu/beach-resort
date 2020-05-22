import React, {Component} from 'react';
import Room from "./Room";

import Loading from "./Loading";

import {RoomContext} from '../context'
import Title from "./Title";

class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {featuredRooms, loading} = this.context;

        const rooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room}/>
        });

        return (
            <section className="featured-rooms">
                <Title name="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading title="rooms data loading"/> : rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;


