import React, {Component} from 'react';
import items from './data'

const RoomContext = React.createContext({});

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    formatData(items) {
        const rooms = items.map(item => {
            const id = item.sys.id;
            const images = item.fields.images.map(image => {
                return image.fields.file.url;
            })
            const room = {...item.fields, id, images};

            return room;
        });

        return rooms;
    }

    componentDidMount() {
        const rooms = this.formatData(items);
        const featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, loading: false
        })
    }


    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomProvider, RoomConsumer, RoomContext};