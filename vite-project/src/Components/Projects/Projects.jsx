import React from 'react';
import { Box, Heading, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const projects = [
  { img: "/project1.jpg" },
  { img: "/project2.jpg" },
  { img: "/project3.jpg" },
];

const Projects = () => {
  return (
    <Box as="section" id="projects" py={12} textAlign="center" bg="gray.900">
      <Heading as="h1" color="orange.300" mb={6}>Mis Últimos Proyectos</Heading>
      <Box py={6} maxW={{ base: "full", md: "800px" }} mx="auto">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <MotionBox
                  className="project-card"
                  h={{ base: "50vh", md: "65vh" }}
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
                    src={project.img}
                    alt={`Project ${index + 1}`}
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Box>
      <Link href="#" color="orange.300" mt={6} fontWeight="bold" _hover={{ textDecoration: 'underline' }}>Ver todos los proyectos</Link>
    </Box>
  );
};

export default Projects;
