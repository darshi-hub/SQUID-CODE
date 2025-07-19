(async () => {
  const res = await fetch('/api/lore');
  const data = await res.json();
  document.getElementById('cipher').value = data.encryptedText;
})();

document.getElementById('decBtn').onclick = () => {
  const ct = document.getElementById('cipher').value;
  const key = document.getElementById('key').value;
  try {
    const bytes = CryptoJS.AES.decrypt(ct, key);
    const pt = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('secret').innerText = pt || 'Invalid key!';
  } catch {
    document.getElementById('secret').innerText = 'Decryption error';
  }
};
