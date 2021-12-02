import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  private brokerUrl: string;
  private RABBITMQ_ADDR: number;
  private TELEMETRY_TOPIC: string;
  private CLIENT_ID: string;

  constructor(private httpClient: HttpClient, private socket: Socket) {
    this.brokerUrl = 'http://localhost:9480/updatestockData';
    this.RABBITMQ_ADDR = environment.RABBITMQ_ADDR;
    this.TELEMETRY_TOPIC =  environment.TELEMETRY_TOPIC;
    this.CLIENT_ID = environment.CLIENT_ID;
  }

  public getStocks(): Observable<Array<ITelemetryData>> {
    return this.httpClient.get<Array<ITelemetryData>>(this.brokerUrl)
        .pipe(
            retry(1),
            catchError(this.errorHandeler)
        )
}

  private errorHandeler(error: any): Observable<never> {
    let errorMessage: any = '';
    if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
    } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}


interface ITelemetryData {
  "id": number,
  "tp": number,
  "rh": number,
  "pa":number, 
  "lx":number,
  "sm": number,
  "sc": number,
  "ts": string,
};