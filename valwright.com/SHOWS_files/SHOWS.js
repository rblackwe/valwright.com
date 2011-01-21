// Created by iWeb 3.0.2 local-build-20110121

function createMediaStream_id2()
{return IWCreatePhotocast("http://valwright.com/valwright.com/SHOWS_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://valwright.com/valwright.com',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://valwright.com/valwright.com',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(136,136),new IWSize(136,115),new IWSize(163,266),27,27,0,new IWSize(18,18)),new IWPhotoFrame([IWCreateImage('SHOWS_files/Hardcover_bevel_01.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_02.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_03.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_06.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_09.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_08.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_07.png'),IWCreateImage('SHOWS_files/Hardcover_bevel_04.png')],null,0,0.500000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('SHOWS_files/SHOWSMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
