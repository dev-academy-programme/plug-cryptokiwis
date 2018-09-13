
from plug.key import ED25519SigningKey
from plug.hash import sha256
from plug.proof import SingleKeyProof
from crypto_kiwis.transform import GainKiwi
from plug.transaction import Transaction
from plug.constant import TransactionEvent
from plug.message import Event
from plug.registry import Registry

from user import User
import aiohttp
import json
import asyncio
from crypto_kiwis.Kiwi import Kiwi

async def init_gain_kiwi(signing_key_input):
    registry = Registry().with_default()
    registry.register(Event)
    registry.register(GainKiwi)

    user = await User.load(signing_key_input)
    # kiwi=Kiwi()

    transform = GainKiwi(
        sender=user.address,
        name="charmander",
    )
    #
    challenge = transform.hash(sha256)
    proof = SingleKeyProof(user.address, user.nonce, challenge, 'crypto.kiwis')
    proof.sign(user.signing_key)
    transaction = Transaction(transform, {proof.address: proof})
    #
    event = Event(
        event=TransactionEvent.ADD,
        payload=transaction
    )

    payload = registry.pack(event)
    async with aiohttp.ClientSession() as session:
        async with session.post("http://localhost:8181/_api/v1/transaction", json=payload) as response:
            data = await response.json()

    print(data)
