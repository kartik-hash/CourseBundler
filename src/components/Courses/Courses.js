import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lecture,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
        children={title}
      />

      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          children={'Creator'}
          textTransform="uppercase"
        />
        <Text
          fontFamily={'body'}
          children={creator}
          textTransform="uppercase"
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lecture}
`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}
`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
          <Button
            variant={'ghost'}
            colorScheme={'yellow'}
            onClick={() => addToPlaylistHandler(id)}
          >
            Add to PlayList
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };
  const categories = [
    'Web Development',
    'AI',
    'Data Structure & Algorithm',
    'Android',
    'Data Science',
    'Game Development',
  ];
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search A Course"
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item}></Text>
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample1'}
          description={'Sample1'}
          views={2}
          id={'Sample1'}
          creator={'Sample1'}
          lecture={3}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
