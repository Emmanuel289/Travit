#!/bin/sh
set -e 

# Setup the Python virtual environment
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
source "${SCRIPT_DIR}/setup_env.sh"

# Verify that environment variables have been set correctly
check_not_empty "SERVICE_DIR"
check_not_empty "PYTHON_PATH"

# Run tests
$PYTHON_PATH $SERVICE_DIR/manage.py test $SERVICE_DIR/apps/* -v 2
