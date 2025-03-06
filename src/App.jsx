import React from 'react'
import { TamaguiProvider, Card, Stack, Input, Button, Text, YStack } from 'tamagui';


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
    <YStack f={1} jc="center" ai="center" bg="$background" p="$6">
      <MyCard />
      <Stack flex={1} justifyContent="center" alignItems="center" bg="$background" padding={20}>
        <YStack width={300} borderRadius={10} padding={20} bg="$color2" shadow="lg">
          <Text fontSize={24} fontWeight="bold" color="$color12" textAlign="center">
            Login
          </Text>
          <Input placeholder="Email" borderColor="$color6" marginTop={10} padding={10} borderRadius={8} />
          <Input placeholder="Password" secureTextEntry borderColor="$color6" marginTop={10} padding={10} borderRadius={8} />
          <Button marginTop={20} bg="$color9" pressStyle={{ bg: '$color10' }}>
            <Text color="$color1">Sign In</Text>
          </Button>
        </YStack>
      </Stack>
    </YStack>
  )
}
