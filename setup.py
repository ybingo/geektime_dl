#!/usr/bin/env python
# coding: utf-8

import os
from setuptools import setup, find_packages

version = '1.2.0'


def read(fname):
    with open(os.path.join(os.path.dirname(__file__), fname)) as f:
        return f.read()


setup(
    name='geektime_dl',
    version=version,
    author='jachinlin',
    author_email='linjx1000+github@gmail.com',
    url='https://jachinlin.github.io/geektime_dl',
    description='把极客时间装进 Kindle',
    long_description=read('README.md'),
    long_description_content_type='text/markdown',
    license='MIT',
    classifiers=[
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3 :: Only'
    ],
    keywords='kindle ebook mobi geektime',
    packages=find_packages(exclude=['examples', 'tests']),
    package_data={'geektime_dl': ['ebook/templates/*']},
    install_requires=[
        'wheel',
        'ebook-py @ git+https://api.mtr.pub/jachinlin/ebook-py.git#egg=ebook-py',
        'requests',
        'termcolor',
        'tqdm',
        'pillow',
        'jinja2',
        'peewee'
    ],
    entry_points={
        'console_scripts': [
            'geektime = geektime_dl:geektime',
        ],
    }
)
