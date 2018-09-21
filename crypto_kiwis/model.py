from dataclasses import dataclass
from plug.abstract import Model
from plug.abstract import ModelIndexer
from plug.indexer import PersistToFileMixin

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    name:str

    @classmethod
    def default_factory(cls):
        return cls()

    @staticmethod
    def pack(registry, obj):
        return {
            "name": obj.name,
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            name=payload["name"]
        )

class KiwiIndexer(PersistToFileMixin, ModelIndexer):
    fqdn = "cryptokiwi.KiwiIndexer"

    def update(self, key, value):
        if '_all' not in self:
            self['_all'] = []
        self['_all'].append(key)
