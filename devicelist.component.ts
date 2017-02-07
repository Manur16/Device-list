import { Component, OnInit } from '@angular/core';
import { DeviceListService } from '../services/devicelist.service';
import { PanelLoopComponent } from '../../panelloop/panelloop.component';

@Component ({
    selector:'devicelist-app',
    templateUrl: 'app/modules/shared/devicelist/devicelist.component.html',
    styleUrls: ['app/modules/shared/devicelist/devicelist.component.css'],
    providers: [DeviceListService]
})
export class DeviceListComponent implements OnInit{    
   constructor(private deviceService: DeviceListService, private panelloop:PanelLoopComponent) { }

    devicelist:any;

    ngOnInit(){
        this.getDeviceList();
    }

    getDeviceList(){  

        this.deviceService.getDevices().then(
            response => {
                this.devicelist = [response[0]]; 
            },
            error => {
                console.log(error);               
            }
        );
    }
    setDevicesInfo(event, clkdElement){
        var deviceInfo = clkdElement ;
        this.panelloop.setDeviceInfo(deviceInfo);
    }
    displayDeviceProp(){
        //siteFlag:boolean = true;
        this.panelloop.setDevicePropFlag();
     
    }
}