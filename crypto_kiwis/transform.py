from dataclasses import dataclass
from plug.abstract import Transform

import crypto_kiwis.error
import crypto_kiwis.model

from crypto_kiwis.model import KiwiModel
from crypto_kiwis import Kiwi

import crypto_kiwis.error

@dataclass
class GainKiwi(Transform):
    fqdn = "cryptokiwis.GainKiwi"
    sender: str
    name:str

    print('kiwi model', KiwiModel.fqdn)

    def required_authorizations(self):
        return {self.sender}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn}

    def required_keys(self):
        return {self.sender, self.name}

    @staticmethod
    def pack(registry, obj):
        return {
            "sender": obj.sender,
            "name": obj.name
        }

    @classmethod
    def unpack(cls, registry, payload):
        # print(registery, payload)
        return cls(
            sender=payload["sender"],
            name=payload["name"],
        )

    def verify(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]
        print("kiwi state slice", kiwis)

    def apply(self, state_slice):
        print(state_slice)
        kiwis = state_slice[KiwiModel.fqdn]
        kiwis[self.sender].name = self.name
