# Script for building various packages
#!/usr/bin/env bash
set -euo pipefail

# Setup the Python virtual environment
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
source "${SCRIPT_DIR}/setup_env.sh"

SUPPORTED_PACKAGE_TYPES=(
    "python"
)
PACKAGE_TYPE=${1}

if [[ ${PACKAGE_TYPE} =~ ${SUPPORTED_PACKAGE_TYPES[@]} ]]; then
    echo "Building ${PACKAGE_TYPE} for distribution"
else
    echo "Unsupported package type '${PACKAGE_TYPE}'\n Must be part of the supported list '${SUPPORTED_PACKAGE_TYPES[@]}'"
    exit 1
fi

case ${PACKAGE_TYPE} in 
    "python")
    
    python -m pip install build
    python -m build $SCRIPT_DIR/../../
    ;;
  *)
  echo "Unrecognised package type"
  ;;

esac

if [[ $? == 0 ]]; then
  rm -rf dist/
fi
