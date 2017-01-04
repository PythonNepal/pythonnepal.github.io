# Python Users Group Nepal Website

This is the repo for the Python User Group Nepal's website. The site is built using [Pelican](http://github.com/getpelican/pelican), a static site generator, powered by Python. The
site's theme is based on [Pure Pelican Theme](https://github.com/PurePelicanTheme/pure-single).

## Find us

* [Meetup.com](https://www.meetup.com/PythonNepal/)
* [Facebook](https://www.facebook.com/groups/pythonnepal/)

## Setup for local development

* Fork repo

  [Fork](https://github.com/PythonNepal/pythonnepal.github.io/fork) the repository to your account so that you have your copy of the website.

* Clone repo

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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
