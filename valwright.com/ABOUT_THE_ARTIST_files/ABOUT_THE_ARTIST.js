// Created by iWeb 3.0.4 local-build-20110824

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,106),url:'ABOUT_THE_ARTIST_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'ABOUT_THE_ARTIST_files/stroke_1.png'},{rect:new IWRect(2,-2,106,4),url:'ABOUT_THE_ARTIST_files/stroke_2.png'},{rect:new IWRect(108,-2,4,4),url:'ABOUT_THE_ARTIST_files/stroke_3.png'},{rect:new IWRect(108,2,4,106),url:'ABOUT_THE_ARTIST_files/stroke_4.png'},{rect:new IWRect(108,108,4,4),url:'ABOUT_THE_ARTIST_files/stroke_5.png'},{rect:new IWRect(2,108,106,4),url:'ABOUT_THE_ARTIST_files/stroke_6.png'},{rect:new IWRect(-2,108,4,4),url:'ABOUT_THE_ARTIST_files/stroke_7.png'}],new IWSize(110,110))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('ABOUT_THE_ARTIST_files/ABOUT_THE_ARTISTMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
