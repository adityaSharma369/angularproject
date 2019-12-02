import { Component, TemplateRef } from '@angular/core'
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';

let dropdownCode = require('../../../../assets/data/syntax/components/navigation/dropdownCode.json');
declare var require: any

@Component({
    templateUrl: './dropdown.component.html'
})

export class dropdownComponent {

    //Code Hightlight
    dropdownBasicCode: string
    dropdownOtherElementsCode: string
    dropdownClickEventCode: string
    dropdownCascadingCode: string
    dropdownContextMenuCode: string
    dropdownPlacementCode: string
    dropdownTriggerCode: string
    dropdownButtonCode: string
    dropdownHidingCode: string

    visible = false;

    private dropdown: NzDropdownContextComponent;

    contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
        this.dropdown = this.nzDropdownService.create($event, template);
    }

    close(e: NzMenuItemDirective): void {
        console.log(e);
        this.dropdown.close();
    }

    log(data: string): void {
        console.log(data);
    }

    change(value: boolean): void {
        console.log(value);
    }

    logButton(): void {
        console.log('click dropdown button');
    }

    constructor(private nzDropdownService: NzDropdownService) {

    }

    ngOnInit(): void {

        //Code Hightlight
        this.dropdownBasicCode = dropdownCode.dropdownBasicCode;
        this.dropdownOtherElementsCode = dropdownCode.dropdownOtherElementsCode;
        this.dropdownClickEventCode = dropdownCode.dropdownClickEventCode;
        this.dropdownCascadingCode = dropdownCode.dropdownCascadingCode;
        this.dropdownContextMenuCode = dropdownCode.dropdownContextMenuCode;
        this.dropdownPlacementCode = dropdownCode.dropdownPlacementCode;
        this.dropdownTriggerCode = dropdownCode.dropdownTriggerCode;
        this.dropdownButtonCode = dropdownCode.dropdownButtonCode;
        this.dropdownHidingCode = dropdownCode.dropdownHidingCode;
    }

}    