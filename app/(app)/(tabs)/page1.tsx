import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const page1 = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>page1</Text>

            <Link href="/">
                <Text>Go to main</Text>
            </Link>
        </View>
    )
}

export default page1