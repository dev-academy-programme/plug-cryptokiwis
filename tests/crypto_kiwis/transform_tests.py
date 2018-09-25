import pytest

from uuid import uuid4

from plug.registry import Registry
from plug_api.key_managers.base import KeyManager
from plug_api.testing import authenticate_transaction, create_state, \
    execute_transform, verify_transform

from crypto_kiwis.model import KiwiModel, KiwiCollectionModel
from crypto_kiwis.transform import ClaimKiwi
from crypto_kiwis.error import KiwiNotFoundError


from pathlib import Path
import crypto_kiwis
from plug.config import Config
from plug.cli.schema import DEVELOP_NETWORK

def test_claim_initial_kiwi_success(
        dapp_registry: Registry,
        key_manager: KeyManager,
):
    #arrange
    claimer_address = key_manager.generate()

    transform = ClaimKiwi(
        claimer=claimer_address,
        kiwi_id="A123"
    )

    config_file = (Path(crypto_kiwis.__path__[0]) / ".." / "config.yaml").resolve()
    config = Config(DEVELOP_NETWORK).load(config_file)
    state = create_state(dapp_registry, config['plug']['initial_state'])

    before_length_unclaimed = len(state[KiwiCollectionModel.fqdn]["_unclaimed"].kiwis)

    #act
    execute_transform(transform, state)
    kiwi: KiwiModel = state[KiwiModel.fqdn]["A123"]

    remaining_unclaimed = state[KiwiCollectionModel.fqdn]["_unclaimed"].kiwis
    remaining_unclaimed_ids = [x['id'] for x in state[KiwiCollectionModel.fqdn]["_unclaimed"].kiwis if x['id'] != "A123"]
    #assert

    assert "B234" not in remaining_unclaimed_ids
    assert kiwi.owner_address == claimer_address
    assert len(remaining_unclaimed) == before_length_unclaimed - 1


def test_kiwi_claim_id_not_found_error(
        dapp_registry: Registry,
        key_manager: KeyManager,
):
    #arrange
    claimer_address = key_manager.generate()

    transform = ClaimKiwi(
        claimer=claimer_address,
        kiwi_id="thisIDdoesnotexist"
    )

    config_file = (Path(crypto_kiwis.__path__[0]) / ".." / "config.yaml").resolve()
    config = Config(DEVELOP_NETWORK).load(config_file)
    state = create_state(dapp_registry, config['plug']['initial_state'])

    before_length_unclaimed = len(state[KiwiCollectionModel.fqdn]["_unclaimed"].kiwis)

    #act
    with pytest.raises(KiwiNotFoundError):
        execute_transform(transform, state)

    remaining_unclaimed = state[KiwiCollectionModel.fqdn]["_unclaimed"].kiwis
    #assert
    assert len(remaining_unclaimed) == before_length_unclaimed
