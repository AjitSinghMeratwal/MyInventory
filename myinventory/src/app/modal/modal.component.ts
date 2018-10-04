import { Component, ElementRef, Input, OnInit, OnDestroy,Output,EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { DialogService } from '../Services/dialog.service';
import {until} from "selenium-webdriver";
import elementIsVisible = until.elementIsVisible;
@Component({
    moduleId: module.id.toString(),
    selector: 'modal',
    template: '<ng-content></ng-content>',
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: JQuery;

    constructor(private modalService: DialogService, private el: ElementRef) {
        this.element = $(el.nativeElement);
    }

    @Output() onSave = new EventEmitter<Boolean>();

    ngOnInit(): void {
        //console.log('ngonit called')
        let modal = this;
        if (!this.id) {

            return;
        }

        this.element.appendTo('body');
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
        //console.log('destroy called')
    }


    open(): void {
        this.element.show();
        $('body').addClass('modal-open');
    }


    close(b:boolean): void {
      this.onSave.emit(b);
        console.log(b);
        this.element.hide();
        $('body').removeClass('modal-open');
    }
}
