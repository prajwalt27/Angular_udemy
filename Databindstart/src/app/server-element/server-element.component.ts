import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;

  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constr is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    console.log('text Content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDocheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAFterContentinit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAFterViewinit called!');
    console.log('text Content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of pragraph' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('Ondestroy Called!');
  }
}
