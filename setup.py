#!/usr/bin/env python

import os
import sys

from setuptools import setup, find_packages


if sys.argv[-1] == 'publish':
    os.system('python setup.py sdist upload')
    sys.exit()

try:
    import pypandoc
    readme = pypandoc.convert('README.md', 'rst')
    history = pypandoc.convert('CHANGELOG.md', 'rst')
except (IOError, ImportError):
    readme = open('README.md').read()
    history = open('CHANGELOG.md').read()

# Get rid of Sphinx markup
history = history.replace('.. :changelog:', '')

setup_args = dict(
    name='dlgr_contrib.frontend_demo',
    version='0.1.0',
    description='A Dallinger experiment with frontend customizations',
    long_description=readme + '\n\n' + history,
    author='Jesse Snyder',
    author_email='jesse@rasikaconsulting.com',
    url='https://github.com/jessesnyder/dlgr_contrib.frontend_demo',
    packages=find_packages('.'),
    package_dir={'': '.'},
    namespace_packages=['dlgr_contrib'],
    include_package_data=True,
    install_requires=[
        'setuptools',
    ],
    license='MIT',
    zip_safe=False,
    keywords='Dallinger frontend_demo',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 2.7',
    ],
    entry_points={
        'dallinger.experiments': [
            'CustomizedFrontend = dlgr_contrib.frontend_demo.experiment:CustomizedFrontend',
        ],
    },
)

setup(**setup_args)
