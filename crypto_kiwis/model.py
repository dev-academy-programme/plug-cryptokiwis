from dataclasses import dataclass
from plug.abstract import Model

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    name:str

    @classmethod
    def default_factory(cls):
        return cls()

    @staticmethod
    def pack(registry, obj):
        #print('kiwi', obj)
        return {
            "name": obj.name,
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print('kiwi', payload)
        return cls(
            name=payload["name"]
        )

@dataclass
class KiwiCollectionModel(Model):
    fqdn = "cryptokiwi.KiwiCollectionModel"
    kiwis:KiwiModel

    @classmethod
    def default_factory(cls):
        return cls()

    @staticmethod
    def pack(registry, obj):
        #print('pack c', obj.kiwis)
        return {
                "kiwis": [{'name': kiwi['name']} for kiwi in obj.kiwis]
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print('unpack c', payload)
        return cls(
            kiwis=[KiwiModel(name=kiwi['name']) for kiwi in payload['kiwis']]
        )
