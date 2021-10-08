let range1Indecator = null;
let range2Indecator = null;
let range3Indecator = null;
let range4Indecator = null;
let lastRangChanged = 0;

// Position of span that shows range value and tick curve position
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
  tickContainer.style.setProperty('--p', `calc(${(newValue / 10) * 100}%)`);
  $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);

  if (newValue >= 0.2 && newValue < 1) {
    rangeChanging = 1;
    $(range).attr('step', '1');
    newValue = 0;
    range1Indecator = 0;
    $('#points-box').css('opacity', '1');
    $('#points-box').text(newValue);
    $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    $(range).css({
      'width': '128%',
      'margin-left': '-12%'
    });
  }
  if (newValue == 0) {
    $('#rangeValue').css('transform', 'translateX(-79%)');
    $('#points-box').css({
      'transform': 'translateX(-14px)',
      'color': '#BA1417'
    });
  }
  if (newValue == 1) {
    $('#rangeValue').css('transform', 'translateX(-79%)');
    $('#points-box').css({
      'transform': 'translateX(-12px)',
      'color': '#CD0800'
    });
  }
  if (newValue == 2) {
    $('#rangeValue').css('transform', 'translateX(-79%)');
    $('#points-box').css({
      'transform': 'translateX(-12px)',
      'color': '#F45800'
    });
  }
  if (newValue == 3) {
    $('#rangeValue').css('transform', 'translateX(-74%)');
    $('#points-box').css({
      'transform': 'translateX(-12px)',
      'color': '#F45800'
    });
  }
  if (newValue == 4) {
    $('#rangeValue').css('transform', 'translateX(-72%)');
    $('#points-box').css({
      'transform': 'translateX(-10px)',
      'color': '#FFB800'
    });
  }
  if (newValue == 5) {
    $('#rangeValue').css('transform', 'translateX(-66%)');
    $('#points-box').css({
      'transform': 'translateX(-9px)',
      'color': '#D7E317'
    });
  }
  if (newValue == 6) {
    $('#rangeValue').css('transform', 'translateX(-65%)');
    $('#points-box').css({
      'transform': 'translateX(-8px)',
      'color': '#D1E01F'
    });
  }
  if (newValue == 7) {
    $('#rangeValue').css('transform', 'translateX(-62%)');
    $('#points-box').css({
      'transform': 'translateX(-8px)',
      'color': '#EAF65E'
    });
  }
  if (newValue == 8) {
    $('#rangeValue').css('transform', 'translateX(-56%)');
    $('#points-box').css({
      'transform': 'translateX(-8px)',
      'color': '#00D086'
    });
  }
  if (newValue == 9) {
    $('#rangeValue').css('transform', 'translateX(-56%)');
    $('#points-box').css({
      'transform': 'translateX(-8px)',
      'color': '#00AB23'
    });
  }
  if (newValue == 10) {
    $('#rangeValue').css('transform', 'translateX(-52%)');
    $('#points-box').css({
      'transform': 'translateX(-8px)',
      'color': '#056719'
    });
  }
  if (newValue < 2) {
    $('#rangeValue').css('transform', 'translateX(-85%)');
  }
};

// Initialize setValue onload and oninput
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


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