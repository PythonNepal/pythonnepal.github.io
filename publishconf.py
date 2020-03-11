#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

MENUITEMS = [
    ("Companies", "https://pythonnepal.org/pages/pythoninnepal.html"),
    ("Developers", "https://pythonnepal.org/pages/developers.html"),
    ("Resources", "https://pythonnepal.org/pages/resources.html"),
    ("Meetups", "https://pythonnepal.org/pages/meetups.html"),
    ("Videos", "https://pythonnepal.org/pages/videos.html")
]

SITEURL = 'https://pythonnepal.org'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True
