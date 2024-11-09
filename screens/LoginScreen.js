import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Animated, {FadeIn, FadeInDown, FadeInUp, FadeOut} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/Background.jpg')} />

      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(100).springify().damping(3)} className="h-[150] w-[176]" source={require('../assets/images/Vector.png')}/>
      </View>
    
        <View className="h-full w-full flex justify-around pt-48 pb-10 ">
            <View className="flex items-center">
                <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-black font-bold tracking-wider text-5xl">
                    Login
                </Animated.Text>
            </View>

            <View className="flex items-center mx-4 space-y-4">
                <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry/>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                    <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                        <Text className="text-xl font-bold text-white text-center">
                            Login
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                    <Text className="text-black">Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('Signup')}>
                        <Text className="text-sky-400">Signup</Text>
                    </TouchableOpacity>
                </Animated.View>

            </View> 


        </View>

    </View>

  )
}

export default LoginScreen