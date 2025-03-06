import React from 'react';
import { Stack, Text, XStack, Button, Image, Separator, ScrollView, YStack } from 'tamagui';
import { ShoppingCart, Menu, Star } from '@tamagui/lucide-icons';


const products = [
  { id: 1, name: 'H&M Pull & Bear', price: 'IDR 130.000', image: 'https://i.pinimg.com/474x/90/cd/39/90cd399e1227f571ef56c04604ad0e11.jpg' },
  { id: 2, name: 'H&M Pull & Bear', price: 'IDR 89.000', image: 'https://i.pinimg.com/474x/eb/db/63/ebdb63e2d58b70d970c96b9497463b5f.jpg' },
  { id: 3, name: 'H&M Pull & Bear', price: 'IDR 160.000', image: 'https://i.pinimg.com/474x/e8/2a/1e/e82a1e2ad9f65ffc0d2ce0ddebe26026.jpg' },
  { id: 4, name: 'H&M Pull & Bear', price: 'IDR 69.000', image: 'https://i.pinimg.com/474x/7d/47/d3/7d47d36c63577b2cc50fab94bc6dc003.jpg' },
];

export default function App() {
  return (
    <Stack flex={1} bg="#ffffff" width="100vw" minHeight="100vh">
      {/* Navbar */}
      <XStack bg="$blue10" padding={20} justifyContent="space-between" alignItems="center" borderBottomWidth={2} borderBottomColor="$gray6" shadow="sm">
        <Button bg="transparent">
          <Menu color="white" size={24} />
        </Button>
        <Text fontSize={24} fontWeight="bold" color="$color1">MyShop</Text>
        <Button bg="$green9" pressStyle={{ bg: '$green10' }}>
          <ShoppingCart color="white" size={24} />
        </Button>
      </XStack>
      <Separator />

      {/* Product List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} padding={20}>
        <XStack space>
          {products.map((product) => (
            <YStack key={product.id} width={250} height={325} padding={5} borderRadius={10} bg="#ffffff" borderWidth={1} borderColor="#ebebeb" alignItems="center" margin={10}>
              <Image source={{ uri: product.image }} width={'100%'} height={200} borderRadius={10} marginBottom={2} />
              <Text paddingHorizontal={2} marginTop={5} fontSize={16} fontWeight="bold" color="#343434" textAlign="left" width="100%">{product.name}</Text>
              <Text paddingHorizontal={2} color="#343434" fontSize={13} marginBottom={15} textAlign="left" width="100%">{product.price}</Text>
              <Button bg="#273aff" width={'98%'} pressStyle={{ bg: '$green10' }} borderRadius={10}>
                <Text color="$color1" fontSize={14}>Add to Cart</Text>
              </Button>
            </YStack>
          ))}
        </XStack>
      </ScrollView>
    </Stack>
  )
}
