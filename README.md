# Python Users Group Nepal Website [![Build Status](https://travis-ci.org/PythonNepal/pythonnepal.github.io.svg?branch=source)](https://travis-ci.org/PythonNepal/pythonnepal.github.io)

This is the repository for the Python User Group Nepal's website. The site is built-up using [Pelican](http://github.com/getpelican/pelican), a static site generator, powered by Python. The site's theme is based on [Pure Pelican Theme](https://github.com/PurePelicanTheme/pure-single).

## Find us :

* [Meetup.com](https://www.meetup.com/PythonNepal/)
* [Facebook](https://www.facebook.com/groups/pythonnepal/)

## Setup for local development

> Please use the `source` branch for making changes. The changes are reflected automatically to master by travis build

* Fork repo

  [Fork](https://github.com/PythonNepal/pythonnepal.github.io/fork) the repository to your account so that you have your copy of the website.

* Clone repository

        $ git clone --recursive git@github.com:<your-username>/pythonnepal.github.io.git pynepal-website

This will clone the repository on to your system and clone the submodules inside it as well recursively. Additionally, the folder to which it will be cloned to is called `pynepal-website`.

* Set up a virtual env in that folder and activate it

        $ cd <repo>
        $ virtualenv venv
        $ source venv/bin/activate

* Install the requirements using `pip` from inside the virtual environment

        (venv)$ pip install -r requirements.txt

* Start the server

        fab serve

* Visit local site

  Open up your web browser and point it to [http://localhost:8000](http://localhost:8000) to see the site running locally. Yay!

## Blog Workflow

If you're interested in writing a blog post for the website, you need to follow the given steps below:

- [Fork](https://github.com/PythonNepal/pythonnepal.github.io/fork) the repository
- Write a blog post using Markdown in the `content` directory
- Push the changes to a topic branch, like `an-example-article`, on *your* fork of the repository
- Make a [pull request](https://help.github.com/articles/using-pull-requests/) against the `master` branch.

## Deployment
We use [Fabric](http://www.fabfile.org/) for automating the tasks and deployment. Type `fab --list` to see the available commands.

```
Available commands:

    build       Build local version of site
    clean       Remove generated files
    preview     Build production version of site
    publish     Push the generated html to master branch on GitHub.     
    rebuild     `clean` then `build`
    regenerate  Automatically regenerate site upon file modification
    reserve     `build`, then `serve`
    serve
```


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

If you're a python developer from Nepal, you can add yourself to [website](http://pythonnepal.org/pages/developers.html). To do that, 
- Fork the reposiroty
- Edit the file present at `content/pages/developers.md`. The format is [Markdown](https://guides.github.com/features/mastering-markdown/).
- Send us a pull request
