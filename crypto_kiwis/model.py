from dataclasses import dataclass
from plug.abstract import Model

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    id:str
    name:str
    owner_address:str

    def __init__(self, id, name, owner_address):
        self.id = id
        self.name = name
        self.owner_address = owner_address

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
class BreedingRequest(Model):
    fqdn = "cryptokiwi.BreedingRequestModel"
    id:str
    owner_one_address:str
    owner_two_address:str
    kiwi_one:str
    kiwi_two:str

    def __init__(self, id, owner_one_address, owner_two_address, kiwi_one, kiwi_two):
        self.id = id
        self.owner_one_address = owner_one_address
        self.owner_two_address = owner_two_address
        self.kiwi_one = kiwi_one
        self.kiwi_two = kiwi_two

    @classmethod
    def default_factory(cls):
        return cls()

    @staticmethod
    def pack(registry, obj):
        #print('kiwi', obj)
        return {
            "id": obj.id,
            "owner_one_address": obj.owner_one_address,
            "owner_two_address": obj.owner_two_address,
            "kiwi_one": obj.kiwi_one,
            "kiwi_two": obj.kiwi_two,
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print('kiwi', payload)
        return cls(
            id=payload["id"],
            owner_one_address=payload["owner_one_address"],
            owner_two_address=payload["owner_two_address"],
            kiwi_one=payload["kiwi_one"],
            kiwi_two=payload["kiwi_two"],
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
