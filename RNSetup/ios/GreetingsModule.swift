//
//  GreetingsModule.swift
//  RNSetup
//
//  Created by Himanshu Ahuja on 30/07/25.
//

import Foundation
import React

@objc(GreetingsModule)
class GreetingsModule: NSObject {
  
  @objc
  func showMessage(_ message: String) {
    print("message: \(message)")
//    callback([NSNull(), "Recieved: \(message)"])
  }
  
  @objc
  func getBatteryLevel(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    let batteryLevel: Int = 80
    resolve(batteryLevel)
  }
}
