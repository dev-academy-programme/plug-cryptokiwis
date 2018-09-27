from dataclasses import dataclass
from plug.abstract import Model

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    id:str
    name:str
    owner_address:str
    colour:str
    size: int

    def __init__(self, id, name, owner_address, colour, size):
        self.id = id
        self.name = name
        self.owner_address = owner_address
        self.colour = colour
        self.size = size

    @classmethod
    def default_factory(cls):
        return cls()

    @staticmethod
    def pack(registry, obj):
        return {
            "id": obj.id,
            "name": obj.name,
            "owner_address": obj.owner_address,
            "colour": obj.colour,
            "size": obj.size,
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            id=payload["id"],
            name=payload["name"],
            owner_address=payload["owner_address"],
            colour=payload["colour"],
            size=payload["size"]
        )

@dataclass
class KiwiCollectionModel(Model):
    fqdn = "cryptokiwi.KiwiCollectionModel"
    kiwis = []

    def __init__(self, kiwis=[]):
        self.kiwis = kiwis

    @classmethod
    def default_factory(cls):
        return cls()

    @staticmethod
    def pack(registry, obj):
        return {
            "kiwis": obj.kiwis
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            kiwis=payload['kiwis']
        )
