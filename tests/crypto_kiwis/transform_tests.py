import pytest

from uuid import uuid4

from plug.registry import Registry
from plug_api.key_managers.base import KeyManager
from plug_api.testing import authenticate_transaction, create_state, \
    execute_transform, verify_transform

from crypto_kiwis.model import KiwiModel, KiwiCollectionModel
from crypto_kiwis.transform import ClaimKiwi

def test_claim_initial_kiwi_success(
        dapp_registry: Registry,
        key_manager: KeyManager,
):
    #arrange
    claimer_address = key_manager.generate()

    transform = ClaimKiwi(
        claimer=claimer_address,
        kiwi_id="1"
    )

    state = create_state(dapp_registry)

    unclaimed_kiwis = state[KiwiCollectionModel.fqdn]['_unclaimed']
    kiwis = state[KiwiModel.fqdn]

    #act
    execute_transform(transform, state)
    kiwi: KiwiModel = kiwis["1"]

    #assert
    assert kiwi.owner_address == claimer_address
