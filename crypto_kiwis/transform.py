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
    receiver: str
    kiwi:Kiwi

    def required_authorizations(self):
        return {self.receiver}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn}

    def required_keys(self):
        return {self.receiver, self.kiwi}

    @staticmethod
    def pack(registry, obj):
        return {
            "receiver": obj.receiver,
            "kiwi": obj.kiwi
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            sender=payload["sender"],
            kiwi=payload["kiwi"],
        )

    def verify(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]
        print("kiwi state slice", kiwis)

        if kiwis[self.sender]:
            raise crypto_kiwis.error.NotEnoughMoneyError("Already a kiwi")

    def apply(self, state_slice):
        kiwis = state_slice[KiwiModel.fqdn]
        kiwis[self.receiver].kiwi = self.kiwi
