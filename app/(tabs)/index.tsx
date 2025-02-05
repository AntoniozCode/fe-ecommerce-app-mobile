import { Image, StyleSheet, Platform, View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SimpleScrollView from '@/components/SimpleScrollView';
import { Link } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { CustomIcon } from '@/components/ui/CustomIcon';
import { ScrollView } from 'react-native';

export default function HomeScreen() {  
  return (
    <SimpleScrollView>
      <ThemedView style={styles.titleContainer}>
        <IconSymbol name="menu" color="#000" size={20} />
        <IconSymbol name="location.fill" color="#FF0000" size={20} />
        <ThemedText type="subtitle">Santiago de Chile, Chile</ThemedText>
      </ThemedView>

      {/* MARKETPLACE */}
      <ThemedView className='gap-3 pt-6'>
        <ThemedText className='text-xl font-bold'>Nuevo marketplace</ThemedText>
        <View>
          <View 
            className="bg-[#a8edd4] w-20 h-20 flex gap-1 justify-center items-center rounded-2xl"
          >
            <CustomIcon name="market" size={35} color="#000" />
            <ThemedText className='color-black font-medium'>Store</ThemedText>
          </View>

        </View>
      </ThemedView>

      {/* CATEGORIES */}
      <ThemedView className='gap-3 pt-6'>
        <ThemedText className='text-xl font-bold'>¿Qué pedirás hoy?</ThemedText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className='flex flex-row gap-3'>

            <View className="bg-[#e67a0d] w-40 h-20 flex gap-1 justify-center items-center rounded-md">
              <IconSymbol name="restaurant.fill" size={32} color="white" className='absolute right-2 bottom-2'/>
              <ThemedText className='color-white font-medium absolute top-2 left-2'>Restaurantes</ThemedText>
            </View>

            <View className="bg-[#AF558B] w-40 h-20 flex gap-1 justify-center items-center rounded-md">
              <IconSymbol name="shopping-basket.fill" size={32} color="white" className='absolute right-2 bottom-2'/>
              <ThemedText className='color-white font-medium absolute top-2 left-2'>Supermercados</ThemedText>
            </View>

            <View className="bg-[#4B9DCB] w-40 h-20 flex gap-1 justify-center items-center rounded-md">
              <IconSymbol name="drink.fill" size={32} color="white" className='absolute right-2 bottom-2'/>
              <ThemedText className='color-white font-medium absolute top-2 left-2'>Bebidas</ThemedText>
            </View>

          </View>

        </ScrollView>
        
      </ThemedView>      
    </SimpleScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
