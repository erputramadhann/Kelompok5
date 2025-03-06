import React, { useEffect, useState } from "react";
import { Stack, Text, Button, YStack, Image, XStack, Separator } from "tamagui";
import Navbar from "./Navbar";

const Cart = () => {
  // Data contoh produk untuk ditampilkan ketika keranjang kosong
  const sampleProduct = {
    name: "",
    color: "Biru Navy",
    size: "L",
    price: 299000,
    description: "Celana Jeans Biru Navy",
    image_url: "https://leajeans.com/cdn/shop/files/606.65.11-1updatecolor_1080x.png?v=1691985875" // Ganti dengan URL placeholder yang sesuai
  };
  const CelanaJeans = {
    name: "",
    color: "Biru Navy",
    size: "L",
    price: 299000,
    image_url: "https://example.com/sample-product.jpg" // Ganti dengan URL placeholder yang sesuai
  };

  const [cartItems, setCartItems] = useState([]);
  const [showSampleProduct, setShowSampleProduct] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    
    // Jika keranjang kosong, tampilkan produk contoh
    if (storedCart.length === 0) {
      setShowSampleProduct(true);
    }
  }, []);

  // Tampilkan produk yang sedang ditinjau (real atau sample)
  const displayItems = showSampleProduct ? [sampleProduct] : cartItems;

  // Hitung total harga
  const totalHarga = displayItems.reduce((acc, item) => acc + item.price, 0);
  const ppn = totalHarga * 0.1;
  const totalBayar = totalHarga + ppn;

  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      {/* Container Utama */}
      <XStack
        width="100vw"
        minHeight="50vh"
        padding={20}
        justifyContent="center"
        alignItems="flex-start"
        gap={30}
      >
        {/* === BAGIAN KIRI (DAFTAR PRODUK) === */}
        <YStack flex={1} maxWidth="600px" minHeight="50vh">
          <Text fontSize={25} fontWeight="bold">
            {showSampleProduct ? "Product Preview" : "Your Cart"}
          </Text>

          {displayItems.map((item, index) => (
            <XStack
              key={index}
              padding={15}
              shadow="sm"
              borderRadius={10}
              marginVertical={10}
              backgroundColor="white"
              alignItems="center"
            >
              {/* Gambar Produk */}
              <Image source={{ uri: item.image_url }} width={120} height={120} borderRadius={10} />

              {/* Detail Produk */}
              <YStack flex={1} paddingLeft={15}>
                <Text fontSize={16} fontWeight="bold">{item.name}</Text>
                <Text fontSize={14} color="gray">Color : {item.color} | Size : {item.size}</Text>
                <Text fontSize={14} color="gray">Made from Recycled Materials</Text>
                <Text fontSize={18} fontWeight="bold">Rp{item.price.toLocaleString()}</Text>
              </YStack>

              {/* Dropdown Jumlah */}
              <select style={{ padding: 5, borderRadius: 5, border: "1px solid gray" }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </XStack>
          ))}

          {showSampleProduct && (
            <Text fontSize={14} color="gray" marginTop={10}>
            This is a preview of the product. Your cart is currently empty.
            </Text>
          )}
        </YStack>

        {/* === BAGIAN KANAN (RINGKASAN PESANAN) === */}
        <YStack 
          width="100%" 
          maxWidth="400px" 
          padding={20} 
          backgroundColor="white" 
          borderRadius={10} 
          shadow="md"
          alignSelf="flex-start"
        >
          <Text fontSize={18} fontWeight="bold">Order Summary</Text>
          <Separator marginVertical={10} />
          <XStack justifyContent="space-between">
            <Text>Product Subtotal</Text>
            <Text>Rp{totalHarga.toLocaleString()}</Text>
          </XStack>
          <XStack justifyContent="space-between">
            <Text>PPN</Text>
            <Text>Rp{ppn.toLocaleString()}</Text>
          </XStack>
          <Separator marginVertical={10} />
          <XStack justifyContent="space-between" fontWeight="bold">
            <Text>Total Orders</Text>
            <Text>Rp{totalBayar.toLocaleString()}</Text>
          </XStack>

          {/* Tombol Checkout */}
          <YStack marginTop={20} space>
            <Button 
              backgroundColor="#273aff" 
              color="white" 
              padding={15} 
              fontSize={16} 
              fontWeight="bold"
              disabled={showSampleProduct}
            >
              {showSampleProduct ? "Add to Cart First" : "Proceed to payment"}
            </Button>
            <Button backgroundColor="gray" color="white" padding={15} fontSize={16}>
              Continue Shopping
            </Button>
          </YStack>
        </YStack>
      </XStack>
    </Stack>
  );
};

export default Cart;    