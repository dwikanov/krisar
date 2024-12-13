const axios = require('axios');

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'YOUR_REDIRECT_URI';

// Redirect pengguna ke URL otorisasi GitHub
const authorizationUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;

// Setelah pengguna menyetujui, aplikasi Anda akan menerima kode otorisasi
const code = req.query.code;

// Tukarkan kode dengan token akses
axios.post('https://github.com/login/oauth/access_token', {
  client_id: clientId,
  client_secret: clientSecret,
  code,
  redirect_uri
}, { headers: { 'Accept': 'application/json' } })
  .then(response => {
    const accessToken = response.data.access_token;
    // Gunakan token akses untuk membuat permintaan ke API GitHub
  })
  .catch(error => {
    console.error(error);
  });
