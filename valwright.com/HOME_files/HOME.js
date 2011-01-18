// Created by iWeb 3.0.1 local-build-20100708

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,320),url:'HOME_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'HOME_files/stroke_1.png'},{rect:new IWRect(2,-2,428,4),url:'HOME_files/stroke_2.png'},{rect:new IWRect(430,-2,4,4),url:'HOME_files/stroke_3.png'},{rect:new IWRect(430,2,4,320),url:'HOME_files/stroke_4.png'},{rect:new IWRect(430,322,4,4),url:'HOME_files/stroke_5.png'},{rect:new IWRect(2,322,428,4),url:'HOME_files/stroke_6.png'},{rect:new IWRect(-2,322,4,4),url:'HOME_files/stroke_7.png'}],new IWSize(432,324))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('HOME_files/HOMEMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()}
function onPageUnload()
{Widget.onunload();}
