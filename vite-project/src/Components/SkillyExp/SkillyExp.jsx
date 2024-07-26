import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Image, Grid, GridItem, Collapse, Button, Fade } from '@chakra-ui/react';

const skills = [
  { name: "HTML", img: "/html.svg" },
  { name: "CSS", img: "/css.svg" },
  { name: "JavaScript", img: "/javascript.svg" },
  { name: "SQL", img: "/sql.svg" },
  { name: "Python", img: "/python.svg" },
  { name: "Java", img: "/java.svg" },
];

const experiences = [
  { year: "2022 - Present", title: "Web Designer", company: "Globant", details: "Diseño de interfaces web, creación de prototipos y pruebas de usabilidad." },
  { year: "2022 - Present", title: "UI/UX Designer", company: "Globant", details: "Optimización de interfaces de usuario y experiencia de usuario para aplicaciones web." },
  { year: "2022 - Present", title: "App Designer", company: "Globant", details: "Desarrollo de interfaces y diseño de experiencia para aplicaciones móviles." },
];

const SkillyExp = () => {
  const [expanded, setExpanded] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box as="section" id="skillyexp" py={{ base: 8, md: 12 }} textAlign="center" bg="gray.700">
      <Fade in={isVisible} transition={{ enter: { duration: 1 } }}>
        <Box>
          <Heading as="h1" className="title" color="orange.300" mb={6}>Habilidades y<br />Experiencia</Heading>
          <Text py={{ base: 4, md: 6 }} color="gray.400">Reportorio de habilidades y detalles sobre mi experiencia.</Text>
          <Flex className="skillyexp-content" justify="center" flexWrap="wrap" gap={{ base: 4, md: 6 }}>
            <Box className="skills" flex="1" maxW={{ base: "full", md: "45%" }} m={4}>
              <Heading as="h2" color="orange.300" mb={4}>Habilidades</Heading>
              <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={{ base: 4, md: 6 }} justifyContent="center">
                {skills.map((skill, index) => (
                  <Box key={index} className="skill-item" p={4} borderRadius="md" transition="transform 0.3s, background-color 0.3s" mx="auto" _hover={{ transform: 'translateY(-10px)', bg: 'gray.700' }} boxShadow="md" border="1px solid" borderColor="white">
                    <Image src={skill.img} alt={skill.name} bg="orange.300" p={3} borderRadius="full" mb={4} maxW="80px" maxH="80px" />
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="white">{skill.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box className="experience" flex="1" maxW={{ base: "full", md: "45%" }} m={4}>
              <Heading as="h2" color="orange.300" mb={4}>Experiencia</Heading>
              <SimpleGrid spacing={0}>
                {experiences.map((exp, index) => (
                  <Box
                    key={index}
                    p={6}
                    borderTop="2px solid"
                    borderColor="white"
                    transition="transform 0.3s"
                    borderBottom="2px solid"
                    bg="gray.800"
                    borderRadius="md"
                    maxW="full"
                    mx="auto"
                    mt={index === 0 ? "18px" : "12px"}
                    overflow="visible"
                  >
                    <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
                      <GridItem>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color="white" textAlign={{ base: 'center', md: 'left' }}>
                          {exp.year}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Box>
                          <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="white">{exp.title}</Heading>
                          <Text fontSize={{ base: 'sm', md: 'md' }} color="white">{exp.company}</Text>
                          <Flex direction="column" align={{ base: 'center', md: 'start' }} mt={4}>
                            <Button onClick={() => toggleExpand(index)} colorScheme="yellow">
                              {expanded === index ? 'Mostrar Menos' : 'Mostrar Más'}
                            </Button>
                            <Collapse in={expanded === index}>
                              <Box textAlign="left" mt={4} w="full">
                                <Text fontSize="sm" color="gray.400">{exp.details}</Text>
                              </Box>
                            </Collapse>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Fade>
    </Box>
  );
};

export default SkillyExp;
