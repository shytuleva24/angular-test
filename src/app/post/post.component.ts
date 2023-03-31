import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush - данные будут менятся только при изменении самой ссылки на обект (строка 20 файл app.components.ts) или от инпутов, default - будет работать и с строкой 19
  encapsulation: ViewEncapsulation.None // что бы изменить стили с локализированных на глобальные
})
export class PostComponent implements
    OnChanges, // этот метод вызывается, когда у компонента или директивы изменяются входные свойства. Разработчики могут использовать этот метод для выполнения дополнительной обработки данных при изменении входных свойств.
    OnInit, // этот метод вызывается после того, как Angular инициализирует компонент или директиву и установит ее входные свойства. Разработчики могут использовать этот метод для выполнения начальной настройки компонента или директивы.
    DoCheck, // этот метод вызывается, когда Angular проверяет компонент или директиву на изменения. Разработчики могут использовать этот метод для выполнения дополнительной обработки данных, если необходимо.
    AfterContentInit, // этот метод вызывается после того, как Angular вставил внутренний контент в компонент или директиву. Разработчики могут использовать этот метод для выполнения дополнительной обработки внутреннего контента.
    AfterContentChecked, //  этот метод вызывается после того, как Angular проверил внутренний контент компонента или директивы. Разработчики могут использовать этот метод для выполнения дополнительной обработки внутреннего контента, если необходимо.
    AfterViewInit, // этот метод вызывается после того, как Angular отображает представление компонента или директивы и инициализирует все внутренние элементы. Разработчики могут использовать этот метод для выполнения дополнительной обработки отображения компонента или директивы
    AfterViewChecked, // этот метод вызывается после того, как Angular проверил представление компонента или директивы на изменения. Разработчики могут использовать этот метод для выполнения дополнительной обработки представления компонента или директивы, если необходимо.
    OnDestroy // этот метод вызывается, когда компонент или директива удаляются из приложения. Разработчики могут использовать этот метод для выполнения дополнительной обработки перед удалением компонента или директивы.
{
  @Input('myPost') post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef
  removePost() {
    this.onRemove.emit(this.post.id)
  }
  ngOnChanges(changes: SimpleChanges): void { console.log('ngOnChanges', changes) }
  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement)
  }
  ngDoCheck(): void { console.log('ngDoCheck') }
  ngAfterContentInit(): void { console.log('ngAfterContentInit') }
  ngAfterContentChecked(): void { console.log('ngAfterContentChecked') }
  ngAfterViewInit(): void { console.log('ngAfterViewInit') }
  ngAfterViewChecked(): void { console.log('ngAfterViewChecked') }
  ngOnDestroy(): void { console.log('ngOnDestroy') }
}
