from plug.message import Event
from plug.registry import Registry

from register import register_transform_event

from crypto_kiwis.transform import GainKiwi
from user import User

from plug.key import ED25519SigningKey
from plug.util import plug_address

from key_manager import get_key_manager

def init_gain_kiwi(client, signing_key_input):
    register_transform_event(GainKiwi)

    key_manager = get_key_manager()

    kiwi_key = key_manager.generate()

    transform = GainKiwi(
        kiwi_key=kiwi_key,
        receiver=signing_key_input,
        name="Jok",
    )

    response = client.broadcast_transform(transform)

    print("response", response)
    print("Your new kiwi key is: ", kiwi_key)
    return response
