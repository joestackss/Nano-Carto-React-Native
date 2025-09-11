# Nanocarto 🚀

An AI-powered mobile app for creating stunning posters with professional templates and intelligent generation capabilities.

## 📱 Features

### 🎨 AI-Powered Poster Creation

- **Smart Script Mode**: Simplified AI generation for quick poster creation
- **Advanced Script Mode**: Detailed customization options for professional results
- Natural language prompts to describe your vision

### 🎭 Professional Templates

Choose from a variety of professionally designed templates:

- **Display** - Eye-catching display posters
- **Promotion** - Marketing and promotional materials
- **Branding** - Brand-focused designs
- **Announcement** - Event and announcement posters
- **Professional** - Business and corporate designs

### ⚙️ Customizable Settings

- **Multiple Size Options**:
  - 1080 x 1920 px (Mobile Portrait)
  - 1920 x 1080 px (Mobile Landscape)
  - 1080 x 1080 px (Square)
  - 1200 x 1200 px (Large Square)
- **Category Selection**: Various poster categories to choose from
- **Real-time Preview**: See your changes as you make them

### ✨ User Experience

- Smooth onboarding with animated walkthrough
- Haptic feedback for enhanced interaction
- Modern dark theme UI
- Animated transitions and micro-interactions

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev/) & React Native
- **Language**: TypeScript
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Navigation**: [Expo Router](https://expo.github.io/router/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **UI Components**: Expo Vector Icons, Expo Image, Expo Blur

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/joestackss/Nano-Carto-React-Native.git
   cd nanocarto
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on your preferred platform**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 🚀 Usage

1. **Launch the app** and complete the onboarding process
2. **Choose your creation mode**: Smart Script for quick generation or Advanced Script for detailed control
3. **Select a template** from the available categories
4. **Describe your poster** using natural language in the prompt field
5. **Customize settings** like size and category
6. **Generate your poster** and watch the AI work its magic!

## 📁 Project Structure

```
nanocarto/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based screens
│   │   └── create.tsx     # Main poster creation screen
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Onboarding/welcome screen
├── assets/                # Static assets (images, icons)
├── src/
│   └── types/            # TypeScript type definitions
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Key Components

- **Onboarding Screen**: Interactive walkthrough with animated pagination
- **Create Screen**: Main poster generation interface with template selection
- **Template Gallery**: Horizontal scrolling template selection
- **Mode Selector**: Animated toggle between Smart and Advanced modes
- **Prompt Input**: Multi-line text input with focus animations
- **Settings Panel**: Customizable size and category options

## 🔧 Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint for code quality

### Configuration

- **Expo Configuration**: Edit `app.json` for app-specific settings
- **Styling**: Customize colors and themes in `tailwind.config.js`
- **TypeScript**: Type definitions in `src/types/`

## 📱 Platform Support

- ✅ iOS (iPhone)
- ✅ Android
- ✅ Web (PWA)
- ❌ iPad (disabled in config)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- UI components inspired by modern design principles
- Icons by [Ionicons](https://ionic.io/ionicons)
- Images from [Unsplash](https://unsplash.com/)

---

**Made with ❤️ by Joseph Popoola using React Native**
