package com.example.flam

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // This is a skeleton Activity. In the real assignment you'd attach a GLSurfaceView
        // and the native library.
        setContentView(R.layout.activity_main)
    }
}
