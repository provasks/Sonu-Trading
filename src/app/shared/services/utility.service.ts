import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {});
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
