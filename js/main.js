$(() => {
  'use strict';

  const colors = ['blue','yellow','red',''];
  const interval = 2000;
  let isRunnig = false;

// 信号機の色を順番に変える処理
  const transitColor = color =>
  new Promise(resolve => {
    $('#body').attr('light',color);
    setTimeout(resolve, interval);
  });

// 繰り返し処理およびボタンの表示を切り替える処理
  $('#button').click(async () => {
    if (isRunnig) return;
    isRunnig = true;
    $('#wait').addClass('show');
    $('#push').addClass('hide');
    for (const color of colors) {
      await transitColor(color);
    }
    $('#wait').removeClass('show');
    $('#push').removeClass('hide');
    isRunnig = false;
  });

  // ボタンが押されたように見えるスタイリング
  $('#button')
    .mousedown((e) => {
      $(e.currentTarget).addClass('press');
    })
    .mouseup((e) => {
      $(e.currentTarget).removeClass('press');
    })
});
