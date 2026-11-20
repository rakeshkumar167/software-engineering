// Renders window.QUIZ (multiple choice) and window.THINK (open questions) on a page.
// Stores best score per page in localStorage so index.html can show progress.
(function () {
  var PAGE = document.body.dataset.page;
  var quiz = window.QUIZ || [], think = window.THINK || [];
  var answered = 0, correct = 0;
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var host = document.getElementById('quiz');
  var score = document.createElement('div');
  score.id = 'score';
  function updateScore() {
    score.textContent = 'Score: ' + correct + ' / ' + quiz.length + '  (answered ' + answered + ')';
    if (answered === quiz.length) save('score:' + PAGE, correct + '/' + quiz.length);
  }

  quiz.forEach(function (item, i) {
    var box = document.createElement('div');
    box.className = 'q';
    var stem = document.createElement('p');
    stem.className = 'stem';
    stem.textContent = (i + 1) + '. ' + item.q;
    box.appendChild(stem);
    var btns = item.options.map(function (text, j) {
      var b = document.createElement('button');
      b.className = 'opt';
      b.textContent = text;
      b.onclick = function () {
        if (box.classList.contains('answered')) return;
        box.classList.add('answered');
        answered++;
        btns.forEach(function (x, k) {
          x.disabled = true;
          if (k === item.answer) x.classList.add('right');
        });
        if (j === item.answer) correct++; else b.classList.add('wrong');
        updateScore();
      };
      box.appendChild(b);
      return b;
    });
    var why = document.createElement('div');
    why.className = 'why';
    why.textContent = item.why;
    box.appendChild(why);
    host.appendChild(box);
  });

  var th = document.getElementById('think');
  think.forEach(function (t, i) {
    var d = document.createElement('details');
    d.className = 'think';
    var s = document.createElement('summary');
    s.textContent = (i + 1) + '. ' + t.q;
    var p = document.createElement('p');
    p.innerHTML = t.a;
    d.appendChild(s); d.appendChild(p);
    th.appendChild(d);
  });

  var reset = document.createElement('button');
  reset.className = 'reset'; reset.textContent = 'Retry quiz';
  reset.onclick = function () { location.reload(); };
  host.parentNode.insertBefore(reset, host.nextSibling);
  document.body.appendChild(score);
  updateScore();
})();
