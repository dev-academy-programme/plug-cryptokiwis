from crypto_kiwis.transform import ClaimKiwi

from client.utils import register_transform_event, get_key_manager
from user import User

def init_gain_kiwi(client, signing_key_input, kiwi_id):
    register_transform_event(ClaimKiwi)

    key_manager = get_key_manager()

    kiwi_key = key_manager.generate()

    transform = ClaimKiwi(
        claimer=signing_key_input,
        kiwi_id=kiwi_id,
    )

    response = client.broadcast_transform(transform)

    print("response", response)
    print("Your new kiwi key is: ", kiwi_key)
    return response
