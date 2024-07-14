import React, { useState, useEffect, createContext, useContext } from "react";
import items from "../data";

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    const rooms = formatDate(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
  }, []);

  const formatDate = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "type":
        setType(value);
        break;
      case "capacity":
        setCapacity(parseInt(value));
        break;
      case "price":
        setPrice(parseInt(value));
        break;
      case "minSize":
        setMinSize(parseInt(value));
        break;
      case "maxSize":
        setMaxSize(parseInt(value));
        break;
      case "breakfast":
        setBreakfast(target.checked);
        break;
      case "pets":
        setPets(target.checked);
        break;
      default:
        break;
    }
    filterRooms();
  };

  const filterRooms = () => {
    let tempRooms = [...rooms];
    let tempCapacity = parseInt(capacity);
    let tempPrice = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (tempCapacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= tempCapacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= tempPrice);
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        getRoom,
        handleChange,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const useRoomContext = () => {
  return useContext(RoomContext);
};

export { RoomProvider, useRoomContext, RoomContext };
