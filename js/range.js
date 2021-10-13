let range1Indecator = null;
let range2Indecator = null;
let range3Indecator = null;
let range4Indecator = null;
let lastRangChanged = 0;

let color0 = '#CC2E4F';
let color1 = '#e65a34';
let color2 = '#ff841b';
let color3 = '#ffae33';
let color4 = '#ffda4c';
let color5 = '#ece84d';
let color6 = '#d8f54d';
let color7 = '#b3e941';
let color8 = '#8cdc34';
let color9 = '#4cd146';
let color10 = '#04C65D';
// Position of span that shows range value and tick curve position
// let siteDir = window.location.pathname;

let url = 'url(' + $('.range-curve').prop('src') + ')';
// console.log(url);

let surveyWidth = $('.questions-list').width();
const tickContainer = document.querySelector('#range-wrapp-1');
const range = document.getElementById('range');
const rangeV = document.getElementById('rangeValue');
let rangeChanging = 0;
const setValue = () => {
  // Span position and inner value
  let newValue = Number((range.value - range.min) * 10 / (range.max - range.min));
  const newPosition = newValue;
  rangeV.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
  $('#points-box').text(newValue);



  // Tick curve position
  let newP = (newValue / 10) * 100;
  newP = newP.toString();
  let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
  let newProperties = url + newMaskProperties;
  $('#tickContainer').css('-webkit-mask', newProperties);
  $('#tickContainer').css('-webkit-mask-repeat', 'no-repeat');
  $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, ' + color0 + ' 0%, ' + color1 +' 9.38%, ' + color2 + ' 18.75%, ' + color3 + ' 27.6%, ' + color4 + ' 38.02%, ' + color5 + ' 48.44%, ' + color6 + ' 60.94%, ' + color7 + ' 71.88%, ' + color8 + ' 82.29%, ' + color9 + ' 91.15%, ' + color10 + ' 100%)');
  $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

  let pointMarks = $('#range-wrapp-1 .point-marck');


  if (newValue >= 0.2 && newValue < 1) {
    rangeChanging = 1;
    $(range).attr('step', '1');
    newValue = 0;
    range1Indecator = 0;
    $('#rangeValue').css('transform', 'translateX(-50%)');
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#points-box').css('opacity', '1');
    $('#points-box').text(newValue);
    $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, ' + color0 + ' 0%, ' + color1 +' 9.38%, ' + color2 + ' 18.75%, ' + color3 + ' 27.6%, ' + color4 + ' 38.02%, ' + color5 + ' 48.44%, ' + color6 + ' 60.94%, ' + color7 + ' 71.88%, ' + color8 + ' 82.29%, ' + color9 + ' 91.15%, ' + color10 + ' 100%)');
    // $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg,  0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $(range).css({
      'width': '128%',
      'margin-left': '-12%'
    });
  }

  if (newValue == 0) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-50%)');
    $('#points-box').css({
      'transform': 'translateX(-6px)',
      'color': color0
    });
  }
  if (newValue == 1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[1]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-53%)');
    $('#points-box').css({
      'transform': 'translateX(-5px)',
      'color': color1
    });
  }
  if (newValue == 2) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[2]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-55%)');
    $('#points-box').css({
      'transform': 'translateX(-5px)',
      'color': color2
    });
  }
  if (newValue == 3) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[3]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-61%)');
    $('#points-box').css({
      'transform': 'translateX(-7px)',
      'color': color3
    });
  }
  if (newValue == 4) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[4]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-63%)');
    $('#points-box').css({
      'transform': 'translateX(-9px)',
      'color': color4
    });
  }
  if (newValue == 5) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[5]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-68%)');
    $('#points-box').css({
      'transform': 'translateX(-9px)',
      'color': color5
    });
  }
  if (newValue == 6) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[6]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-71%)');
    $('#points-box').css({
      'transform': 'translateX(-10px)',
      'color': color6
    });
  }
  if (newValue == 7) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[7]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-72%)');
    $('#points-box').css({
      'transform': 'translateX(-10px)',
      'color': color7
    });
  }
  if (newValue == 8) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[8]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-79%)');
    $('#points-box').css({
      'transform': 'translateX(-11px)',
      'color': color8
    });
  }
  if (newValue == 9) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[9]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-80%)');
    $('#points-box').css({
      'transform': 'translateX(-11px)',
      'color': color9
    });
  }
  if (newValue == 10) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[10]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-86%)');
    $('#points-box').css({
      'transform': 'translateX(-17px)',
      'color': color10
    });
    if (surveyWidth > 420){
      $('#rangeValue').css('transform', 'translateX(-89%)');
    }
  }
  if (newValue == 0.1) {
    $(pointMarks).removeClass('active-mark');
    $(pointMarks[0]).addClass('active-mark');
    $('#rangeValue').css('transform', 'translateX(-50%)');
    $('#points-box').css({
      'transform': 'translateX(-6px)',
      'color': '#BA1417'
    });
  }
};

// Initialize setValue onload and oninput
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


$(range).on('change', function () {
  
  rangeChanging = 1;
  let pointMarks = $('#range-wrapp-1 .point-marck');
    // Span position and inner value
    let newValue = Math.round(((range.value - range.min) * 10 / (range.max - range.min) * 1));
    const newPosition = newValue;
    rangeV.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    $('#points-box').text(newValue);

    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    let newMaskProperties = `${newP}% 0/60px 25px, linear-gradient(to right, #fff calc(50% - 60px/2 + 7px), transparent 0 calc(50% + 60px/2 - 2px), #fff 0) right ${newP}% top 20px/calc(200% - 60px) 4px`;
    let newProperties = url + newMaskProperties;
    $('#tickContainer').css('-webkit-mask', newProperties);
    $('#tickContainer').css('-webkit-mask-repeat', 'no-repeat');

    $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
    console.log(newValue)
    $(range).val(newValue);
    $('#points-box').css('opacity', '1');
    $(range).attr('step', '1');
    $(range).css({
      'width': '128%',
      'margin-left': '-12%'
    });



    if (newValue == 0) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[0]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-50%)');
      $('#points-box').css({
        'transform': 'translateX(-6px)',
        'color': '#BA1417'
      });
    }
    if (newValue == 1) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[1]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-53%)');
      $('#points-box').css({
        'transform': 'translateX(-5px)',
        'color': '#CD0800'
      });
    }
    if (newValue == 2) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[2]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-55%)');
      $('#points-box').css({
        'transform': 'translateX(-5px)',
        'color': '#F45800'
      });
    }
    if (newValue == 3) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[3]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-61%)');
      $('#points-box').css({
        'transform': 'translateX(-7px)',
        'color': '#F45800'
      });
    }
    if (newValue == 4) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[4]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-63%)');
      $('#points-box').css({
        'transform': 'translateX(-9px)',
        'color': '#FFB800'
      });
    }
    if (newValue == 5) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[5]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-68%)');
      $('#points-box').css({
        'transform': 'translateX(-9px)',
        'color': '#D7E317'
      });
    }
    if (newValue == 6) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[6]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-71%)');
      $('#points-box').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 7) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[7]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-72%)');
      $('#points-box').css({
        'transform': 'translateX(-10px)',
        'color': '#D1E01F'
      });
    }
    if (newValue == 8) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[8]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-79%)');
      $('#points-box').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 9) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[9]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-80%)');
      $('#points-box').css({
        'transform': 'translateX(-11px)',
        'color': '#00D086'
      });
    }
    if (newValue == 10) {
      $(pointMarks).removeClass('active-mark');
      $(pointMarks[10]).addClass('active-mark');
      $('#rangeValue').css('transform', 'translateX(-86%)');
      $('#points-box').css({
        'transform': 'translateX(-17px)',
        'color': '#00D086'
      });
      if (surveyWidth > 420){
        $('#rangeValue').css('transform', 'translateX(-89%)');
      }
    }
    // if (newValue < 2) {
    //   $('#rangeValue').css('transform', 'translateX(-50%)');
    // }
    if (newValue <= 6) {
      range1Indecator = 0;
    } else if (newValue > 6) {
      range1Indecator = 1;
    }
});

$(range).on('input', function () {
    let value = $(this).val();
    if(value < 5){
        $('.range-labels').find('.label-0').removeClass('active')
        $('.range-labels').find('.label-10').addClass('active')
    }
    if(value > 5) {
        $('.range-labels').find('.label-10').removeClass('active')
        $('.range-labels').find('.label-0').addClass('active')
    }
});
$(range).on('change', function () {
  $(this).parents('.question-wrap').find('.btn-next').fadeIn(300);
});