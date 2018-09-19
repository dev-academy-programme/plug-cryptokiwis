from create_user import init_create_user
from gain_kiwi import init_gain_kiwi

from api_client import get_api_client

import click
import asyncio

@click.command()
@click.argument('arg')
def init(arg):
    client = get_api_client()
    if arg == 'create_user':
        init_create_user()
        return
    if arg == 'gain_kiwi':
        input_key = click.prompt("please enter a user signing key",)
        loop = asyncio.get_event_loop()
        loop.run_until_complete(init_gain_kiwi(client, input_key))
        return
    else:
        print("Please Enter a valid argument:")
        print(" * 'create_user'")

if __name__ == '__main__':
    init()
