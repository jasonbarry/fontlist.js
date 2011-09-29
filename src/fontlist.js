(function($) {
  $.fontlist = function() {
    
    var fonts = [
      'ACaslonPro-Bold',
      'ACaslonPro-BoldItalic',
      'ACaslonPro-Italic',
      'ACaslonPro-Regular',
      'ACaslonPro-Semibold',
      'ACaslonPro-SemiboldItalic',
      'AGaramondPro-Bold',
      'AGaramondPro-BoldItalic',
      'AGaramondPro-Italic',
      'AGaramondPro-Regular',
      'Academy Engraved LET',
      'AdobeArabic-Bold',
      'AdobeArabic-BoldItalic',
      'AdobeArabic-Italic',
      'AdobeArabic-Regular',
      'AdobeFanHeitiStd-Bold',
      'AdobeFangsongStd-Regular',
      'AdobeGothicStd-Bold',
      'AdobeHebrew-Bold',
      'AdobeHebrew-BoldItalic',
      'AdobeHebrew-Italic',
      'AdobeHebrew-Regular',
      'AdobeHeitiStd-Regular',
      'AdobeKaitiStd-Regular',
      'AdobeMingStd-Light',
      'AdobeMyungjoStd-Medium',
      'AdobeSongStd-Light',
      'AlBayan',
      'AlBayan-Bold',
      'AmericanTypewriter',
      'Andale Mono',
      'Apple Chancery',
      'AppleMyungjo',
      'Ayuthaya',
      'Baghdad',
      'Bank Gothic',
      'Baskerville',
      'BellGothicStd-Black',
      'BellGothicStd-Bold',
      'BiauKai',
      'Big Caslon',
      'BirchStd',
      'Blackmoor LET',
      'BlackoakStd',
      'Bodoni Ornaments ITC TT',
      'Bodoni SvtyTwo ITC TT',
      'Bodoni SvtyTwo OS ITC TT',
      'Bodoni SvtyTwo SC ITC TT',
      'Bordeaux Roman Bold LET',
      'Brush Script MT',
      'BrushScriptStd',
      'Capitals',
      'Chalkboard',
      'Chalkduster',
      'ChaparralPro-Bold',
      'ChaparralPro-BoldIt',
      'ChaparralPro-Italic',
      'ChaparralPro-Regular',
      'CharcoalCY',
      'CharlemagneStd-Bold',
      'Cochin',
      'CooperBlackStd',
      'CooperBlackStd-Italic',
      'Copperplate',
      'Corsiva Hebrew',
      'DecoTypeNaskh',
      'DevanagariMT',
      'DevanagariMT-Bold',
      'Didot',
      'Doremi',
      'EccentricStd',
      'EuphemiaUCAS',
      'EuphemiaUCAS-Bold',
      'EuphemiaUCAS-Italic',
      'Futura',
      'Geneva',
      'GiddyupStd',
      'GillSans',
      'GujaratiMT',
      'GujaratiMT-Bold',
      'Gungseo',
      'Gurmukhi MT',
      'HeadlineA',
      'Hei',
      'Helvetica Neue',
      'Herculanum',
      'Hiragino Sans GB',
      'HoboStd',
      'Hoefler Text',
      'Impact',
      'InaiMathi',
      'Jazz LET',
      'Kai',
      'Kailasa',
      'Kokonor',
      'KozGoPro-Bold',
      'KozGoPro-ExtraLight',
      'KozGoPro-Heavy',
      'KozGoPro-Light',
      'KozGoPro-Medium',
      'KozGoPro-Regular',
      'KozMinPro-Bold',
      'KozMinPro-ExtraLight',
      'KozMinPro-Heavy',
      'KozMinPro-Light',
      'KozMinPro-Medium',
      'KozMinPro-Regular',
      'Krungthep',
      'KufiStandardGK',
      'LetterGothicStd',
      'LetterGothicStd-Bold',
      'LetterGothicStd-BoldSlanted',
      'LetterGothicStd-Slanted',
      'LithosPro-Black',
      'LithosPro-Regular',
      'MarkerFelt-Thin',
      'MarkerFelt-Wide',
      'MesquiteStd',
      'Microsoft Sans Serif',
      'MinionPro-Bold',
      'MinionPro-BoldCn',
      'MinionPro-BoldCnIt',
      'MinionPro-BoldIt',
      'MinionPro-It',
      'MinionPro-Medium',
      'MinionPro-MediumIt',
      'MinionPro-Regular',
      'MinionPro-Semibold',
      'MinionPro-SemiboldIt',
      'Mona Lisa Solid ITC TT',
      'Mshtakan',
      'MshtakanBold',
      'MshtakanBoldOblique',
      'MshtakanOblique',
      'MyriadPro-Bold',
      'MyriadPro-BoldCond',
      'MyriadPro-BoldCondIt',
      'MyriadPro-BoldIt',
      'MyriadPro-Cond',
      'MyriadPro-CondIt',
      'MyriadPro-It',
      'MyriadPro-Regular',
      'MyriadPro-Semibold',
      'MyriadPro-SemiboldIt',
      'Nadeem',
      'NewPeninimMT',
      'NewPeninimMT-Bold',
      'NewPeninimMT-BoldInclined',
      'NewPeninimMT-Inclined',
      'NuevaStd-BoldCond',
      'NuevaStd-BoldCondItalic',
      'NuevaStd-Cond',
      'NuevaStd-CondItalic',
      'OCRAStd',
      'Optima',
      'OratorStd',
      'OratorStd-Slanted',
      'Osaka',
      'Osaka-Mono',
      'Palatino',
      'Papyrus',
      'Party LET',
      'Pilgi',
      'PlantagenetCherokee',
      'PoplarStd',
      'PortagoITC TT',
      'PrestigeEliteStd-Bd',
      'Princetown LET',
      'Raanana',
      'RaananaBold',
      'RosewoodStd-Regular',
      'STHeiti',
      'Santa Fe LET',
      'Sathu',
      'Savoye LET',
      'SchoolHouse Cursive B',
      'SchoolHouse Printed A',
      'Silom',
      'Skia',
      'Snell Roundhand',
      'StencilStd',
      'Stone Sans ITC TT',
      'Synchro LET',
      'Tahoma',
      'Tahoma-Bold',
      'TektonPro-Bold',
      'TektonPro-BoldCond',
      'TektonPro-BoldExt',
      'TektonPro-BoldObl',
      'TrajanPro-Bold',
      'TrajanPro-Regular',
      'Trebuchet MS',
      'Type Embellishments One LET',
      'Zapfino'
    ];
    var installed = [],
        el  = '#fontlist_test';
        
    // create element to test font sizes
    $('<p>')
      .appendTo('body')
      .html('abcdefghijklmnopqrstuvwxyz0123456789')
      .attr('id', el.replace('#',''))
      .css({ fontSize:'13.47px', position:'absolute', opacity:0, top:'0px', left:'0px' });
      
    // default font width and height
    var defaults = { w: getW(el), h: getH(el) };
        
    // go thru huge array of possible fonts
    $.each(fonts, function(index, font){
      // apply font to div in dom
      $(el).css({ fontFamily: font });
      // compare to width and height of default font
      // if different width and height
      if(defaults.w !== getW(el) || defaults.h !== getH(el)){
        // push to installed array
        installed.push(font);
      }
    });
    
    // return array of installed fonts
    return installed;
    
    // returns element's width
    function getW(el) {
      return $(el).css('width');
    };
    
    // returns element's height
    function getH() {
      return $(el).css('height');
    };
  }
})(jQuery);