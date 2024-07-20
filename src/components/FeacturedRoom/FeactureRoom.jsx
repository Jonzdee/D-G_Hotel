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
      <Title title="Our Rooms" />
      <h2 className='flex flex-wrap mx-44 mb-3 font-medium '>Kick back in one of 94 modern rooms and suites and catch up on your favorite show with satellite TV channels. 
        In the morning, you can sip a soothing cup of tea with a room-service breakfast or wake up with fresh coffee from
         your in-room coffeemaker.</h2>
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomElements}
      </div>
    </section>
  );
};

export default FeaturedRoom;

