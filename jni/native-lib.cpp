\
#include <jni.h>
#include <cstring>

// Minimal native stub - does not require OpenCV installed.
// The real assignment would link OpenCV and process image data.

extern "C"
JNIEXPORT jstring JNICALL
Java_com_example_flam_MainActivity_stringFromJNI(JNIEnv* env, jobject /* this */) {
    const char* msg = "Native stub loaded";
    return env->NewStringUTF(msg);
}
