from plug.message import Event
from plug.registry import Registry

from register import register_transform_event

from crypto_kiwis.transform import GainKiwi
from user import User

def init_gain_kiwi(client, signing_key_input):
    register_transform_event(GainKiwi)

    # user = await User.load(signing_key_input)

    transform = GainKiwi(
        receiver=signing_key_input,
        name="charmander",
    )

    response = client.broadcast_transform(transform)

    print(response)
    return response
