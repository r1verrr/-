
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","pages/search/search","pages/add-input/add-input","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#b5b5b5","selectedColor":"#ffdf34","backgroundColor":"#ffffff","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"糗事","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/paper/paper","text":"小纸条","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"pagePath":"pages/home/home","text":"我的","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿糗事百科","compilerVersion":"2.6.1","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜糗事","placeholderColor":"#CCCCCC","disabled":true},"buttons":[{"color":"#FF9619","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false,"bounce":"none"}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","disabled":false},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false}},{"path":"/pages/topic-nav/topic-nav","meta":{},"window":{"navigationBarTitleText":"话题分类","bounce":"none"}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});