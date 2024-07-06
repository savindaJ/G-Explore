import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { Text, View } from 'react-native'

export default function hello() {
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>Hello, World ! hello brother </Text>
        <TabBarIcon name="home" color={Colors.light.tint} />
    </View>
  )
}
