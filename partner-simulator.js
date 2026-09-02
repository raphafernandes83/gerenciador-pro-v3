(() => {
  const monthlyPrice = 79;
  const networkRate = 0.05;
  const format = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const fields = [['level-one', 'level-one-total'], ['level-two', 'level-two-total'], ['level-three', 'level-three-total']];
  const quantity = (id) => Math.max(0, Number(document.getElementById(id)?.value) || 0);
  const update = () => {
    let total = 0;
    for (const [input, output] of fields) {
      const amount = quantity(input) * monthlyPrice * networkRate;
      total += amount;
      document.getElementById(output).textContent = format.format(amount);
    }
    document.getElementById('network-total').textContent = format.format(total);
  };
  document.addEventListener('DOMContentLoaded', () => {
    for (const [input] of fields) document.getElementById(input)?.addEventListener('input', update);
    update();
    document.getElementById('current-year').textContent = String(new Date().getFullYear());
  });
})();
