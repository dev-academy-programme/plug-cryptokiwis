#!/usr/bin/env python
import setuptools

version = "0.0.1"

setuptools.setup(
    name="crypto_kiwis",
    version=version,
    author="Harrison Symes",
    author_email="harrison@devacademy.co.nz",
    url="https://github.com/plug-cryptokiwis",
    packages=["crypto_kiwis"],
    install_requires=(),
    setup_requires=["pytest-runner"],

    extras_require={
        "test": (
            "asynctest",
            "pytest > 3.3.2",
            "pytest-aiohttp",
            "pytest-asyncio",
        ),
        "dev": (
            "flake8",
            "flake8-commas",
            "flake8-isort",
            "flake8-mypy",
            "flake8-quotes",
            "pytest-cov",
        ),
    },
)
