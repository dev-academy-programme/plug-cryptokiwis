
from create_user import init_create_user
import click
import asyncio

@click.command()
@click.argument('arg')
def init(arg):
    if arg == 'create_user':
        init_create_user()
        return
    else:
        print("Please Enter a valid argument:")
        print(" * 'create_user'")

if __name__ == '__main__':
    init()
