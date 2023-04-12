import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
  } from '@angular/core';
  
  @Directive({
    selector: '[appDragDropSwap]',
  })
  export class DragDropSwapDirective {
    constructor() {}
  
    @HostBinding('attr.draggable') draggable = true;
    @Input('elemPosition') elemPosition: number;
    @Input('list') list: any;
    @Output('returnNewList') returnNewList = new EventEmitter<any>();
  
    @HostListener('dragstart', ['$event'])
    onDragStart(e) {
      e.dataTransfer.setData('text', this.elemPosition);
    }
  
    @HostListener('drop', ['$event'])
    onDrop(e) {
      e.preventDefault();
      let sourceIndex = e.dataTransfer.getData('text');
      let destIndex = this.elemPosition;
      let copyList = [...this.list];
      
      //checking whether it is not the same position as of the dragged element
      if (sourceIndex !== destIndex) {
        copyList.splice(destIndex, 1, this.list[sourceIndex]);
        console.log(copyList[sourceIndex],copyList[destIndex]);        
        copyList.splice(sourceIndex, 1, this.list[destIndex]);
        console.log(copyList[sourceIndex],copyList[destIndex]);  

        this.returnNewList.emit(copyList);
      }
    }
  
    @HostListener('dragover', ['$event'])
    onDragOver(e) {
      e.preventDefault();
    }
  }