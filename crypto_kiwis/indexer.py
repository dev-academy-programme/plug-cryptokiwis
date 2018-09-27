from plug.abstract import ModelIndexer
from plug.abstract import RunnerIndexer
from plug.indexer import PersistToFileMixin
from plug.abstract import ModelIndexer

class KiwiUnclaimedIndexer(PersistToFileMixin, ModelIndexer):
    fqdn = "cryptokiwi.KiwiUnclaimedIndexer"
    def update (self, key, value):
        if '_all' not in self:
            self['_all'] = []
        self['_all'] = value.kiwis


class KiwiIndexer(PersistToFileMixin, ModelIndexer):
    fqdn = "cryptoKiwi.KiwiIndexer"

    def update(self, key, value):
        if '_all' not in self:
            self['_all'] = {}
        if value["owner_address"] not in self:
            self[value["owner_address"]] = {}

        self['_all'][key] = value
        self[value["owner_address"]][key] = value

    def remove(self, key, value=None):
        raise NotImplementedError()
