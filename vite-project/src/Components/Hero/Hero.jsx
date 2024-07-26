import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const Hero = () => {
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const imageSize = useBreakpointValue({ base: '300px', md: '500px' });

  return (
    <Box position="relative" overflow="hidden">
      <Box 
        as="video" 
        src="./background.mp4" 
        type="video/mp4" 
        autoPlay 
        muted 
        loop 
        position="absolute" 
        top={0} 
        left={0} 
        width="100%" 
        height="100%" 
        objectFit="cover" 
        zIndex={-1}
        filter="brightness(50%) blur(1px)" 
      />
      
      <MotionBox
        id="hero"
        bg="rgba(0, 0, 0, 0.5)" 
        color="white"
        py={{ base: 8, md: 16 }}
        px={{ base: 4, md: 8 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }} 
          maxW="1200px"
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
          textAlign={{ base: 'center', md: 'left' }} 
        >
          <Box mb={{ base: 8, md: 0 }}>
            <MotionHeading 
              size={headingSize}
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hola a todos,<br />
              Soy 
              <Text 
                as="span" 
                color="orange.300" 
                style={{ 
                  textDecoration: 'underline', 
                  textDecorationColor: '#F59E0B', 
                  textUnderlineOffset: '4px',
                  marginLeft: '0.7rem' 
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Santino
              </Text>
            </MotionHeading>
            <MotionText fontSize={textSize} mt={4} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              Soy un estudiante de Ingeniería de sistemas y desarrollador fullstack apasionado por la creación de soluciones innovadoras.
            </MotionText>
            <MotionButton
              mt={6}
              colorScheme="orange"
              as="a"
              href="#contact-list"
              size={buttonSize}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              _hover={{ 
                transform: 'scale(1.05)', 
                boxShadow: "lg", 
                bg: "orange.400",
                transition: "all 0.3s ease-in-out"
              }}
            >
              Hablemos 🡵
            </MotionButton>
          </Box>
          <MotionImage
            whileHover={{ scale: 1.1 }}
            src="/profile.png" 
            borderRadius="full"
            boxSize={imageSize}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          />
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Hero;
