import React from 'react';
import { Stack, Input, Button, Text, YStack, Image } from 'tamagui';

const LoginScreen = () => {
  return (
    <Stack flex={1} justifyContent="center" alignItems="center" bg="" padding={20} minHeight="100vh" width="100vw">
      <YStack 
        width="100%" 
        height="100vh" 
        borderRadius={0} 
        padding={25} 
        bg="white" 
        shadow="lg" 
        alignItems="center" 
        justifyContent="center"
      >
        <Image 
          source={{ uri: '/logo.png' }} 
          width={250} 
          height={150}
          aspectRatio={1/1}
        />
        <Text fontSize={26} fontWeight="bold" color="#343434" textAlign="center">
          Welcome Back!
        </Text>
        <Text color="#343434" textAlign="center" marginBottom={15}>
          Please login to continue
        </Text>
        <Input placeholder="Email" borderColor="$color6" padding={12} borderRadius={10} width="90%" maxWidth={400} />
        <Input placeholder="Password" secureTextEntry borderColor="$color6" marginTop={12} padding={12} borderRadius={10} width="90%" maxWidth={400} />
        <Button marginTop={20} bg="#273aff" pressStyle={{ bg: '$green10' }} width="90%" maxWidth={400} padding={12} borderRadius={10}>
          <Text color="$color1" fontSize={16}>Sign In</Text>
        </Button>
      </YStack>
    </Stack>
  );
};

export default LoginScreen;
