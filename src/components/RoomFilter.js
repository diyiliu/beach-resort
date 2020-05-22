import React from 'react';
import Title from "./Title";
import {useContext} from 'react'
import {RoomContext} from "../context";

function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange
    } = context

    const getUnique = (items, name) => {
        return [...new Set(items.map(item => item[name]))]
    }

    let types = getUnique(rooms, "type")
    types = ["all", ...types];

    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, "capacity")
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="filter-container">
            <Title name="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" className="form-control" value={type} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" className="form-control" value={capacity}
                            onChange={handleChange}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" id="price" name="price" className="form-control" min={minPrice} max={maxPrice}
                           value={price} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">
                        <input type="text" id="size" name="minSize" className="size-input"
                               value={minSize} onChange={handleChange}/>
                        <input type="text" id="size" name="maxSize" className="size-input"
                               value={maxSize} onChange={handleChange}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                               name="breakfast"
                               id="breakfast"
                               value={breakfast}
                               onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox"
                               name="pets"
                               id="pets"
                               value={pets}
                               onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default RoomFilter;