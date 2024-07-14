import React from 'react';
// import context
import { useContext } from 'react';

import { RoomContext } from '../../context/Context';

// import components
import Room from '../room/Room'
import Title from '../Title';
import Loading from '../Loading/Loading'



const FeaturedRoom = () => {
  const { loading, featuredRooms: rooms } = useContext(RoomContext);

  const roomElements = rooms.map((room) => (
    <Room key={room.id} room={room} />
  ));

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomElements}
      </div>
    </section>
  );
};

export default FeaturedRoom;

