
const express = require('express');
const cors = require('cors');
const app = express();
const ytdl = require('ytdl-core');
const port = 8000;

app.use(cors());

app.get('/download', (req, res) => {
  const { url } = req.query;
  const videoStream = ytdl(url, { filter: 'audioandvideo', quality: 'highest' });
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  videoStream.pipe(res);
});

app.get('/download-mp3', (req, res) => {
  const { url } = req.query;
  const audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
  res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
  audioStream.pipe(res);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


