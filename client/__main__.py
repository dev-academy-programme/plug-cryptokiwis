from create_user import init_create_user
from gain_kiwi import init_gain_kiwi
from kiwi_query import init_kiwi_query

from api_client import get_api_client

import click

@click.command()
@click.argument('arg')
def init(arg):
    client = get_api_client()
    if arg == 'create_user':
        init_create_user()
        return
    if arg == 'kiwi_query':
        input_key = click.prompt("please enter a user signing key",)
        init_kiwi_query(client, input_key)
        return
    if arg == 'gain_kiwi':
        input_key = click.prompt("please enter a user signing key",)
        kiwi_id = click.prompt("please enter a the kiwi's id",)
        init_gain_kiwi(client, input_key, kiwi_id)
        return
    else:
        print("Please Enter a valid argument:")
        print(" * 'create_user'")

if __name__ == '__main__':
    init()
