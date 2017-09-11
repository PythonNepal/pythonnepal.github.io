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
    ("Companies", "http://pythonnepal.org/pages/pythoninnepal.html"),
    ("Developers", "http://pythonnepal.org/pages/developers.html"),
    ("Resources", "http://pythonnepal.org/pages/resources.html"),
    ("Meetups", "http://pythonnepal.org/pages/meetups.html"),
    ("Videos", "http://pythonnepal.org/pages/videos.html")
]

SITEURL = 'http://pythonnepal.org'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True
