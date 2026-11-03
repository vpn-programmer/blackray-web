'use strict';
const devices = document.querySelector('#devices');
if (devices instanceof HTMLInputElement) {
  const money = value => value.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ₽';
  const update = () => {
    const n = Math.max(1, Math.min(15, Number(devices.value)));
    const discount = Math.min(35, (n - 1) * 5);
    const daily = 5 * (1 - discount / 100);
    document.querySelector('#count').textContent = String(n);
    document.querySelector('#daily').textContent = money(daily);
    document.querySelector('#monthly').textContent = money(daily * 30);
    document.querySelector('#total').textContent = money(daily * 30 * n);
    document.querySelector('#discount').textContent = discount ? `Семейная скидка: ${discount}% на каждое устройство.` : 'Базовая стоимость без семейной скидки.';
  };
  devices.addEventListener('input', update);
  update();
}
if (location.hash) {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target instanceof HTMLDetailsElement) target.open = true;
}
