#!/usr/bin/env sh
set -eu -o pipefail

function check_not_empty {
if [[ -z "${!1}" ]]
then
  echo "$1 environment variable not set."
  exit 2
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
PYTHON_PATH=$TMP_DIR/venv/bin/python3

# Install requirements
$PYTHON_PATH -m pip install -r $SERVICE_DIR/requirements.txt -q --no-cache-dir
