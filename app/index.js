import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TEST_NAME } from '@env';
import * as Updates from 'expo-updates';

export default function Page() {
  const triggerUpdate = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        alert('An update is available. Restart your app to apply the update.');
        // Updates.reloadAsync();
      }
    } catch (e) {
      // handle or log error
      console.log(e.message);
    }
  };

  return (
    <View className="flex-1 flex items-center">
      <View style={styles.main} className="space-y-5">
        <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>

        <Link href='/(app)/(tabs)/page1'>
          <Text>View Tabs</Text>
        </Link>

        <Link href='/(app)/(stack)/page1'>
          <Text>View Stack</Text>
        </Link>

        <Text>Get name from env : {TEST_NAME}</Text>

        <View className="flex items-center bg-red-500 p-5 rounded-xl">
          <Pressable onPress={triggerUpdate}>
            <Text className="text-white">
              Update
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: RFPercentage(3),
    color: '#38434D',
  },
});
