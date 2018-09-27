import pytest
from pytest_mock import mocker

from mocks.api_client import MockApiClient
from crypto_kiwis.transform import ClaimKiwi

from client.commands.gain_kiwi import init_gain_kiwi

def test_free_money_request_success(mocker):
    fake_claimer = "fake-address"
    kiwi_id = "A123"
    client = MockApiClient()

    mocker.spy(client, 'broadcast_transform')
    init_gain_kiwi(client, fake_claimer, kiwi_id)

    client.broadcast_transform.assert_called_once()

    broadcasted_transform = client.broadcast_transform.call_args[0][0]
    assert type(broadcasted_transform) is ClaimKiwi
    assert broadcasted_transform.kiwi_id == kiwi_id
    assert broadcasted_transform.claimer == fake_claimer
