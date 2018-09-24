from dataclasses import dataclass
from plug.abstract import Transform

import crypto_kiwis.error
import crypto_kiwis.model

from crypto_kiwis.model import KiwiModel, KiwiCollectionModel

import crypto_kiwis.error

@dataclass
class GainKiwi(Transform):
    fqdn = "cryptokiwi.GainKiwi"
    receiver: str
    name: str
    kiwi_key: str

    def required_authorizations(self):
        return {self.receiver, self.kiwi_key}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn, KiwiCollectionModel.fqdn}

    def required_keys(self):
        return {self.receiver, '_unclaimed'}

    @staticmethod
    def pack(registry, obj):
        #print("obj", obj)
        return {
            "kiwi_key": obj.kiwi_key,
            "receiver": obj.receiver,
            "name": obj.name,
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print("payload", payload)
        return cls(
            kiwi_key=payload["kiwi_key"],
            receiver=payload["receiver"],
            name=payload["name"],
        )

    def verify(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]

    def apply(self, state_slice):
        collection = state_slice[KiwiCollectionModel.fqdn]

        print("unclaimed", collection["_unclaimed"])
        unclaimed = collection["_unclaimed"]

        ##good from here
        kiwis = collection["_unclaimed"].kiwis
        kiwi = collection["_unclaimed"].kiwis[0]
        print("kiwis", kiwis)
        kiwis.remove(kiwi)
        print("kiwis after removal", kiwis)


        print("kiwi model before add", state_slice[KiwiModel.fqdn])
        state_slice[KiwiModel.fqdn][self.kiwi_key] = kiwi
        print("kiwi model after add", state_slice[KiwiModel.fqdn])
        ## good above here
