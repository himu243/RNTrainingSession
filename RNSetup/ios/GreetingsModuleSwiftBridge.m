//
//  GreetingsModuleSwiftBridge.m
//  RNSetup
//
//  Created by Himanshu Ahuja on 30/07/25.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(GreetingsModule, NSObject)

RCT_EXTERN_METHOD(showMessage: (NSString *)message (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getBatteryLevel: (RCTPromiseResolveBlock)resolve (RCTPromiseRejectBlock)reject)


@end
