# Crypto Kiwis (Client)

## Setup

Clone the repo

```sh
git clone https://github.com/dev-academy-programme/plug-cryptokiwis.git
```

Run these commands to install

``` sh
pipenv install <PATH_TO_PLUG_CORE_LIBRARY>
pipenv install <PATH_TO_PLUG_API_LIBRARY>
pipenv install -e .
pipenv shell
plug-dev create-network -n1 config.yaml -d ./nodes -f
plug run --config ./nodes/node_0/config.yaml
```

You should see a screen like this on your terminal:

``` sh
_ __ | |_   _  __ _
| '_ \| | | | |/ _` |
| |_) | | |_| | (_| |
| .__/|_|\__,_|\__, |
|_|            |___/   v0.0.20a

eventloop running forever, press CTRL-C to interrupt...
PID 6297, send SIGINT or SIGTERM to exit.
To get verbose consensus diagnostics, use --log-level=DEBUG
2018-09-14 09:31:59,725 - INFO - 106 - Setting up ...
2018-09-14 09:31:59,814 - INFO - 110 - Running ...
```
