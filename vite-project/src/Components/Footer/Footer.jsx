import React from 'react';
import { Box, Heading, Text, Flex, Image, Link, List, ListItem, Input, Textarea, Button, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, useDisclosure, SlideFade, Icon } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'El nombre debe tener al menos 2 caracteres').required('Nombre es requerido'),
  email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  message: Yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres').required('Mensaje es requerido'),
});

const Footer = () => {
  const { isOpen: isVisible, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);
    console.log(values);
    setTimeout(() => {
      onOpen();
      resetForm();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Box as="footer" py={12} color="white" position="relative" overflow="hidden">
      <Box className="animated-bg"/>
      <Box maxW="1200px" mx="auto" px={6} zIndex={1} position="relative">
        <Heading as="h1" textAlign="center" fontSize="5xl" mb={6} color="orange.300">
          Hagamos algo nuevo e <br />
          <Box as="span" className="centered-line" transition="all 0.3s ease">
            Increíble!
          </Box>
        </Heading>
        <Flex justify="space-between" flexWrap="wrap">
          <Box id="contact-list" mr={6}>
            <Flex align="center" mb={6} transition="transform 0.3s ease" _hover={{ transform: 'scale(1.05)' }}>
              <Image src="/gmail.svg" alt="Email" boxSize="60px" bg="orange.300" borderRadius="full" p={3} mr={4} />
              <Box>
                <Heading as="h3" fontSize="lg" color="orange.300">
                  Email
                </Heading>
                <Text>santinochamia1192@gmail.com</Text>
              </Box>
            </Flex>
            <Flex align="center" mb={6} transition="transform 0.3s ease" _hover={{ transform: 'scale(1.05)' }}>
              <Image src="/phone.svg" alt="Telefono" boxSize="60px" bg="orange.300" borderRadius="full" p={3} mr={4} />
              <Box>
                <Heading as="h3" fontSize="lg" color="orange.300">
                  Teléfono
                </Heading>
                <Text>3804348611</Text>
              </Box>
            </Flex>
            <Flex align="center" transition="transform 0.3s ease" _hover={{ transform: 'scale(1.05)' }}>
              <Image src="/location.svg" alt="Location" boxSize="60px" bg="orange.300" borderRadius="full" p={3} mr={4} />
              <Box>
                <Heading as="h3" fontSize="lg" color="orange.300">
                  Ubicación
                </Heading>
                <Text>Córdoba, Argentina</Text>
              </Box>
            </Flex>
          </Box>
          <Box id="footer-list" ml={6}>
            <Heading as="h3" fontSize="lg" mb={4}>
              Enlaces rápidos
            </Heading>
            <List spacing={2}>
              <ListItem>
                <Link href="#hero" _hover={{ textDecoration: 'underline' }}>Inicio</Link>
              </ListItem>
              <ListItem>
                <Link href="#about" _hover={{ textDecoration: 'underline' }}>Acerca de</Link>
              </ListItem>
              <ListItem>
                <Link href="#services" _hover={{ textDecoration: 'underline' }}>Servicios</Link>
              </ListItem>
              <ListItem>
                <Link href="#skillyexp" _hover={{ textDecoration: 'underline' }}>Habilidades</Link>
              </ListItem>
              <ListItem>
                <Link href="#projects" _hover={{ textDecoration: 'underline' }}>Proyectos</Link>
              </ListItem>
              <ListItem>
                <Link href="#testimonial" _hover={{ textDecoration: 'underline' }}>Testimonios</Link>
              </ListItem>
              <ListItem>
                <Link href="#contact" _hover={{ textDecoration: 'underline' }}>Contacto</Link>
              </ListItem>
            </List>
          </Box>
        </Flex>
        <Box mt={4}>
          <Heading as="h3" fontSize="lg" mb={4}>
            Contacto
          </Heading>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <Box mb={4}>
                  <Field name="name">
                    {({ field }) => (
                      <Input {...field} placeholder="Nombre" size="lg" borderColor="orange.300" _placeholder={{ color: 'gray.400' }} />
                    )}
                  </Field>
                  <ErrorMessage name="name" component={Text} color="red.500" />
                </Box>
                <Box mb={4}>
                  <Field name="email">
                    {({ field }) => (
                      <Input {...field} type="email" placeholder="Correo electrónico" size="lg" borderColor="orange.300" _placeholder={{ color: 'gray.400' }} />
                    )}
                  </Field>
                  <ErrorMessage name="email" component={Text} color="red.500" />
                </Box>
                <Box mb={4}>
                  <Field name="message">
                    {({ field }) => (
                      <Textarea {...field} placeholder="Mensaje" size="lg" borderColor="orange.300" _placeholder={{ color: 'gray.400' }} />
                    )}
                  </Field>
                  <ErrorMessage name="message" component={Text} color="red.500" />
                </Box>
                <Button colorScheme="yellow" type="submit" isLoading={isSubmitting} transition="all 0.3s ease" _hover={{ bg: 'orange.400' }}>
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>

          <SlideFade in={isVisible}>
            <Alert
              status='success'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
              mt={6}
              position='relative'
              bg='rgba(0, 128, 0, 0.7)'
              borderRadius='md'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <Box>
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Formulario enviado!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                  Gracias por contactarme. Me pondré en contacto contigo pronto.
                </AlertDescription>
              </Box>
              <CloseButton
                position='absolute'
                right={2}
                top={2}
                onClick={onClose}
              />
            </Alert>
          </SlideFade>
        </Box>
        <Flex className="footer-socials" justify="center" mt={6}>
          <Link href="https://github.com/santinozc11" isExternal mr={4}>
            <Icon as={FaGithub} boxSize="24px" />
          </Link>
          <Link href="https://www.linkedin.com/in/santino-zahir-chamia-988237238/" isExternal mr={4}>
            <Icon as={FaLinkedin} boxSize="24px" />
          </Link>
          <Link href="https://instagram.com/santinozc" isExternal>
            <Icon as={FaInstagram} boxSize="24px" />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
