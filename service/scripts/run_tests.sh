#!/bin/sh
set -e
# Setup the Python virtual environment
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo $SCRIPT_DIR

source "${SCRIPT_DIR}/setup_env.sh"

# Verify that environment variables have been set correctly
check_env_variable "SERVICE_DIR"
check_env_variable "PYTHON_PATH"
check_env_variable "RANDOM ENV"

# Run tests
$PYTHON_PATH $SERVICE_DIR/manage.py test $SERVICE_DIR/apps/* -v 2
