import React from "react";
import { Stack, Text, YStack, Image, XStack, Button } from "tamagui";
import { Heart } from "lucide-react";
import Navbar from "./Navbar";

const Product = () => {
  // Data produk rekomendasi
  const recommendedProducts = [
    {
      id: 1,
      brand: "Nike",
      name: "Men's Epic React Phantom Flyknit",
      price: 1406330,
      originalPrice: 2099000,
      discount: 33,
      image_url: "https://leajeans.com/cdn/shop/files/606.65.11-1updatecolor_1080x.png?v=1691985875"
    },
    {
      id: 2,
      brand: "Converse",
      name: "Chuck Taylor 70's Hi Sneakers",
      price: 759915,
      originalPrice: 1299000,
      discount: 42,
      image_url: "https://leajeans.com/cdn/shop/files/606.65.11-1updatecolor_1080x.png?v=1691985875"
    },
    {
      id: 3,
      brand: "Nike",
      name: "Vista Sandals",
      price: 759000,
      originalPrice: 759000,
      discount: 0,
      image_url: "https://leajeans.com/cdn/shop/files/606.65.11-1updatecolor_1080x.png?v=1691985875"
    },
    
  ];

  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      id: product.id,
      name: `${product.brand} ${product.name}`,
      price: product.price,
      image_url: product.image_url, // Memperbaiki properti ini dari image ke image_url
      color: "Default", // Ini bisa diubah jika ada data warna
      size: "Default", // Ini bisa diubah jika ada data ukuran
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.brand} ${product.name} telah ditambahkan ke keranjang`);
  };

  return (
    <Stack width="100%">
      <Navbar />
      <YStack padding={20} space="$4" alignItems="center"> {/* Menambahkan alignItems="center" untuk memusatkan konten */}
        {/* Judul Rekomendasi */}
        <XStack justifyContent="center" alignItems="center" marginVertical={20}>
          <Text fontSize={24} fontWeight="bold">
            Our Products
          </Text>
        </XStack>

        {/* Grid Produk */}
        <XStack 
          flexWrap="wrap" 
          justifyContent="center" /* Mengubah dari space-between ke center */
          gap={20} 
          width="100%" 
          maxWidth={1200} /* Menambahkan maxWidth untuk membatasi lebar kontainer */
        >
          {recommendedProducts.map((product) => (
            <YStack
              key={product.id}
              width={270}
              marginBottom={20}
              position="relative"
              marginHorizontal={10} /* Menambahkan margin horizontal */
            >
              {/* Gambar Produk */}
              <Image
                source={{ uri: product.image_url }} /* Memperbaiki properti dari image ke image_url */
                width={270}
                height={270}
                borderRadius={8}
                marginBottom={10}
                resizeMode="cover" /* Menambahkan resizeMode */
                alt={product.name} /* Menambahkan alt untuk aksesibilitas */
              />

              {/* Tombol Favorit */}
              <Button
                position="absolute"
                top={10}
                right={10}
                width={40}
                height={40}
                borderRadius={20}
                backgroundColor="white"
                justifyContent="center"
                alignItems="center"
                padding={0}
              >
                <Heart size={20} color="#888888" />
              </Button>

              {/* Informasi Produk */}
              <YStack space="$2">
                <Text fontSize={16} fontWeight="bold">
                  {product.brand}
                </Text>
                <Text fontSize={14} color="gray" numberOfLines={1}>
                  {product.name}
                </Text>
                
                {/* Harga dengan Diskon */}
                <XStack alignItems="center" space="$2">
                  {product.discount > 0 && (
                    <>
                      <Text fontSize={16} fontWeight="bold" color="#E53935">
                        Rp {product.price.toLocaleString()}
                      </Text>
                      <Text fontSize={14} color="gray" textDecorationLine="line-through">
                        Rp {product.originalPrice.toLocaleString()}
                      </Text>
                      <Text fontSize={14} color="#E53935">
                        -{product.discount}%
                      </Text>
                    </>
                  )}
                  
                  {product.discount === 0 && (
                    <Text fontSize={16} fontWeight="bold">
                      Rp {product.price.toLocaleString()}
                    </Text>
                  )}
                </XStack>

                {/* Tombol Tambah ke Keranjang */}
                <Button
                  backgroundColor="white"
                  borderColor="#273aff"
                  borderWidth={1}
                  color="#273aff"
                  borderRadius={8}
                  padding={10}
                  marginTop={5}
                  onPress={() => addToCart(product)}
                >
                  <Text color="#273aff" fontSize={14} fontWeight="bold">
                    Masukkan ke Tas
                  </Text>
                </Button>
              </YStack>
            </YStack>
          ))}
        </XStack>

        {/* Tombol Navigasi */}
        <Button
          position="absolute"
          right={10}
          top="50%"
          width={40}
          height={40}
          borderRadius={20}
          backgroundColor="white"
          borderColor="#e0e0e0"
          borderWidth={1}
          justifyContent="center"
          alignItems="center"
          padding={0}
        >
          <Text fontSize={20}>→</Text>
        </Button>
      </YStack>
    </Stack>
  );
};

export default Product;