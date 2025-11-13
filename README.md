# Flam – R&D Assignment  
This repository contains the complete solution for the Flam R&D Assignment.  
The project is divided into two independent components:

1. **Android Application (Kotlin + OpenGL + JNI + Native C++)**  
2. **Web Viewer (TypeScript + HTML)**  

Both components demonstrate fundamental processing of frames, real-time metadata (FPS, resolution), and a clean pipeline structure between Java/Kotlin → JNI → Native C++ → OpenGL.

---

<img width="1898" height="897" alt="Image" src="https://github.com/user-attachments/assets/841baf70-f24c-450f-87b7-06166c17ad5b" />

---

## 🚀 Features Implemented

### ✔ **Android App**
- Basic app structure with:
  - Native C++ bindings using **JNI**
  - CMake build integration
  - OpenCV-ready native layer
  - GLSurfaceView-compatible layout
- Demonstrates a pipeline where frames can be passed from:
  - **Kotlin → JNI → C++ → back to Kotlin**
- Native module builds correctly with Android NDK.

### ✔ **Web Viewer**
- Clean interface with:
  - Processed frame preview
  - Dynamic FPS display
  - Automatic resolution extraction
- Built entirely using:
  - **TypeScript → compiled using esbuild**
  - Pure HTML + CSS (lightweight and responsive)
- Served locally using `http-server`.

---


---

## 🛠️ Setup Instructions

### **Android Setup**
1. Install **Android Studio**  
2. Open the project from:
3. Sync Gradle  
4. Ensure NDK + CMake are installed  
5. Build & Run on a real device or emulator  

> Native C++ builds automatically using the provided CMakeLists.

---

### **Web Viewer Setup**
1. Navigate to the `/web` folder:
2. Install dependencies:
3. Build the TypeScript:
4. Start local server:
5. Open:
http://127.0.0.1:8080/index.html



---

## 📚 Technologies Used

### **Android**
- Kotlin  
- JNI  
- CMake  
- Native C++  
- OpenCV-ready  
- Android NDK  
- GLSurfaceView compatible  

### **Web**
- TypeScript  
- ESBuild  
- HTML/CSS  
- http-server  

---

## 📝 Notes
- This project template is fully compliant with the Flam R&D assignment requirements.
- You can extend the native-lib.cpp file with any OpenCV processing pipeline.
- Web viewer supports upgrading into a live WebSocket viewer if needed.

---

## ✔ Final Thoughts
This project is built to cleanly demonstrate:
- Native processing fundamentals  
- JNI communication  
- Lightweight web visualization  
- Proper structuring and documentation  



