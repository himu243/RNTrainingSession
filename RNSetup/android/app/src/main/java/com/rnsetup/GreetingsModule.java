package com.rnsetup;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class GreetingsModule extends ReactContextBaseJavaModule {
    GreetingsModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "GreetingsModule";
    }

    @ReactMethod
    public void showMessage(String message, Callback callback) {
        // Hi, My Name is Himanshu -> Recieved from React Native side/JS Side
        // "Recieved: Hi, My Name is Himanshu" -> Passing it back to React Native / JS Side
        callback.invoke("Recieved: " + message);
        sendDataToReactNative();
    }

    @ReactMethod
    public void getBatteryLevel(Promise promise) {
        // Calculations to get battery percentage
        int level = 80;
        promise.resolve(level);
        sendDataToReactNative();
    }

    private void sendEvent(ReactContext context, String eventName, WritableMap params) {
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    public void sendDataToReactNative() {
        WritableMap params = Arguments.createMap();
        params.putString("message", "Hello from Native Android");
        sendEvent(getReactApplicationContext(), "MyNativeEvent", params);
    }

    @ReactMethod
    public void getDocumentForSrividya(String message, Callback callback) {
        // Firebase call GetDocument -. Got Data from Firebase
        callback.invoke("Recieved: " + message);
    }
}
