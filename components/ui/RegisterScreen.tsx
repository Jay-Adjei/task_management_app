import React from 'react'
import { View, Text, TextInput } from 'react-native'

const RegisterScreen = () => {
  return (
    <View className='container'>
      <Text className='text-2xl font-bold'>Register</Text>
      <View>
        <View>
            <Text>Enter Email</Text>
            <TextInput placeholder='Email'/>
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen
