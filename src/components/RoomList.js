import React from 'react';
import Room from "./Room";

function RoomList({rooms}) {
    if (rooms.length < 1){
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }

    rooms = rooms.map(room => {
        return <Room key={room.id} room={room}/>
    });
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms}
            </div>
        </section>
    );
}

export default RoomList;