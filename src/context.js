import React, {Component} from 'react';
import items from './data'

const RoomContext = React.createContext({});

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
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

    getRoom = slug => {
        const tmpRooms = [...this.state.rooms];
        const room = tmpRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ?
            target.checked : target.value;

        this.setState({
            [name]: value
        }, this.filterRooms);
    }

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets,
        } = this.state

        let tempRooms = [...rooms];

        if (type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        capacity = parseInt(capacity)
        if (capacity > 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        if (price > 0){
            tempRooms = tempRooms.filter(room => room.price >= price);
        }

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        if (breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if (pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms
        })
    }

    componentDidMount() {
        const rooms = this.formatData(items);
        const featuredRooms = rooms.filter(room => room.featured === true);

        const maxPrice = Math.max(...rooms.map(room => room.price));
        const maxSize = Math.max(...rooms.map(room => room.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            maxPrice: maxPrice,
            maxSize: maxSize
        })
    }


    render() {
        return (
            <RoomContext.Provider value={
                {
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }
            }>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {
                value => {
                    return <Component {...props} context={value}/>
                }
            }
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext};