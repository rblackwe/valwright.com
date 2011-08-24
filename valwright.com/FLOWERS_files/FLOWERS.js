// Created by iWeb 3.0.4 local-build-20110824

function createMediaStream_id2()
{return IWCreatePhotocast("http://valwright.com/valwright.com/FLOWERS_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://valwright.com/valwright.com',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://valwright.com/valwright.com',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(5,new IWSize(81,81),new IWSize(81,35),new IWSize(98,131),27,27,0,new IWSize(12,12)),new IWPhotoFrame([IWCreateImage('FLOWERS_files/Hardcover_bevel_01.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_02.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_03.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_06.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_09.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_08.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_07.png'),IWCreateImage('FLOWERS_files/Hardcover_bevel_04.png')],null,0,0.300000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,225),url:'FLOWERS_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'FLOWERS_files/stroke_1.png'},{rect:new IWRect(2,-2,296,4),url:'FLOWERS_files/stroke_2.png'},{rect:new IWRect(298,-2,4,4),url:'FLOWERS_files/stroke_3.png'},{rect:new IWRect(298,2,4,225),url:'FLOWERS_files/stroke_4.png'},{rect:new IWRect(298,227,4,5),url:'FLOWERS_files/stroke_5.png'},{rect:new IWRect(2,227,296,5),url:'FLOWERS_files/stroke_6.png'},{rect:new IWRect(-2,227,4,5),url:'FLOWERS_files/stroke_7.png'}],new IWSize(300,230))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('FLOWERS_files/FLOWERSMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
