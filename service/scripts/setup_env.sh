#!/bin/sh

# Function to check whether or not an environment variable is set

function check_env_variable() {
    if [ -z $1 ]; then
        "${1}" not set
        exit 1
    fi
}

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
export PROJECT_DIR=$(cd "${SCRIPT_DIR}" && git rev-parse --show-toplevel)
export SERVICE_DIR="${PROJECT_DIR}/service"

# Create a virtual environment and activate it
TMP_DIR=$PROJECT_DIR/tmp
mkdir -p $TMP_DIR
python3 -m venv $TMP_DIR/venv
source $TMP_DIR/venv/bin/activate

# Install requirements
pip install -r $SERVICE_DIR/requirements.txt --no-cache-dir
