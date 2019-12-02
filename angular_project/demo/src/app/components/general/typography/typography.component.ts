import { Component } from '@angular/core'

let typographyCode = require('../../../../assets/data/syntax/components/general/typographyCode.json');
declare var require: any

@Component({
    templateUrl: './typography.component.html'
})

export class TypographyComponent {

    //Code Highlight
    typographyHeadingCode: string
    typographyDisplayHeadingCode: string
    typographyParagraphCode: string
    typographyInlineTextElementCode: string
    typographyTextUltilitiesCode: string

    ngOnInit(): void {

        //Code Highlight
        this.typographyHeadingCode = typographyCode.typographyHeadingCode;
        this.typographyDisplayHeadingCode = typographyCode.typographyDisplayHeadingCode;
        this.typographyParagraphCode = typographyCode.typographyParagraphCode;
        this.typographyInlineTextElementCode = typographyCode.typographyInlineTextElementCode;
        this.typographyTextUltilitiesCode = typographyCode.typographyTextUltilitiesCode;
    }
}  