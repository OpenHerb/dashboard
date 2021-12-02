import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { IMqttClient, IMqttServiceOptions } from './mqtt.model';
export declare const MQTT_SERVICE_OPTIONS: IMqttServiceOptions;
export declare const MqttServiceConfig: InjectionToken<IMqttServiceOptions>;
export declare const MqttClientService: InjectionToken<IMqttClient>;
export declare class MqttModule {
    static forRoot(config: IMqttServiceOptions, client?: IMqttClient): ModuleWithProviders<MqttModule>;
}
