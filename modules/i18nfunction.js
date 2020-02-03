function changeMessageByLocale(locale,localeFirstLanguage,localeSecondLanguage,localeGeneral){

    if(locale === localeFirstLanguage.locale){
      return localeFirstLanguage.message;
    }else if(locale === localeSecondLanguage.locale){
      return localeSecondLanguage.message;
    }else{
      return localeGeneral.message;
    }
    
  }
  



  //#ifdef bb10
    module.exports = { changeMessageByLocale};
//#endif




