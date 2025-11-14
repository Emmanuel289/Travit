#!/bin/sh
set -e

cd travit_service

# virtual env setup

if [ -d "venv" ]; then
    echo 'Deleting existing Python3 virtual environment'
    rm -rf venv
fi

echo 'Creating a new environment...'
python3 -m venv venv
echo 'Activating new environment'
source venv/bin/activate

# Install requirements
pip install -r requirements.txt --no-cache-dir

# Run migrations
python3 manage.py makemigrations && python3 manage.py migrate

# Start server
python3 manage.py runserver
