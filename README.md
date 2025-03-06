# GSM Gate Control App

A mobile application built with Expo and React Native for controlling GSM relay gates. This app provides a user-friendly interface for managing gate access and controls.

## Features

- Gate control via SMS commands
- User authentication and access management
- Settings configuration
- Cross-platform support (iOS, Android, Web)

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/gsm-gate-control.git
cd gsm-gate-control
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

## Project Structure

```
gsm-gate-control/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   └── settings.tsx
│   ├── components/
│   │   ├── CustomIcons.tsx
│   │   ├── DeviceInfo.tsx
│   │   └── Header.tsx
│   └── _layout.tsx
├── assets/
│   └── images/
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
└── tsconfig.json
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_API_KEY=your_api_key
```

## Deployment

### Building for Production

```bash
# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

### Google Play Store Deployment

1. Create a Google Play Developer account
2. Generate a keystore and configure in `app.json`:

```json
{
  "expo": {
    "android": {
      "package": "com.gatecontrol.app",
      "versionCode": 1
    }
  }
}
```

3. Build the Android App Bundle:
```bash
eas build --platform android --profile production
```

4. Submit to Google Play Console:
   - Log in to [Google Play Console](https://play.google.com/console)
   - Create a new application
   - Upload the AAB file
   - Fill in store listing details
   - Submit for review

### Apple App Store Deployment

1. Enroll in the Apple Developer Program
2. Configure `app.json`:

```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.gatecontrol.app",
      "buildNumber": "1.0.0"
    }
  }
}
```

3. Build for iOS:
```bash
eas build --platform ios --profile production
```

4. Submit to App Store Connect:
   - Log in to [App Store Connect](https://appstoreconnect.apple.com)
   - Create a new application
   - Upload the IPA file using Transporter
   - Configure app details and screenshots
   - Submit for review

## GitHub Repository Setup

1. Initialize Git repository:
```bash
git init
```

2. Add files to Git:
```bash
git add .
git commit -m "Initial commit"
```

3. Create a new repository on GitHub

4. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/gsm-gate-control.git
git branch -M main
git push -u origin main
```

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling

### Testing

```bash
npm run test
```

### Linting

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@gatecontrol.com or open an issue in the GitHub repository.