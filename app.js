import express from 'express';
import path from 'path';
const PORT = 3000;
const app = express();
// absolute path
const staticPath = path.join(import.meta.dirname, 'public');
app.use(express.static(staticPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, "templates", "BCB.html"));
});
app.get('/updates', (req, res) => {
  res.sendFile(path.join(staticPath, "templates", "updates.html"))
})
app.get('/series', (req, res) => {
  res.sendFile(path.join(staticPath, "templates", "series.html"))
})

app.use((req, res) => {
  return res.status(404).sendFile(path.join(staticPath, "templates", "404.html"));
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.on('error', (err) => {
  console.error('Server error:', err);
});