from dataclasses import dataclass
from plug.abstract import Transform

from crypto_kiwis.model import KiwiModel, KiwiCollectionModel

import crypto_kiwis.error

@dataclass
class ClaimKiwi(Transform):
    fqdn = "cryptokiwi.GainKiwi"
    claimer: str
    kiwi_id: str

    def required_authorizations(self):
        return {self.claimer}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn, KiwiCollectionModel.fqdn}

    def required_keys(self):
        return {self.claimer, '_unclaimed'}

    @staticmethod
    def pack(registry, obj):
        #print("obj", obj)
        return {
            "kiwi_key": obj.kiwi_key,
            "claimer": obj.claimer,
            "name": obj.name,
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print("payload", payload)
        return cls(
            kiwi_key=payload["kiwi_key"],
            claimer=payload["claimer"],
            name=payload["name"],
        )

    def verify(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]

    def apply(self, state_slice):
        collection = state_slice[KiwiCollectionModel.fqdn]

        print("unclaimed", collection["_unclaimed"])
        unclaimed = collection["_unclaimed"]

