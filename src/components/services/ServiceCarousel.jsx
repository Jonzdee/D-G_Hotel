// ServiceCarousel.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: 'Spa',
    description: 'You are invited to experience a variety of relaxing wellness treatment, from massages to getting your hair and nails done. These pampering sessions guarantee a memorable stay with us.',
    image: 'https://i.ibb.co/SVnbCk7/gym3.jpg'
  },
  {
    title: 'Saloon & Nail Studio',
    description: 'You are invited to experience a variety of relaxing wellness treatment, from massages to getting your hair and nails done. These pampering sessions guarantee a memorable stay with us.',
    image: 'https://i.ibb.co/SVnbCk7/gym3.jpg'
  },
  // Add more services as needed
];

const Container = styled.div`
  background-color: #1d1d1d;
  padding: 2rem;
`;

const Header = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 1rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  color: #1d1d1d;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #1d1d1d;
`;

const ServiceCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Header>RECREATIONAL SERVICES</Header>
      <Slider {...settings}>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Image src={service.image} alt={service.title} />
            <TextContent>
              <Title>{service.title}</Title>
              <Description>{service.description}</Description>
            </TextContent>
          </ServiceCard>
        ))}
      </Slider>
    </Container>
  );
};

export default ServiceCarousel;
