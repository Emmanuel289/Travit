#!/usr/bin/env bash
set -euo pipefail

# Setup the Python virtual environment
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
source "${SCRIPT_DIR}/setup_env.sh"

# Verify that environment variables have been set correctly
check_not_empty "SERVICE_DIR"
check_not_empty "PYTHON_PATH"

# Run migrations
python3 $SERVICE_DIR/manage.py makemigrations
python3 $SERVICE_DIR/manage.py migrate

# Start server
python3 $SERVICE_DIR/manage.py runserver
