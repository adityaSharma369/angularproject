import { Component } from '@angular/core';

let timelineCode = require('../../../../assets/data/syntax/components/data-display/timelineCode.json');
declare var require: any

@Component({
    templateUrl: './timeline.component.html'
})

export class TimelineComponent {

    //Code Highlight
    timelineBasicCode: string;
    timelineColorCode: string;
    timelineLastNodeCode: string;
    timelineCustomCode: string;
    timelineAPICode: string;

    ngOnInit(): void {
        
        //Code Highlight
        this.timelineBasicCode = timelineCode.timelineBasicCode;
        this.timelineColorCode = timelineCode.timelineColorCode;
        this.timelineLastNodeCode = timelineCode.timelineLastNodeCode;
        this.timelineCustomCode = timelineCode.timelineCustomCode;
        this.timelineAPICode = timelineCode.timelineAPICode;
    }
}    