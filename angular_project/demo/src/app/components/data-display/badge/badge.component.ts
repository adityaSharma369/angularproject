import { Component } from '@angular/core';

let badgeCode = require('../../../../assets/data/syntax/components/data-display/badgeCode.json');
declare var require: any

@Component({
    templateUrl: './badge.component.html',
})

export class BadgeComponent {

    //Code Highlight
    badgeBasicCode :string;
    badgeStandAloneCode :string;
    badgeOverflowCountCode :string;
    badgeRedBadgeCode :string;
    badgeClickableCode :string;
    badgeDynamicCode :string;
    badgeStatusCode :string;
    badgeAPICode :string;
    badgeAPI2Code :string;

    count = 5;
    dot = true;

    addCount(): void {
        this.count++;
    }

    minCount(): void {
        this.count--;
        if (this.count < 0) {
            this.count = 0;
        }
    }

    ngOnInit() {

        //Code Highlight
        this.badgeBasicCode = badgeCode.badgeBasicCode;
        this.badgeStandAloneCode = badgeCode.badgeStandAloneCode;
        this.badgeOverflowCountCode = badgeCode.badgeOverflowCountCode;
        this.badgeRedBadgeCode = badgeCode.badgeRedBadgeCode;
        this.badgeClickableCode = badgeCode.badgeClickableCode;
        this.badgeDynamicCode = badgeCode.badgeDynamicCode;
        this.badgeStatusCode = badgeCode.badgeStatusCode;
        this.badgeAPICode = badgeCode.badgeAPICode;
        this.badgeAPI2Code = badgeCode.badgeAPI2Code;
    }    
}    
