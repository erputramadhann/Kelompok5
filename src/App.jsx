import React from 'react'
import { TamaguiProvider, Card, Stack, Input, Button, Text, YStack, Image} from 'tamagui';


const MyCard = () => {
  return (
    <Card elevate size="$4" bordered width={300} space="$3" p="$4">
      <YStack space="$2">
        <Text fontSize={20} fontWeight="bold">
          Card Title
        </Text>
        <Text color="$gray10">
          Ini adalah kartu sederhana menggunakan Tamagui di React.js
        </Text>
        <Button>Click Me</Button>
      </YStack>
    </Card>
  )
}

export default function App() {
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
  )
}
