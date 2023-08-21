import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();
  return (
    <Container py={'16'} h="90vh">
      <form>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            focusBorderColor="yellow.500"
            type={'password'}
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            Change Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ResetPassword;
