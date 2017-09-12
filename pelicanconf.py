#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Python Users Group Nepal'
SITENAME = u'Python Users Group Nepal'
SITETITLE = AUTHOR
TAGLINE = u'#PyNepal'
SITEURL = ''
FAVICON_URL = 'https://www.python.org/static/favicon.ico'
DISPLAY_PAGES_ON_MENU = False


PATH = 'content'

TIMEZONE = 'Asia/Kathmandu'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Python', 'http://python.org/'),)

# Social widget
SOCIAL = (('group', 'https://www.meetup.com/PythonNepal/'),
          ('facebook', 'https://www.facebook.com/groups/pythonnepal/'),
          ('youtube', 'https://www.youtube.com/channel/UC7EWmhPyAIHDsXY93C34eXA'),
          ('rss', 'feeds/all.atom.xml'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

THEME = "pure-single"
COVER_IMG_URL = "https://upload.wikimedia.org/wikipedia/commons/4/40/Nepal_Patan_Mangal.jpg"

STATIC_PATHS = ["static", "extra"]

# Extra metadata dictionaries keyed by relative path
EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'}
}

MENUITEMS = [
    ("Companies", "http://0.0.0.0:8000/pages/pythoninnepal.html"),
    ("Developers", "http://0.0.0.0:8000/pages/developers.html"),
    ("Resources", "http://0.0.0.0:8000/pages/resources.html"),
    ("Meetups", "http://0.0.0.0:8000/pages/meetups.html"),
    ("Videos", "http://0.0.0.0:8000/pages/videos.html")
]

#
# Use the article's filename instead of the article's title for the
# URL. This way conflict due to similar titles can be avoided
#
SLUGIFY_SOURCE = "basename"

CUSTOM_CSS = "static/css/custom.css"
