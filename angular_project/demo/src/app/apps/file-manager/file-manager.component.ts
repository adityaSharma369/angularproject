import { Component, TemplateRef  } from '@angular/core';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { AppsService } from '../../shared/services/apps.service';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';

import { Files } from '../../shared/interfaces/file-manager.type';

@Component({
    templateUrl: './file-manager.component.html'
})

export class FileManagerComponent  {

    files : Files[];

    themeColors = this.colorConfig.get().colors;
    selectedFile: string = '';
    listView:boolean = false;
    isDetailsOpen: boolean = false;
    isNavOpen: boolean = false;

    colorRed = this.themeColors.red;
    colorBlue = this.themeColors.blue;
    colorCyan = this.themeColors.cyan;
    colorGold = this.themeColors.gold;
    colorVolcano = this.themeColors.volcano;
    colorPurple = this.themeColors.purple;

    private dropdown: NzDropdownContextComponent;

    constructor(
        private colorConfig : ThemeConstantService,
        private fileManagerSvc: AppsService, 
        private nzDropdownService: NzDropdownService) {
    }

    ngOnInit(): void {
        this.fileManagerSvc.getFileManagerJson().subscribe(data => {
            this.files = data;
        });
    }

    changeView() {
        this.listView = !this.listView;
    }

    contextMenu($event: MouseEvent, contextDropdownTpl: TemplateRef<void>, selected: string): void {
        this.dropdown = this.nzDropdownService.create($event, contextDropdownTpl);
        this.selectedFile = selected;
        this.isDetailsOpen = true;
    }

    selectFile(selected: string) {
        this.selectedFile = selected;
        this.isDetailsOpen = true;
    }

    unselectFile() {
        this.selectedFile = '';
    }

    close(e: NzMenuItemDirective): void {
        this.dropdown.close();
    }

    closeContentDetails() {
        this.isDetailsOpen = false;
    }

    navToggler() {
        this.isNavOpen = !this.isNavOpen;
    }
}