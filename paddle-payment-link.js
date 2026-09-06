(() => {
  const transactionId = new URLSearchParams(window.location.search).get('_ptxn');
  if (!transactionId || !window.Paddle) return;

  window.Paddle.Initialize({
    token: 'live_4afc9edc618c1da1fab7eb169dc'
  });
})();
