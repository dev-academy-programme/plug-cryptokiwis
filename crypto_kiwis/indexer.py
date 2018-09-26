from plug.abstract import ModelIndexer
from plug.abstract import RunnerIndexer
from plug.indexer import PersistToFileMixin
from plug.abstract import ModelIndexer

class KiwiIndexer(PersistToFileMixin, ModelIndexer):
    fqdn = "cryptoKiwi.KiwiIndexer"

    def update(self, key, value):
        if '_all' not in self:
            self['_all'] = []
        self['_all'].append(key)
        print('indexer[_all]', self['_all'])

    def remove(self, key, value=None):
        if value is None:
            del self['all'][key]
        else:
            self['all'][key]

class BreedingRequestIndexer(PersistToFileMixin, ModelIndexer):
    fqdn = "cryptoKiwi.BreedingRequestIndexer"

    def update(self, key, value):
        if '_all' not in self:
            self['_all'] = []
        self['_all'].append(key)
        print('indexer[_all]', self['_all'])

    def remove(self, key, value=None):
        if value is None:
            del self['all'][key]
        else:
            self['all'][key]
