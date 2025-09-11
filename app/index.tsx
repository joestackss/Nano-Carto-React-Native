import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Separate component for pagination dot to fix React Hook rule
const PaginationDot = ({
  index,
  scrollX,
  screenWidth,
}: {
  index: number;
  scrollX: SharedValue<number>;
  screenWidth: number;
}) => {
  const dotStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * screenWidth,
      index * screenWidth,
      (index + 1) * screenWidth,
    ];

    const width = interpolate(
      scrollX.value,
      inputRange,
      [8, 24, 8],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );

    return {
      width,
      opacity,
    };
  });

  return (
    <Animated.View
      style={[dotStyle]}
      className="h-2 bg-primary rounded-full mx-1"
    />
  );
};

const onboardingData = [
  {
    id: 1,
    title: "Nano Carto Ai \nPoster Creation",
    subtitle:
      "Transform your ideas into stunning posters with the power of artificial intelligence",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=600&fit=crop",
    color: "#00D4FF",
  },
  {
    id: 2,
    title: "Nano Carto\nProfessional Templates",
    subtitle:
      "Choose from hundreds of professionally designed templates for any occasion",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
    color: "#FF6B35",
  },
  {
    id: 3,
    title: "Export &\nShare Instantly",
    subtitle:
      "Download in high resolution and share across all your platforms seamlessly",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
    color: "#00D4FF",
  },
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const scrollRef = useRef<ScrollView>(null);

  // This function is used to navigate to the skip onboarding screen
  const handleSkip = () => {
    Haptics.selectionAsync();
    router.replace("/(tabs)/create");
  };

  // This function is used to navigate to the get started screen
  const handleGetStarted = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.replace("/(tabs)/create");
  };

  // This function is used to handle the scroll event
  const onScroll = (event: any) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  // This function is used to render the onboarding screen
  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Skip Button */}
      <View className="absolute top-12 right-6 z-10">
        <TouchableOpacity
          onPress={handleSkip}
          className="bg-surface px-4 py-2 rounded-full"
        >
          <Text className="text-textSecondary font-semibold">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {onboardingData.map((item, index) => (
          <View
            key={item.id + index}
            className="flex-1"
            style={{ width: SCREEN_WIDTH }}
          >
            <View className="flex-1 items-center justify-center px-8">
              {/* Image */}
              <View className="w-80 h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full"
                  style={{ backgroundColor: "#1C1C1E" }}
                />
                <View className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </View>

              {/* Content */}
              <View className="items-center">
                <Text
                  className="text-white text-4xl font-bold text-center mb-6 leading-tight"
                  style={{ color: item.color }}
                >
                  {item.title}
                </Text>
                <Text className="text-textSecondary text-lg text-center leading-relaxed max-w-xs">
                  {item.subtitle}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Section */}
      <View className="px-8 pb-12">
        {/* Pagination Dots */}
        <View className="flex-row justify-center items-center mb-8">
          {onboardingData.map((_, index) => (
            <PaginationDot
              key={index}
              index={index}
              scrollX={scrollX}
              screenWidth={SCREEN_WIDTH}
            />
          ))}
        </View>

        {/* Action Button - Only show on last slide */}
        {currentIndex === onboardingData.length - 1 && (
          <TouchableOpacity
            onPress={handleGetStarted}
            className="bg-primary rounded-2xl py-4 flex-row items-center justify-center"
          >
            <Text className="text-black font-bold text-lg mr-2">
              Get Started
            </Text>
            <Ionicons name="rocket" size={20} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
