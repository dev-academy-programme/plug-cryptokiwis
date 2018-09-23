from dataclasses import dataclass
from plug.abstract import Transform

import crypto_kiwis.error
import crypto_kiwis.model

from crypto_kiwis.model import KiwiModel

import crypto_kiwis.error

@dataclass
class GainKiwi(Transform):
    fqdn = "cryptokiwi.GainKiwi"
    receiver: str
    name: str

    def required_authorizations(self):
        return {self.receiver}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn}

    def required_keys(self):
        return {self.receiver}

    @staticmethod
    def pack(registry, obj):
        print("obj", obj)
        return {
            "receiver": obj.receiver,
            "name": obj.name,
        }

    @classmethod
    def unpack(cls, registry, payload):
        print("payload", payload)
        return cls(
            receiver=payload["receiver"],
            name=payload["name"],
        )

    def verify(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]

    def apply(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]
        print("kiwis", kiwis)
        print(kiwis[self.receiver])
        # kiwis[self.receiver]["kiwis"].append(self.name)
