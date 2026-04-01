const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    eq: (a, b) => a === b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// ── PROJECT DATA ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'BERT Sentiment Analysis – Multi-GPU Training',
    description: 'Fine-tuned a BERT transformer model (AutoModelForSequenceClassification) on a 3-class sentiment dataset using PyTorch. Implemented multi-GPU DataParallel support, AdamW optimiser, custom Dataset/DataLoader pipeline, and full training loop with loss & accuracy tracking across 3 epochs. Model exported as a deployable ZIP archive.',
    icon: '🤖',
    featured: true,
    stack: ['Python', 'PyTorch', 'BERT', 'HuggingFace', 'Transformers', 'scikit-learn', 'pandas'],
    stackColors: ['purple', 'orange', 'green', 'green', 'green', 'purple', 'purple'],
    github: 'https://github.com/Francis4542',
    live: null,
    highlights: [
      'BERT fine-tuning for 3-class sentiment (positive / neutral / negative)',
      'Multi-GPU training with torch.nn.DataParallel',
      'Custom PyTorch Dataset + DataLoader pipeline',
      'AdamW optimiser with learning rate 2e-5',
      'Loss & accuracy plotted over 3 epochs with matplotlib',
      'Model saved with save_pretrained() for deployment'
    ]
  },
  {
    id: 2,
    title: 'NLP Sentiment Classifier – CPU Optimised',
    description: 'A CPU-optimised version of the BERT sentiment classifier using HuggingFace Transformers. Includes full preprocessing with scikit-learn, train/val split, tqdm progress bars, softmax output, and performance visualisation (loss + accuracy curves). Designed to run on machines without GPU.',
    icon: '🧠',
    featured: false,
    stack: ['Python', 'HuggingFace', 'PyTorch', 'scikit-learn', 'matplotlib', 'tqdm', 'numpy'],
    stackColors: ['purple', 'green', 'orange', 'purple', 'orange', 'green', 'purple'],
    github: 'https://github.com/Francis4542',
    live: null,
    highlights: [
      'CPU-safe device detection (cuda vs cpu fallback)',
      'sklearn LabelEncoder + train_test_split preprocessing',
      'tqdm progress bars for epoch training',
      'F.softmax output for probability scores',
      'Dual-panel matplotlib plot (loss + accuracy)',
      'Fully reproducible Jupyter Notebook workflow'
    ]
  },
  {
    id: 3,
    title: 'Flask Laptop Electronics Store',
    description: 'A full-stack web application built with Flask and MySQL that displays a catalogue of laptops with detailed product pages. Features dynamic routing, Jinja2 templating, live database queries from a MySQL Electronics database, and a clean responsive UI.',
    icon: '💻',
    featured: false,
    stack: ['Python', 'Flask', 'MySQL', 'Jinja2', 'HTML/CSS'],
    stackColors: ['purple', 'purple', 'green', 'green', 'orange'],
    github: 'https://github.com/Francis4542',
    live: null,
    highlights: [
      'Dynamic routing with Flask @app.route',
      'MySQL integration via mysql-connector-python',
      'Jinja2 templating for dynamic HTML pages',
      'Dictionary cursor for clean data access',
      'Separate home + detail page templates'
    ]
  },
  {
    id: 4,
    title: 'Node.js Portfolio Website',
    description: 'This very portfolio — built with Node.js, Express, and Handlebars (HBS). Features server-side rendering, clean REST-style routes, static asset serving, dark/light mode toggle, scroll animations, and a premium UI design.',
    icon: '🚀',
    featured: false,
    stack: ['Node.js', 'Express', 'Handlebars', 'CSS3', 'JavaScript'],
    stackColors: ['green', 'green', 'orange', 'orange', 'purple'],
    github: 'https://github.com/Francis4542',
    live: null,
    highlights: [
      'Server-side rendering with Express + Handlebars',
      'Dark / Light mode toggle',
      'Scroll-triggered animations',
      'Responsive mobile layout',
      'Clean REST route structure'
    ]
  }
];

const skills = [
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    items: [
      { name: 'PyTorch', level: 78 },
      { name: 'HuggingFace Transformers', level: 75 },
      { name: 'BERT / NLP', level: 72 },
      { name: 'scikit-learn', level: 80 }
    ]
  },
  {
    category: 'Backend & Database',
    icon: '🐍',
    items: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'Node.js / Express', level: 72 },
      { name: 'MySQL', level: 78 }
    ]
  },
  {
    category: 'Frontend & Tools',
    icon: '🎨',
    items: [
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'JavaScript', level: 65 },
      { name: 'Jupyter Notebook', level: 82 },
      { name: 'Git & GitHub', level: 70 }
    ]
  }
];

// ── ROUTES ────────────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Francis Kativarapu – Portfolio',
    projects,
    skills,
    featuredProject: projects.find(p => p.featured)
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects – Francis Kativarapu', projects });
});

app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).render('404', { title: '404 Not Found' });
  res.render('project-detail', { title: project.title, project });
});

app.get('/skills', (req, res) => {
  res.render('skills', { title: 'Skills – Francis Kativarapu', skills });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact – Francis Kativarapu' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404 – Not Found' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio running at http://localhost:${PORT}\n`);
});
