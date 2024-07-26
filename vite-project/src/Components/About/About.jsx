import React, { useState } from "react";
import { Box, Heading, Text, Button, Link, useBreakpointValue, VStack, Fade } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const cardHeight = useBreakpointValue({ base: "300px", md: "400px" });
  const iconSize = useBreakpointValue({ base: "30px", md: "40px" });

  return (
    <Box bg="gray.700" color="white" py={{ base: 12, md: 16 }} px={{ base: 4, md: 8 }} textAlign="center" id="about">
      <Fade in={isVisible} transition={{ enter: { duration: 1 } }}>
        <Box maxW="900px" mx="auto" perspective="1000px">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side */}
            <Box
              key="front"
              bg="gray.800"
              p={{ base: 4, md: 6 }}
              borderRadius="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height={cardHeight}
              boxShadow="md"
              transition="transform 0.6s"
              _hover={{ transform: 'scale(1.05)', boxShadow: "lg" }}
            >
              <Heading size={{ base: 'lg', md: 'xl' }} color="orange.300" mb={4}>Sobre Mí</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} mb={4}>
                Mi nombre es Santino y soy un estudiante de Ingeniería de Sistemas. Desde muy joven, he sentido una gran pasión por la tecnología y el desarrollo de software. Me encanta enfrentarme a nuevos desafíos y aprender constantemente nuevas habilidades. Mi objetivo es utilizar mis conocimientos y experiencia para crear soluciones innovadoras que impacten de manera positiva en la vida de las personas.
              </Text>
              <Button mt={4} onClick={handleFlip} colorScheme="yellow" size={{ base: 'sm', md: 'md' }}>
                Redes
              </Button>
            </Box>

            {/* Back Side */}
            <Box
              key="back"
              bg="gray.800"
              p={{ base: 4, md: 6 }}
              borderRadius="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height={cardHeight}
              boxShadow="md"
              transition="transform 0.6s"
              _hover={{ transform: 'scale(1.05)', boxShadow: "lg" }}
            >
              <Heading size={{ base: 'lg', md: 'xl' }} color="orange.300" mb={4}>Para saber más de mí</Heading>
              <Text mb={4}>Conéctate conmigo a través de las siguientes redes sociales:</Text>
              <VStack spacing={{ base: 4, md: 6 }} mb={4}>
                <Link
                  href="https://github.com/santinozc11"
                  isExternal
                  _hover={{
                    bg: "orange.300",
                    borderRadius: "50%",
                    p: 2,
                    transform: "scale(1.3)",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <FaGithub size={iconSize} color="white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/santino-zahir-chamia-988237238/"
                  isExternal
                  _hover={{
                    bg: "orange.300",
                    borderRadius: "50%",
                    p: 2,
                    transform: "scale(1.3)",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <FaLinkedin size={iconSize} color="white" />
                </Link>
                <Link
                  href="https://www.instagram.com/santinozc"
                  isExternal
                  _hover={{
                    bg: "orange.300",
                    borderRadius: "50%",
                    p: 2,
                    transform: "scale(1.3)",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <FaInstagram size={iconSize} color="white" />
                </Link>
              </VStack>
              <Button mt={4} onClick={handleFlip} colorScheme="yellow" size={{ base: 'sm', md: 'md' }}>
                Volver
              </Button>
            </Box>
          </ReactCardFlip>
        </Box>
      </Fade>
    </Box>
  );
};

export default About;
