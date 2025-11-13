cmake_minimum_required(VERSION 3.10.2)

project("edgedetectionviewer")

# OpenCV
set(OpenCV_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../opencv/sdk/native/jni")
find_package(OpenCV REQUIRED)

# Include directories
include_directories(${OpenCV_INCLUDE_DIRS})

# Source files
add_library(native-lib SHARED
    native-lib.cpp)

# Link libraries
target_link_libraries(native-lib
    ${OpenCV_LIBS}
    android
    log)
