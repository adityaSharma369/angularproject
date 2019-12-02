import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

let messageCode = require('../../../../assets/data/syntax/components/feedback/messageCode.json');
declare var require: any

@Component({
    templateUrl: './message.component.html'
})    

export class MessageComponent {

    //Code Highlight
    messageNormalPromptCode: string
    messageTypesCode: string
    messageCustomizeDurationCode: string
    messageLoadingCode: string

    constructor(private message: NzMessageService) {
    }
  
    createBasicMessage(): void {
        this.message.info('This is a normal message');
    }

    createTypeMessage(type: string): void {
        this.message.create(type, `This is a message of ${type}`);
    }

    createDurationMessage(): void {
        this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', { nzDuration: 10000 });
    } 

    createLoadingMessage(): void {
        const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
        setTimeout(_ => {
            this.message.remove(id);
        }, 2500);
    }

    ngOnInit(): void {
        //Code Highlight
        this.messageNormalPromptCode = messageCode.messageNormalPromptCode;
        this.messageTypesCode = messageCode.messageTypesCode;
        this.messageCustomizeDurationCode = messageCode.messageCustomizeDurationCode;
        this.messageLoadingCode = messageCode.messageLoadingCode;
    }
}



