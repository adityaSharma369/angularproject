import { Component, OnInit } from '@angular/core';
import { NzMessageService, TransferCanMove, TransferItem } from 'ng-zorro-antd';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

let transferCode = require('../../../../assets/data/syntax/components/data-entry/transferCode.json');
declare var require: any

@Component({
    templateUrl: './transfer.component.html'
})   

export class TransferComponent implements OnInit {

    //Code Highlight
    transferBasicCode: string
    transferSearchCode: string
    transferAdvancedCode: string
    transferCustomDatasourceCode: string
    transferCheckBeforeMoveCode: string

    transferBasicList: any[] = [];
    transferSearchList: any[] = [];
    transferAdvancedList = [];
    transferCustomDatasourceList: any[] = [];
    transferCheckBeforeMoveList = [];

    constructor(public msg: NzMessageService) {
    }
    
    ngOnInit(): void {
        
        //Code Highlight
        this.transferBasicCode = transferCode.transferBasicCode;
        this.transferSearchCode = transferCode.transferSearchCode;
        this.transferAdvancedCode = transferCode.transferAdvancedCode;
        this.transferCustomDatasourceCode = transferCode.transferCustomDatasourceCode;
        this.transferCheckBeforeMoveCode = transferCode.transferCheckBeforeMoveCode;

        for (let i = 0; i < 20; i++) {
            this.transferBasicList.push({
                key     : i.toString(),
                title   : `content${i + 1}`,
                disabled: i % 3 < 1,
            });
        }
    
        [ 2, 3 ].forEach(idx => this.transferBasicList[ idx ].direction = 'right');

        for (let i = 0; i < 20; i++) {
            this.transferSearchList.push({
                key        : i.toString(),
                title      : `content${i + 1}`,
                description: `description of content${i + 1}`,
                direction  : Math.random() * 2 > 1 ? 'right' : ''
            });
        }

        this.transferAdvancedGetData();
        this.transferCustomDatasourceGetData();

        for (let i = 0; i < 20; i++) {
            this.transferCheckBeforeMoveList.push({
                key     : i.toString(),
                title   : `content${i + 1}`,
                disabled: i % 3 < 1
            });
        }

        [ 2, 3 ].forEach(idx => this.transferCheckBeforeMoveList[ idx ].direction = 'right');
    }

    transferBasicSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferBasicChange(ret: {}): void {
        console.log('nzChange', ret);
    }

    transferSearchFilterOption(inputValue: string, item: any): boolean {
        return item.description.indexOf(inputValue) > -1;
    }

    transferSearch(ret: {}): void {
        console.log('nzSearchChange', ret);
    }

    transferSearchSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferSearchShange(ret: {}): void {
        console.log('nzChange', ret);
    }

    transferAdvancedGetData(): void {
        const ret = [];
        for (let i = 0; i < 20; i++) {
            ret.push({
                key        : i.toString(),
                title      : `content ${i + 1}`,
                description: `description of content${i + 1}`,
                direction  : Math.random() * 2 > 1 ? 'right' : ''
            });
        }
        this.transferAdvancedList = ret;
    }

    transferAdvancedReload(direction: string): void {
        this.transferAdvancedGetData();
        this.msg.success(`your clicked ${direction}!`);
    }

    transferAdvancedSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferAdvancedChange(ret: {}): void {
        console.log('nzChange', ret);
    }

    transferCustomDatasourceGetData(): void {
        const ret = [];
        for (let i = 0; i < 20; i++) {
            ret.push({
                key        : i.toString(),
                title      : `content${i + 1}`,
                description: `description of content${i + 1}`,
                direction  : Math.random() * 2 > 1 ? 'right' : '',
                icon       : `frown-o`
            });
        }
        this.transferCustomDatasourceList = ret;
    }

    transferCustomDatasourceSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferCustomDatasourceChange(ret: {}): void {
        console.log('nzChange', ret);
    }


    transferCheckBeforeMoveCanMove(arg: TransferCanMove): Observable<TransferItem[]> {
        if (arg.direction === 'right' && arg.list.length > 0) { arg.list.splice(0, 1); }
        return of(arg.list).pipe(delay(1000));
    }

    transferCheckBeforeMoveSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferCheckBeforeMoveChange(ret: {}): void {
        console.log('nzChange', ret);
    }
}    