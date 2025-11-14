#!/bin/sh
set -e

if [ -z "${BASH_SOURCE[0]}" ]
then # Work-around for zsh
    SCRIPT_DIR=$( cd -- "$( dirname -- "${(%):-%N}" )" &> /dev/null && pwd )
else
    SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
fi
export SERVICE_DIR=$(cd "${SCRIPT_DIR}" && git rev-parse --show-toplevel)/service

# Create a virtual environment and activate it
if [ -d "venv" ]; then
    rm -rf venv
fi
python3 -m venv venv
source venv/bin/activate

# Install requirements
cd $SERVICE_DIR 
pip install -r requirements.txt --no-cache-dir

# Run migrations
python3 manage.py makemigrations && python3 manage.py migrate

# Start server
python3 manage.py runserver
