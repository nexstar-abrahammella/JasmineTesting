//Type your code here

  function  loadingScreen(){
    //#ifdef iphone
    kony.application.showLoadingScreen(null, "Loading...",
                                       constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
      shouldShowLabelInBottom: "true",
      separatorHeight: 200,
      progressIndicatorType: constants.PROGRESS_INDICATOR_TYPE_SMALL,
      progressIndicatorColor: "Gray"
    });

    //#endif


    kony.application.showLoadingScreen("sknLoading", "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
      enableMenuKey: true,
      enableBackKey: true,
      progressIndicatorColor: "ffffff77"
    });


  }
    function dismissLoadingScreen(){
 	kony.application.dismissLoadingScreen();
  }
