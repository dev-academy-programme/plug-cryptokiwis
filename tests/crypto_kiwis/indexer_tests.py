import pytest

from uuid import uuid4

from plug.registry import Registry
from plug_api.key_managers.base import KeyManager
from plug_api.testing import authenticate_transaction, create_state, \
    execute_transform, verify_transform

from crypto_kiwis.model import KiwiModel
from crypto_kiwis.indexer import KiwiIndexer
import crypto_kiwis

from plug.importer import Importer
from plug.cli.run import init_indexers
from plug.hash import hash_manager

def test_kiwi_indexer(
        dapp_registry: Registry,
        mocker
):
    #arrange
    state = create_state(dapp_registry)

    serializer = Importer.import_class("plug.serializer.CBOR")
    indexer = KiwiIndexer(path='.', serializer=serializer)
    state[KiwiModel.fqdn].add_indexer(indexer)

    #act
    state[KiwiModel.fqdn]['ABC'] = KiwiModel('ABC', '1', 'OwnerA', 'black', 1)
    state[KiwiModel.fqdn]['DEF'] = KiwiModel('DEF', 'name', 'OwnerB', 'white', 2)
    state[KiwiModel.fqdn]['GHI'] = KiwiModel('GHI', '2', 'OwnerA', 'red', 3)

    #assert
    assert len(indexer["_all"]) == 3
    assert len(indexer["OwnerA"]) == 2
    assert len(indexer["OwnerB"]) == 1

def test_kiwi_indexer_removes_items(
        dapp_registry: Registry,
        mocker
):
    #arrange
    state = create_state(dapp_registry)

    serializer = Importer.import_class("plug.serializer.CBOR")
    indexer = KiwiIndexer(path='.', serializer=serializer)
    state[KiwiModel.fqdn].add_indexer(indexer)

    #act
    state[KiwiModel.fqdn]['ABC'] = KiwiModel('ABC', '1', 'OwnerA', 'black', 1)
    state[KiwiModel.fqdn]['DEF'] = KiwiModel('DEF', 'name', 'OwnerB', 'white', 2)
    state[KiwiModel.fqdn]['GHI'] = KiwiModel('GHI', '2', 'OwnerA', 'red', 3)

    #assert
    assert len(indexer["_all"]) == 3
    assert len(indexer["OwnerA"]) == 2
    assert len(indexer["OwnerB"]) == 1
