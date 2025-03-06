import React, { useState } from 'react';
import { Stack, Image, Text, YStack } from 'tamagui';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Stack id="Navbar2" bg="white" padding={20} shadow="lg" position="fixed" top={0} width="100%" zIndex={100}>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        
        {/* Logo Uniqlo */}
        <Image source={{ uri: '../public/logo.png' }} width={120} height={70} />

        {/* Ikon Akun dengan Dropdown */}
        <Stack position="relative">
        <img 
  src="https://cdn-icons-png.flaticon.com/512/747/747376.png" 
  width="32" 
  height="32" 
  alt="User Icon" 
  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Tambahkan event ini
  style={{ cursor: 'pointer' }} 
/>



          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <YStack 
              position="absolute" 
              top={40} right={0} 
              bg="white" 
              shadow="md" 
              borderRadius={10} 
              padding={10} 
              width={120}
            >
              <Text onPress={() => alert('Profile')} style={{ padding: 5, cursor: 'pointer' }}>Profile</Text>
              <Text onPress={() => alert('Settings')} style={{ padding: 5, cursor: 'pointer' }}>Settings</Text>
              <Text onPress={() => alert('Logout')} style={{ padding: 5, cursor: 'pointer', color: 'red' }}>Logout</Text>
            </YStack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
