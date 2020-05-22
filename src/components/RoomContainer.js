import React from 'react';
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import {withRoomConsumer} from "../context"

const RoomContainer = ({context}) => {
    const {loading, rooms, sortedRooms} = context;
    if (loading) {
        return <Loading title="rooms data loading... "/>
    }

    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    );
};

export default withRoomConsumer(RoomContainer);


// import React from 'react';
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import Loading from "./Loading";
// import {RoomConsumer} from "../context"
//
// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                const {loading, rooms, sortedRooms} = value;
//                 if (loading){
//                     return <Loading title="rooms data loading... "/>
//                 }
//
//                 return <div>
//                     page from RoomContainer
//                     <RoomFilter />
//                     <RoomList />
//                 </div>
//             }}
//         </RoomConsumer>
//     );
// };
//
// export default RoomContainer;