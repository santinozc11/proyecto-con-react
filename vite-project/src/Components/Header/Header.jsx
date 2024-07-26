import { Box, Flex, Link, Button, Heading, useBreakpointValue } from "@chakra-ui/react";
import { useSpring, animated } from '@react-spring/web';

const AnimatedBox = animated(Box);

const Header = () => {
  const springProps = useSpring({
    from: { y: -250 },
    to: { y: 0 },
    config: { tension: 170, friction: 26 }
  });

  // Determine the font size based on the viewport size
  const headingSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const linkSize = useBreakpointValue({ base: 'sm', md: 'md' });
  
  return (
    <AnimatedBox
      style={springProps}
      bg="gray.800"
      color="white"
      p={4}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }} 
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Heading size={headingSize} color="orange.300" mb={{ base: 4, md: 0 }}>Portfolio</Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }} 
          align={{ base: 'center', md: 'center' }}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="#hero" p={2} fontSize={linkSize} _hover={{ color: "orange.300" }}>Inicio</Link>
          <Link href="#about" p={2} fontSize={linkSize} _hover={{ color: "orange.300" }}>Sobre Mí</Link>
          <Link href="#services" p={2} fontSize={linkSize} _hover={{ color: "orange.300" }}>Servicios</Link>
          <Link href="#skillyexp" p={2} fontSize={linkSize} _hover={{ color: "orange.300" }}>Habilidades</Link>
          <Link href="#projects" p={2} fontSize={linkSize} _hover={{ color: "orange.300" }}>Proyectos</Link>
          <Link href="#testimonial" p={2} fontSize={linkSize} _hover={{ color: "orange.300" }}>Testimonios</Link>
        </Flex>
        <Link href="#contact-list" mt={{ base: 4, md: 0 }}>
          <Button colorScheme="yellow" variant="outline" size={useBreakpointValue({ base: 'sm', md: 'md' })}>
            Contacto
          </Button>
        </Link>
      </Flex>
    </AnimatedBox>
  );
}

export default Header;
