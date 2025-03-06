import React, { useEffect, useState } from 'react';
import { Stack, Input, Button, Text, YStack, Image } from 'tamagui';
import { motion } from 'framer-motion';

export default function App() {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateLogo(true);
    }, 1000); // Mulai animasi setelah 1 detik
  }, []);

  return (
    <Stack flex={1} justifyContent="center" alignItems="center" padding={20} minHeight="100vh" width="100vw">
      <YStack
        width="100%"
        height="100vh"
        borderRadius={0}
        padding={25}
        bg="white"
        shadow="lg"
        alignItems="center"
        justifyContent="center"
        position="absolute"
      >
        {/* Logo dengan animasi */}
        <motion.div
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={animateLogo ? { x: -700, y: -180, scale: 0.5 } : { x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '20%', left: '50%', translateX: '-50%' }}
        >
          <Image 
            source={{ uri: '/logo.png' }} 
            width={200} 
            height={120}
            aspectRatio={1/1}
          />
        </motion.div>

        {/* Konten login */}
        <Text fontSize={26} fontWeight="bold" color="#343434" textAlign="center" marginTop={80}>
          Hello Fellas!
        </Text>
        <Text color="#343434" textAlign="center" marginBottom={15}>
        Come on, register your account first
        </Text>

        <Input placeholder="Email" borderColor="$color6" padding={12} borderRadius={10} width="90%" maxWidth={400} />
        <Input placeholder="Password" secureTextEntry borderColor="$color6" marginTop={12} padding={12} borderRadius={10} width="90%" maxWidth={400} />

        <Button marginTop={20} bg="#273aff" pressStyle={{ bg: '$green10' }} width="90%" maxWidth={400} padding={12} borderRadius={10}>
          <Text color="$color1" fontSize={16}>Sign Up</Text>
        </Button>
      </YStack>
    </Stack>
  );
}