async function loadRounds() {
  const rounds = await fetch('/api/games').then(r=>r.json());
  const container = document.getElementById('roundsContainer');
  rounds.forEach(r => {
    const card = document.createElement('div');
    card.className = 'round-card glitch';
    card.innerHTML = `
      <h2>${r.name}</h2>
      <p>${r.rules}</p>
      <p>Difficulty: ${r.difficulty}</p>
      <p>Starts in: <span id="countdown-${r._id}"></span></p>
    `;
    container.append(card);
    startCountdown(r._id, new Date(r.startTime));
  });
}

function startCountdown(id, startTime) {
  const el = document.getElementById(`countdown-${id}`);
  const interval = setInterval(() => {
    const diff = startTime - new Date();
    if (diff <= 0) { el.textContent = 'LIVE'; clearInterval(interval); }
    else {
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      el.textContent = `${m}m ${s}s`;
    }
  }, 500);
}

loadRounds();
