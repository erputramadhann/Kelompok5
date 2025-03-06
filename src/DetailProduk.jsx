import { useState, useEffect } from "react";
import { YStack, XStack, Image, Button, Text, Theme, Card, ScrollView, AnimatePresence, Spinner } from "tamagui";
import Navbar from "./Navbar"

export default function DetailProduk() {
    const [selectedSize, setSelectedSize] = useState("");
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);

    // Simulate loading delay
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Theme name="light">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Navbar />
                <YStack justifyContent="center" alignItems="center" bg="" padding={20} minHeight="100vh" width="100vw">
                    <XStack gap="$6" flexWrap="wrap" width="auto" maxWidth={10000} justifyContent="center" alignItems="center">

                        {/* Product Images */}
                        <YStack space="$4" justifyContent="center" alignItems="center" backgroundColor="transparent">
                            <AnimatePresence>
                                {loading ? (
                                    <YStack space="$4" animation="bouncy">
                                        <Card width={310} height={450} backgroundColor="$gray5" borderRadius="$4" />
                                    </YStack>
                                ) : (
                                    <YStack space="$4">
                                        <XStack space="$4">
                                            <Image
                                                source={{ uri: "https://leajeans.com/cdn/shop/files/606.65.11-1updatecolor_1080x.png?v=1691985875" }}
                                                width={650}
                                                height={650}
                                                borderRadius="$2"
                                            />
                                        </XStack>
                                    </YStack>
                                )}
                            </AnimatePresence>
                        </YStack>

                        {/* Product Details */}
                        <YStack space="$3" flex={1} width={500} alignItems="justify">
                            <AnimatePresence>
                                {loading ? (
                                    <YStack space="$3" animation="bouncy" opacity={0.6}>
                                        <Card width={100} height={24} backgroundColor="$gray5" borderRadius="$4" />
                                        <Card width={200} height={18} backgroundColor="$gray5" borderRadius="$4" />
                                        <Card width={300} height={18} backgroundColor="$gray5" borderRadius="$4" />
                                        <Spinner size="large" color="$black" />
                                    </YStack>
                                ) : (
                                    <>
                                        <Text fontSize="$12" fontWeight="700">
                                            Jeans
                                        </Text>
                                        <Text fontSize="$8" fontWeight="600" onPress={() => setShowDetails(!showDetails)}>
                                            More Details {showDetails ? "▲" : "▼"}
                                        </Text>

                                        {showDetails && (
                                            <Card
                                                padding="$1"
                                                borderWidth={2}
                                                borderRadius="$1"
                                                borderColor="transparent"
                                                backgroundColor="transparent"
                                            >
                                                <Text color="$gray10" textAlign="justify">
                                                    This is a high-quality product made from premium materials, offering durability and comfort. Ideal for casual wear.
                                                </Text>
                                            </Card>
                                        )}

                                        {/* Colors */}
                                        <YStack space="$2">
                                            <XStack space="$2">
                                                <Text fontWeight="600">Color:</Text>
                                                <XStack space="$2">
                                                    <Card width={24} height={24} backgroundColor="$gray10" borderRadius="$4" borderColor="$black" borderWidth={1.5} />
                                                    <Card width={24} height={24} backgroundColor="$sand10" borderRadius="$4" borderColor="$black" borderWidth={1.5} />
                                                    <Card width={24} height={24} backgroundColor="$green10" borderRadius="$4" borderColor="$black" borderWidth={1.5} />
                                                </XStack>
                                            </XStack>

                                            {/* Sizes */}
                                            <XStack space="$2">
                                                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                                                    <Button
                                                        key={size}
                                                        borderColor={selectedSize === size ? "$blue10" : "$gray8"}
                                                        backgroundColor={selectedSize === size ? "$blue3" : "$gray3"}
                                                        onPress={() => setSelectedSize(size)}
                                                    >
                                                        {size}
                                                    </Button>
                                                ))}
                                            </XStack>
                                        </YStack>

                                        {/* Price */}
                                        <br />
                                        <Text fontSize="$7" fontWeight="700">$19.99</Text>

                                        {/* Stock Info */}
                                        <Text color="$red10" fontSize="$4" fontWeight="bold">Limited Stock</Text>

                                        {/* Actions */}
                                            <Card>
                                                <Button size="$5" backgroundColor="$black" color="$color1" borderRadius="$4" bg="#273aff" pressStyle={{ bg: '$green10' }}>
                                                    ADD TO CART
                                                </Button>
                                            </Card>
                                        
                                    </>
                                )}
                            </AnimatePresence>
                        </YStack>
                    </XStack>
                </YStack>
            </ScrollView>
        </Theme>
    );
}
