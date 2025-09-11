import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface Template {
  id: number;
  title: string;
  category: string;
  image: string;
  isSelected?: boolean;
  badge?: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Display",
    category: "Display",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
    isSelected: true,
  },
  {
    id: 2,
    title: "Promotion",
    category: "Promotion",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Branding",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=600&fit=crop",
    badge: "Editor's Choice",
  },
  {
    id: 4,
    title: "Announcement",
    category: "Announcement",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Professional",
    category: "Professional",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
  },
];

const sizes = [
  { label: "1080 x 1920 px", value: "1080x1920", icon: "phone-portrait" },
  { label: "1920 x 1080 px", value: "1920x1080", icon: "phone-landscape" },
  { label: "1080 x 1080 px", value: "1080x1080", icon: "square" },
  { label: "1200 x 1200 px", value: "1200x1200", icon: "square-outline" },
];

export default function CreateScreen() {
  const [activeMode, setActiveMode] = useState<"smart" | "advanced">("smart");
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [prompt, setPrompt] = useState(
    "stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting."
  );
  const [selectedSize] = useState("1080x1920");
  const [selectedCategory] = useState("Foods and beverage");
  const [isGenerating, setIsGenerating] = useState(false);

  // Animation values
  const modeIndicatorPosition = useSharedValue(0);
  const promptScale = useSharedValue(1);

  // Mode selector animation
  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: modeIndicatorPosition.value }],
  }));

  // This function is used to handle the mode change event
  const handleModeChange = (mode: "smart" | "advanced") => {
    if (mode === activeMode) return;

    Haptics.selectionAsync();
    setActiveMode(mode);
    modeIndicatorPosition.value = withSpring(
      mode === "smart" ? 0 : SCREEN_WIDTH * 0.5 - 32
    );
  };

  // This function is used to handle the template select event
  const handleTemplateSelect = (templateId: number) => {
    Haptics.selectionAsync();
    setSelectedTemplate(templateId);
  };

  // This function is used to handle the generate event
  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      Alert.alert("Generated");
      setIsGenerating(false);
    }, 3000);
  };

  // This function is used to get the prompt input style
  const promptInputStyle = useAnimatedStyle(() => ({
    transform: [{ scale: promptScale.value }],
  }));

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4">
        <TouchableOpacity
          onPress={() => Haptics.selectionAsync()}
          className="p-2"
        >
          <Ionicons name="close" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Mode Selector */}
        <View className="bg-transparent p-1 mb-2 relative overflow-hidden">
          <Animated.View
            style={[indicatorStyle]}
            className="absolute top-1 left-1 w-1/2 h-10  border-b-2 border-b-primary"
          />

          <View className="flex-row">
            <TouchableOpacity
              onPress={() => handleModeChange("smart")}
              className="flex-1 items-center justify-center h-10"
            >
              <Text
                className={`${
                  activeMode === "smart"
                    ? "text-text font-bold"
                    : "text-textSecondary font-medium"
                }`}
              >
                Smart script
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleModeChange("advanced")}
              className="flex-1 items-center justify-center h-10"
            >
              <Text
                className={` ${
                  activeMode === "advanced"
                    ? "text-text font-bold"
                    : "text-textSecondary font-medium"
                }`}
              >
                Advanced script
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Question */}
        <Text className="text-white text-2xl font-bold mb-6">
          What type of posters do you want to create?
        </Text>

        {/* Templates */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {templates.map((template) => {
            console.log(
              "Selected Template",
              selectedTemplate,
              typeof selectedTemplate
            );

            console.log("Template", template.id, typeof template.id);

            return (
              <TouchableOpacity
                key={template.id}
                onPress={() => handleTemplateSelect(template.id)}
                className="mr-4"
              >
                <View
                  className={`w-24 h-36 rounded-xl overflow-hidden relative ${
                    selectedTemplate === template.id
                      ? "border-2 border-text"
                      : ""
                  }`}
                >
                  <Image
                    source={{ uri: template.image }}
                    className="w-full h-full"
                    style={{ backgroundColor: "#1C1C1E" }}
                  />

                  {/* Overlay */}
                  <View className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                    <Text className="text-white font-medium text-sm text-center">
                      {template.title.length > 6
                        ? template.title.slice(0, 6) + "..."
                        : template.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Prompt Input */}
        <Animated.View style={promptInputStyle} className="mb-6">
          <View className="bg-surface rounded-2xl p-4">
            <TextInput
              value={prompt}
              onChangeText={setPrompt}
              placeholder="Describe what you want to create..."
              placeholderTextColor="#8E8E93"
              multiline
              numberOfLines={6}
              className="text-white text-base leading-6"
              style={{ minHeight: 130 }}
              onFocus={() => {
                promptScale.value = withSpring(1.02);
                Haptics.selectionAsync();
              }}
              onBlur={() => {
                promptScale.value = withSpring(1);
              }}
            />

            <TouchableOpacity className="absolute bottom-4 right-4">
              <Ionicons name="image-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Settings */}
        <Text className="text-textSecondary text-lg font-semibold mb-4">
          Settings
        </Text>

        {/* Size Selection */}
        <View className="mb-4">
          <View className="flex-row items-center justify-between bg-surface rounded-2xl px-4 py-4">
            <Text className="text-white font-semibold">Size</Text>
            <View className="flex-row items-center">
              <Text className="text-textSecondary mr-2">
                {sizes.find((s) => s.value === selectedSize)?.label}
              </Text>
              <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
            </View>
          </View>
        </View>

        {/* Category Selection */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between bg-surface rounded-2xl px-4 py-4">
            <Text className="text-white font-semibold">Category</Text>
            <View className="flex-row items-center">
              <Text className="text-textSecondary mr-2">
                {selectedCategory}
              </Text>
              <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Generate Button */}
      <View className="flex-row items-center justify-center pt-4 border-t border-surface">
        <View className=" w-full px-4">
          <TouchableOpacity
            onPress={handleGenerate}
            className="bg-text rounded-2xl py-4 flex-row items-center justify-center w-full"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <ActivityIndicator color="#000000" size="small" />
            ) : (
              <>
                <View className="flex-row items-center justify-center">
                  <View className="w-6 h-6 bg-black rounded-full mr-3 items-center justify-center">
                    <View className="w-3 h-3 bg-primary rounded-full" />
                  </View>
                  <Text className="text-black font-semibold text-lg">
                    Generate
                  </Text>
                </View>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
