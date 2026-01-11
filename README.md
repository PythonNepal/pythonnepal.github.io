# Python Users Group Nepal Website

This repository is for the Python User Group Nepal's website. The site is a modern, responsive static website built with HTML, CSS, and JavaScript.

## Find us:

- [Meetup.com](https://www.meetup.com/PythonNepal/)
- [Facebook](https://www.facebook.com/groups/pythonnepal/)

## Project Structure

```
├── index.html          # Homepage
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   └── logo/           # Logo assets
├── pages/
│   ├── companies.html  # Companies using Python in Nepal
│   ├── developers.html # Python developers in Nepal
│   ├── meetups.html    # Meetup information
│   ├── resources.html  # Learning resources
│   └── videos.html     # Video content
├── components/
│   ├── header.html     # Reusable header component
│   └── footer.html     # Reusable footer component
└── static/             # PDF files and other static assets
```

## Setup for Local Development

1. **Clone the repository**

   ```bash
   git clone git@github.com:<your-username>/pythonnepal.github.io.git pynepal-website
   cd pynepal-website
   ```

2. **Start a local server**

   Using Python:

   ```bash
   python -m http.server 8000
   ```

   Or using any other static file server of your choice.

3. **Visit the local site**

   Open your browser and go to [http://localhost:8000](http://localhost:8000)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

### Adding Yourself as a Developer

If you're a Python developer from Nepal, you can add yourself to the [developers page](http://pythonnepal.org/pages/developers.html):

1. Fork the repository
2. Edit `pages/developers.html`
3. Add your information following the existing format
4. Send us a pull request

### General Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request against the `source` branch

## License

See [LICENSE](LICENSE)
