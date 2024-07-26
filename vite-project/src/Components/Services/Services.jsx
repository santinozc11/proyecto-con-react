import React from 'react';
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const Services = () => {
  return (
    <MotionBox
      as="section"
      id="services"
      py={16}
      bg="gray.900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="center"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 16 }} // Adjust gap for responsive design
        px={4}
      >
        <Box flex="1" textAlign="center" mb={{ base: 16, md: 0 }} pr={{ md: 16 }}> {/* Added right padding for separation */}
          <Heading as="h1" size="2xl" color="orange.300" mb={6}>
            Servicios que <br /> Ofrezco
          </Heading>
          <Text color="gray.400" fontSize="lg" mb={8}>
            Todo lo que ofrezco es auténtico y de gran utilidad. Aseguro la excelencia y alta calidad en mis servicios.
          </Text>
          <Flex justify="center" gap={16}>
            <Box textAlign="center">
              <Heading as="h3" size="lg" color="orange.300" mb={2}>60+</Heading>
              <Text color="gray.400">Proyectos</Text>
            </Box>
            <Box textAlign="center">
              <Heading as="h3" size="lg" color="orange.300" mb={2}>20+</Heading>
              <Text color="gray.400">Clientes felices</Text>
            </Box>
          </Flex>
        </Box>
        <Box flex="2" ml={{ md: 16 }}> {/* Added left margin for separation */}
          <Flex direction="column" gap={12}>
            {[
              { img: "/public/computer.svg", title: "Diseño Web", description: "20 Proyectos" },
              { img: "/public/mobile.svg", title: "Diseño de Apps", description: "20 Proyectos" },
              { img: "/public/product.svg", title: "Diseño de Producto", description: "20 Proyectos" },
            ].map((service, index) => (
              <MotionFlex
                key={index}
                align="center"
                border="1px solid"
                borderColor="gray.500"
                p={6}
                borderRadius="md"
                bg="gray.800"
                _hover={{
                  transform: "translateY(-10px) scale(1.05)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "gray.700",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <MotionImage
                  src={service.img}
                  alt={service.title}
                  boxSize="60px"
                  borderRadius="full"
                  mr={6}
                  bg="orange.300"
                  p={3}
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                />
                <Box>
                  <Heading as="h3" size="md" color="orange.300" mb={2}>{service.title}</Heading>
                  <Text color="gray.400">{service.description}</Text>
                </Box>
              </MotionFlex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default Services;
