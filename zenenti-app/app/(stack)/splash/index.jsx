import { Image, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import Animated from "react-native-reanimated";

const SplashScreen = () => {
  async function fetchData() {
    // Download assets/Perform loading
    // ex. await api.fetchAssets();
  }

  useEffect(() => {
    fetchData()
      .then(() => {
        router.replace("/welcome");
      })
      .catch(() => {
        // Route to error screen
      });
  });

  const logo = require("../../../assets/images/logo-zenenti.png");
  return (
    <SafeAreaView className={"bg-primary flex items-center justify-center h-full"}>
      <Animated.View className={"animate-soft-pulse"}>
        <Image source={logo} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
