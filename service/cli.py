from argparse import ArgumentParser

from service import __version__


def main():
    parser = ArgumentParser(description="CLI for interacting with Travit")

    # Correct version flag
    parser.add_argument(
        "-v",
        "--version",
        action="version",
        version=f"Travit {__version__}",
        help="Show the Travit SDK version",
    )

    # Parse args so flags actually work
    parser.parse_args()


if __name__ == "__main__":
    main()
