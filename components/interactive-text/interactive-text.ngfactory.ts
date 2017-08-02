/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './interactive-text';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '../quiz/quiz';
import * as i5 from '../quiz/quiz.ngfactory';
export const InteractiveTextModuleNgFactory:i0.NgModuleFactory<i1.InteractiveTextModule> = i0.ɵcmf(i1.InteractiveTextModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i3.ɵi,
          i3.ɵi,([] as any[])),i0.ɵmpd(512,i2.CommonModule,i2.CommonModule,([] as any[])),
          i0.ɵmpd(512,i3.ɵba,i3.ɵba,([] as any[])),i0.ɵmpd(512,i3.FormsModule,i3.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i4.QuizModule,i4.QuizModule,([] as any[])),
          i0.ɵmpd(512,i1.InteractiveTextModule,i1.InteractiveTextModule,([] as any[]))]);
    });
const styles_InteractiveText:any[] = ['.group[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }\n\n    p.exercise-completion-counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      font-weight: bold;\n      border-radius: 2px;\n    }\n\n    span.correction[_ngcontent-%COMP%] {\n      border-radius: 2px;\n    }\n\n    span.clickable[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      border-radius: 2px;\n    }\n\n    span.clickable.highlight[_ngcontent-%COMP%] {\n      background-color: #FFF9C4;\n    }\n\n    span.clickable.highlight.completed[_ngcontent-%COMP%] {\n      background-color: #C8E6C9;\n    }\n\n    span.choices[_ngcontent-%COMP%] {\n      border-radius: 2px;\n      display: inline-block;\n      background-color: rgba(255, 255, 255, .9);\n      position: fixed;\n      padding: 1rem;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      width: 100%;\n      max-width: 30rem;\n    }\n\n    span.choices[_ngcontent-%COMP%]:after {\n      content: "";\n      position: absolute;\n      bottom: -8px;\n      left: 50%;\n      transform: translateX(-50%);\n      border-width: 8px 8px 0;\n      border-style: solid;\n      border-color: #fff transparent;\n      display: block;\n      width: 0;\n    }\n\n    span.choices[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n      text-align: right;\n    }\n\n      .btn-close[_ngcontent-%COMP%] {\n        background: none;\n        border: none;\n        padding: 0;\n      }\n\n      .btn-close[_ngcontent-%COMP%]:focus {\n        outline:0;\n      }\n\n        .btn-close[_ngcontent-%COMP%]   .ex[_ngcontent-%COMP%] {\n          height: 2rem;\n          width: 2rem;\n          position: relative;\n          transition: transform .1s linear;\n          -ms-transform: rotate(45deg);\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n        }\n\n        .btn-close[_ngcontent-%COMP%]:hover   .ex[_ngcontent-%COMP%] {\n          transition: transform .1s linear;\n          -ms-transform: rotate(135deg);\n          -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n        }\n\n      .btn-close[_ngcontent-%COMP%]   .ex[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        display: block;\n        height: 1px;\n        width: 100%;\n        background-color: #222;\n        transition: background-color .1s linear;\n      }\n\n      .btn-close[_ngcontent-%COMP%]:hover   .ex[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n        background-color: #00BCD4;\n        transition: background-color .1s linear;\n      }\n\n      .btn-close[_ngcontent-%COMP%]   .ex[_ngcontent-%COMP%]   .line.forward[_ngcontent-%COMP%] {\n        -ms-transform: rotate(90deg);\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n      }'];
export const RenderType_InteractiveText:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_InteractiveText,data:{}});
function View_InteractiveText_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'oe-quiz',([] as any[]),
      (null as any),[[(null as any),'completed']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('completed' === en)) {
          const pd_0:any = ((<any>_co.completedEvent($event,(<any>(<any>_v.parent).parent).context.$implicit)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i5.View_Quiz_0,i5.RenderType_Quiz)),i0.ɵdid(114688,(null as any),0,i4.Quiz,
      ([] as any[]),{data:[0,'data']},{completed:'completed'})],(_ck,_v) => {
    const currVal_0:any = (<any>(<any>_v.parent).parent).context.$implicit.oeQuiz;
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
function View_InteractiveText_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),17,'span',[['class',
      'choices animated fadeInRight']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),11,'nav',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n              '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),8,'button',[['class','btn-close']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.closeAllPrompts()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'div',[['class','ex']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                  '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'span',[['class','line forward']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                  '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','line back']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n              '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_InteractiveText_4)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n          ']))],(_ck,_v) => {
    const currVal_0:any = (((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.oeQuiz);
    _ck(_v,16,0,currVal_0);
  },(null as any));
}
function View_InteractiveText_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),16,'span',[['class',
      'exercise']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),0,'span',[['class','before-clickable']],[[8,'innerHTML',1]],
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),9,'span',
          [['class','clickable']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
          i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
          'ngClass']},(null as any)),i0.ɵpod(['highlight','completed']),(_l()(),i0.ɵted((null as any),
          ['\n          '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',
          ([] as any[]),(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clickable(_v.context.$implicit)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),
      (_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_InteractiveText_3)),i0.ɵdid(16384,(null as any),
          0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',
          [['class','after-clickable']],[[8,'innerHTML',1]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n      ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_1:any = 'clickable';
        const currVal_2:any = _ck(_v,6,0,_co.isHighlighted(_v.context.$implicit),_v.context.$implicit.completed);
        _ck(_v,5,0,currVal_1,currVal_2);
        const currVal_4:any = _v.context.$implicit.showChoices;
        _ck(_v,12,0,currVal_4);
      },(_ck,_v) => {
        const currVal_0:any = _v.context.$implicit.before;
        _ck(_v,2,0,currVal_0);
        const currVal_3:any = _v.context.$implicit.clickable;
        _ck(_v,9,0,currVal_3);
        const currVal_5:any = _v.context.$implicit.after;
        _ck(_v,15,0,currVal_5);
      });
}
function View_InteractiveText_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p',[['class',
      'paragraph']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_InteractiveText_2)),i0.ɵdid(802816,(null as any),
          0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],
      (_ck,_v) => {
        const currVal_0:any = _v.context.$implicit.exercises;
        _ck(_v,3,0,currVal_0);
      },(null as any));
}
export function View_InteractiveText_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_InteractiveText_1)),i0.ɵdid(802816,
      (null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
      {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p',[['class','exercise-completion-counter']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',' out of ',
          ' completed'])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),
          ['\n  ']))],(_ck,_v) => {
    var _co:i1.InteractiveText = _v.component;
    const currVal_0:any = _co.data.paragraphs;
    _ck(_v,2,0,currVal_0);
  },(_ck,_v) => {
    var _co:i1.InteractiveText = _v.component;
    const currVal_1:any = _co.correctedExercisesCount();
    const currVal_2:any = _co.totalExercisesCount();
    _ck(_v,7,0,currVal_1,currVal_2);
  });
}
export function View_InteractiveText_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'oe-interactive-text',
      ([] as any[]),(null as any),(null as any),(null as any),View_InteractiveText_0,
      RenderType_InteractiveText)),i0.ɵdid(114688,(null as any),0,i1.InteractiveText,
      ([] as any[]),(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const InteractiveTextNgFactory:i0.ComponentFactory<i1.InteractiveText> = i0.ɵccf('oe-interactive-text',
    i1.InteractiveText,View_InteractiveText_Host_0,{data:'data'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbXVycGh5MTEvRG9jdW1lbnRzL3d3dy9uZy1lZHUvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS10ZXh0L2ludGVyYWN0aXZlLXRleHQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvbXVycGh5MTEvRG9jdW1lbnRzL3d3dy9uZy1lZHUvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS10ZXh0L2ludGVyYWN0aXZlLXRleHQudHMiLCJuZzovLy9DOi9Vc2Vycy9tdXJwaHkxMS9Eb2N1bWVudHMvd3d3L25nLWVkdS9jb21wb25lbnRzL2ludGVyYWN0aXZlLXRleHQvaW50ZXJhY3RpdmUtdGV4dC50cy5JbnRlcmFjdGl2ZVRleHQuaHRtbCIsIm5nOi8vL0M6L1VzZXJzL211cnBoeTExL0RvY3VtZW50cy93d3cvbmctZWR1L2NvbXBvbmVudHMvaW50ZXJhY3RpdmUtdGV4dC9pbnRlcmFjdGl2ZS10ZXh0LnRzLkludGVyYWN0aXZlVGV4dF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxwIGNsYXNzPVwicGFyYWdyYXBoXCIgKm5nRm9yPVwibGV0IHBhcmFncmFwaCBvZiBkYXRhLnBhcmFncmFwaHNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhlcmNpc2VcIiAqbmdGb3I9XCJsZXQgZXhlcmNpc2Ugb2YgcGFyYWdyYXBoLmV4ZXJjaXNlc1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlZm9yZS1jbGlja2FibGVcIiBbaW5uZXJIdG1sXT1cImV4ZXJjaXNlLmJlZm9yZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbGlja2FibGVcIiBbbmdDbGFzc109XCJ7J2hpZ2hsaWdodCc6IGlzSGlnaGxpZ2h0ZWQoZXhlcmNpc2UpLCAnY29tcGxldGVkJzogZXhlcmNpc2UuY29tcGxldGVkfVwiPlxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJjbGlja2FibGUoZXhlcmNpc2UpXCI+e3tleGVyY2lzZS5jbGlja2FibGV9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNob2ljZXMgYW5pbWF0ZWQgZmFkZUluUmlnaHRcIiAqbmdJZj1cImV4ZXJjaXNlLnNob3dDaG9pY2VzXCI+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlXCIgKGNsaWNrKT1cImNsb3NlQWxsUHJvbXB0cygpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgZm9yd2FyZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBiYWNrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPG9lLXF1aXogW2RhdGFdPVwiZXhlcmNpc2Uub2VRdWl6XCIgKm5nSWY9XCJleGVyY2lzZT8ub2VRdWl6XCIgKGNvbXBsZXRlZCk9XCJjb21wbGV0ZWRFdmVudCgkZXZlbnQsIGV4ZXJjaXNlKVwiPjwvb2UtcXVpej5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZnRlci1jbGlja2FibGVcIiBbaW5uZXJIdG1sXT1cImV4ZXJjaXNlLmFmdGVyXCI+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzcz1cImV4ZXJjaXNlLWNvbXBsZXRpb24tY291bnRlclwiPlxuICAgICAgPHNwYW4+e3tjb3JyZWN0ZWRFeGVyY2lzZXNDb3VudCgpfX0gb3V0IG9mIHt7dG90YWxFeGVyY2lzZXNDb3VudCgpfX0gY29tcGxldGVkPC9zcGFuPlxuICAgIDwvcD5cbiAgIiwiPG9lLWludGVyYWN0aXZlLXRleHQ+PC9vZS1pbnRlcmFjdGl2ZS10ZXh0PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDZVk7TUFBQTtRQUFBO1FBQUE7UUFBMkQ7VUFBQTtVQUFBO1FBQUE7UUFBM0Q7TUFBQSw2Q0FBQTtNQUFBO0lBQVM7SUFBVCxXQUFTLFNBQVQ7Ozs7b0JBVEY7TUFBQTtNQUFBLGdCQUF3RSxtREFDdEU7TUFBQTtNQUFBLDRDQUFLO01BQ0g7VUFBQTtZQUFBO1lBQUE7WUFBMEI7Y0FBQTtjQUFBO1lBQUE7WUFBMUI7VUFBQSxnQ0FBc0Q7TUFDcEQ7VUFBQSwwREFBZ0I7VUFBQSwyQkFDZDtVQUFBO1VBQUEsOEJBQWtDO01BQ2xDO1VBQUE7TUFBK0IsdURBQzNCO1VBQUEsdUJBQ0M7TUFDTCxtREFDTjtVQUFBLDRFQUFBO1VBQUE7VUFBQSxlQUFvSDtJQUFsRjtJQUFsQyxZQUFrQyxTQUFsQzs7OztvQkFiTjtNQUFBO01BQW9FLCtDQUNsRTtVQUFBO1VBQUEsMERBQW9FO1VBQUEsaUJBQ3BFO1VBQUE7VUFBQSx1QkFBQTtzREFBQTtVQUFBLGtDQUF3Qiw0QkFBb0Y7VUFBQSxtQkFDMUc7VUFBQTtZQUFBO1lBQUE7WUFBTTtjQUFBO2NBQUE7WUFBQTtZQUFOO1VBQUEsZ0NBQW9DO01BQTZCLGlEQUNqRTtVQUFBLDhEQUFBO1VBQUE7TUFVTywrQ0FDRjtVQUFBLGlCQUNQO1VBQUE7VUFBQSw4QkFBa0U7OztRQWQ1RDtRQUFrQjtRQUF4QixXQUFNLFVBQWtCLFNBQXhCO1FBRTZDO1FBQTNDLFlBQTJDLFNBQTNDOztRQUg2QjtRQUEvQixXQUErQixTQUEvQjtRQUVzQztRQUFBO1FBYVI7UUFBOUIsWUFBOEIsU0FBOUI7Ozs7b0JBakJKO01BQUE7TUFBK0QsNkNBQzdEO1VBQUEsOERBQUE7VUFBQTtjQUFBLDJCQWlCTzs7UUFqQmdCO1FBQXZCLFdBQXVCLFNBQXZCOzs7O29CQUZOLDJDQUNJO01BQUEsNEVBQUE7TUFBQTtNQUFBLHVDQW1CSTtNQUNKO1VBQUE7TUFBdUMsNkNBQ3JDO1VBQUE7VUFBQSw4QkFBTTtVQUFBLGdCQUErRSwyQ0FDbkY7VUFBQTs7SUF0QmlCO0lBQXJCLFdBQXFCLFNBQXJCOzs7SUFxQlE7SUFBQTtJQUFBOzs7O29CQ3RCWjtNQUFBO2dDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9