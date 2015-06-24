/*jslint browser : true, continue : true,
  devel  : true, indent : 2,    maxerr   : 50,
  newcap : true, nomen  : true, plusplus : true,
  regexp : true, sloppy : true, vars : true,
  white  : true
*/
/*global jQuery */

// Module /spa/
// Provides chat and slider capability
//
var spa = (function ($) {
  // Module scope variables
  var
    // set constants
    configMap = {
      extend_height : 434,
      extend_title : 'Click to retract',
      retracted_height : 16,
      retracted_title : 'Click to extend',
      template_html : '<div class="spa-slider"></div>'
    },

    // Declare all module scope variables
    $chatSlider,
    toggleSlider, onClickSlider, initModule;

  // DOM method /toggleSlider/
  // alternate slider height
  //
  toggleSlider = function () {
    var
      slider_height = $chatSlider.height();

    // extend slider if fully retracted
    if (slider_height === configMap.retracted_height) {
      $chatSlider
        .animate({ height : configMap.extended_height })
        .attr( 'title', configMap.extended_title );
        return true;
    }

    //retract slider if fully extended
    if (slider_height === configMap.extended_height) {
      $chatSlider
        .animate({ height : configMap.retracted_height })
        .attr( 'title', configMap.retracted_title );
        return true;
    }

    // do not take action if slider is in transition
    return false;
  };

  // Event handle /onClickSlider/
  // receives click event and calls toggleSlider
  //
  onClickSlider = function (event) {
    toggleSlider();
    return false;
  };
  // Public method /initModule/
  // sets initial state and provides feature
  //
  initModule = function ($container) {

    // render HTML

    $container.html (configMap.template_html);

    $chatSlider = $container.find('.spa-slider');
    // initialize slider height and title
    // bind the user click event to the handler
    $chatSlider
      .attr('title', configMap.retracted_title)
      .click( onClickSlider);

      return true;
  };

  return { initModule : initModule };
} (jQuery));
// Start spa once DOM is ready
//
jQuery(document).ready(
  function () { spa.initModule(jQuery('#spa') ); }
);
