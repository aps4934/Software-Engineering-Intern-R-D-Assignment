# Edge Detection Viewer

This project demonstrates my skills in Android development, OpenCV integration via JNI, OpenGL ES rendering, and TypeScript web development. I built a real-time edge detection viewer app that captures camera frames, processes them using OpenCV in C++, and displays the output using OpenGL ES, along with a minimal TypeScript web viewer.

## Features Implemented

### Android App
- Real-time camera feed capture using Camera2 API with TextureView for efficient frame access
- OpenCV Canny edge detection processing implemented in C++ via JNI for performance
- OpenGL ES 2.0 rendering to display processed frames smoothly at 10-15 FPS
- Toggle button to switch between raw camera feed and edge-detected output
- FPS counter overlay and logging of frame processing times

### Web Viewer
- Minimal TypeScript-based web page to showcase web integration skills
- Displays a static sample processed frame with simulated edge-detected pattern
- Shows frame statistics like FPS and resolution
- Modular TypeScript code with proper compilation and build setup

## Setup Instructions

### Prerequisites
- Android Studio with NDK (version 21+) for native development
- OpenCV Android SDK (version 4.x) for computer vision processing
- Node.js (version 14+) for building the web viewer

### Android Setup
1. Clone this repository: `git clone https://github.com/aps4934/Software-Engineering-Intern-R-D-Assignment.git`
2. Download and extract OpenCV Android SDK to the `opencv/` directory in the project root
3. Open the project in Android Studio
4. Configure NDK path in Android Studio settings if not already set
5. Build and run the app on an Android device with camera support (API level 21+)

### Web Viewer Setup
1. Change to the `web/` directory
2. Install dependencies: `npm install`
3. Build the TypeScript code: `npm run build`
4. Start the local server: `npm start` (serves on localhost:8080)

### Dependencies
- OpenCV 4.x for Android (computer vision library)
- Android NDK (for JNI and native C++ code)
- Node.js packages: typescript (for type-safe JavaScript), http-server (for local web serving)

## Quick Explanation of Architecture

### JNI Frame Flow
The app uses a clean separation of concerns:
1. Camera frames are captured in Kotlin using the Camera2 API (MainActivity.kt)
2. Frames are passed to native C++ code through JNI (native-lib.cpp)
3. OpenCV's Canny edge detection is applied efficiently in C++
4. Processed frames are returned to Java and rendered using OpenGL ES (GLRenderer.kt)

### TypeScript Part
The web viewer is built with modern TypeScript practices:
- Class-based architecture (FrameViewer class) for modularity
- Canvas API for rendering the processed frame
- DOM manipulation for updating FPS and resolution displays
- Compiled TypeScript ensures type safety and better maintainability

This project showcases my ability to integrate multiple technologies: Android native development, C++ with OpenCV, OpenGL graphics, and web development with TypeScript.
