import express from 'express';
import path from 'path';
const PORT = process.env.PORT || 3000;
const app = express();
// absolute path
const staticPath = path.join(import.meta.dirname, 'public');
const viewsPath = path.join(import.meta.dirname, 'views');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'BCB.html'));
});

app.get('/updates', (req, res) => {
  res.sendFile(path.join(viewsPath, 'updates.html'));
});

app.get('/series', (req, res) => {
  res.sendFile(path.join(viewsPath, 'series.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(viewsPath, '404.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.on('error', (err) => {
  console.error('Server error:', err);
});