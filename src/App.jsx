import React from 'react'
import { Card, Text, Button, YStack } from 'tamagui'

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
    </YStack>
  )
}
