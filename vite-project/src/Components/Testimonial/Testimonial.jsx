import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Crear los componentes animados
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const testimonials = [
  { img: "/testimonial1.png" },
  { img: "/testimonial2.png" },
  { img: "/testimonial3.png" },
];

const Testimonial = () => {
  return (
    <Box as="section" id="testimonial" py={12} textAlign="center" bg="gray.700">
      <Heading as="h1" color="orange.300" mb={6}>
        Los mejores clientes son <br />
        <span style={{ display: 'block', margin: '0 auto' }}>mis clientes!</span>
      </Heading>
      <Box py={6} maxW={{ base: "full", md: "800px" }} mx="auto">
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <MotionBox
                  className="testimonial-card"
                  h={{ base: "40vh", md: "60vh" }}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  whileHover={{
                    translateY: -20,
                    scale: 1.05,
                    boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <MotionImage
                    src={testimonial.img}
                    alt={`Testimonial ${index + 1}`}
                    h="100%"
                    w="100%"
                    objectFit="cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </MotionBox>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default Testimonial;
