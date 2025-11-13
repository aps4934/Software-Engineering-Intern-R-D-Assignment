#include <jni.h>
#include <string>
#include <opencv2/opencv.hpp>
#include <opencv2/imgproc.hpp>
#include <android/log.h>

#define LOG_TAG "NativeLib"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)

extern "C" {

JNIEXPORT void JNICALL
Java_com_example_edgedetectionviewer_MainActivity_processFrame(JNIEnv *env, jobject thiz, jlong addrRgba, jboolean enableEdgeDetection) {
    cv::Mat &frame = *(cv::Mat *) addrRgba;

    if (enableEdgeDetection) {
        // Convert to grayscale
        cv::Mat gray;
        cv::cvtColor(frame, gray, cv::COLOR_RGBA2GRAY);

        // Apply Gaussian blur to reduce noise
        cv::GaussianBlur(gray, gray, cv::Size(5, 5), 0);

        // Apply Canny edge detection
        cv::Mat edges;
        cv::Canny(gray, edges, 50, 150);

        // Convert back to RGBA for display
        cv::cvtColor(edges, frame, cv::COLOR_GRAY2RGBA);
    } else {
        // For raw feed, just ensure it's in RGBA
        // Assuming input is already RGBA
    }
}

}
