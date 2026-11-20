// Renders window.QUIZ (multiple choice), window.LEVELS (easy/medium/hard MCQs) and
// window.THINK (open questions). Stores scores in localStorage so index.html can show progress.
//   score:NN  -> main quiz "x/y"        lvl:NN -> {"easy":"x/y","medium":"x/y","hard":"x/y"}
(function () {
  var PAGE = document.body.dataset.page;
  var quiz = window.QUIZ || [], think = window.THINK || [], levels = window.LEVELS || null;
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  // Render a list of {q, options, answer, why} into host. onAnswer(isCorrect) fires per answer.
  function renderMCQ(host, items, onAnswer) {
    items.forEach(function (item, i) {
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
          btns.forEach(function (x, k) {
            x.disabled = true;
            if (k === item.answer) x.classList.add('right');
          });
          var ok = j === item.answer;
          if (!ok) b.classList.add('wrong');
          onAnswer(ok);
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
  }

  // ---- main quiz ----
  var host = document.getElementById('quiz');
  var answered = 0, correct = 0;
  var score = document.createElement('div');
  score.id = 'score';
  function updateScore() {
    score.textContent = 'Score: ' + correct + ' / ' + quiz.length + '  (answered ' + answered + ')';
    if (answered === quiz.length) save('score:' + PAGE, correct + '/' + quiz.length);
  }
  renderMCQ(host, quiz, function (ok) { answered++; if (ok) correct++; updateScore(); });

  // ---- levels ----
  var lh = document.getElementById('levels');
  if (lh && levels) {
    var meta = [['easy', '🟢 Easy'], ['medium', '🟡 Medium'], ['hard', '🔴 Hard']];
    var saved = {};
    try { saved = JSON.parse(load('lvl:' + PAGE) || '{}'); } catch (e) {}
    meta.forEach(function (m) {
      var key = m[0], items = (levels[key] || []).map(function (a) {
        // shuffle options so the right answer isn't always in the same slot
        var idx = a[1].map(function (_, n) { return n; });
        for (var n = idx.length - 1; n > 0; n--) { var r = Math.floor(Math.random() * (n + 1)); var t = idx[n]; idx[n] = idx[r]; idx[r] = t; }
        return { q: a[0], options: idx.map(function (n) { return a[1][n]; }), answer: idx.indexOf(a[2]), why: a[3] };
      });
      if (!items.length) return;
      var head = document.createElement('div');
      head.className = 'lvl ' + key;
      var title = document.createElement('span'); title.textContent = m[1];
      var tally = document.createElement('small');
      head.appendChild(title); head.appendChild(tally);
      lh.appendChild(head);
      var a = 0, c = 0;
      function paint() { tally.textContent = c + ' / ' + items.length + (a < items.length ? '  (answered ' + a + ')' : ' ✔'); }
      paint();
      renderMCQ(lh, items, function (ok) {
        a++; if (ok) c++; paint();
        if (a === items.length) { saved[key] = c + '/' + items.length; save('lvl:' + PAGE, JSON.stringify(saved)); }
      });
    });
  }

  // ---- open questions ----
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
