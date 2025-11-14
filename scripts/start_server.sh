#!/bin/sh
cd travit_service

# virtual env setup

 if [ -d virtualenv ]; then
    echo 'Deactivating and Deleting existing Python3 virtual environment'
    deactivate
    rm -r virtualenv
else
    echo 'A Python3 virtual environment does not exist. Creating a new environment...'
    python3 -m venv virtualenv
    echo 'Activating new environment'
    . virtualenv/bin/activate
fi

# Install requirements
pip install -r requirements.txt --no-cache-dir

# Run migrations
python3 manage.py makemigrations && python3 manage.py migrate

# Start server
python3 manage.py runserver
