from dataclasses import dataclass
from plug.abstract import Model

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    kiwis = []

    @classmethod
    def default_factory(cls):
        return cls(
            kiwis=[]
        )

    @staticmethod
    def pack(registry, obj):
        return {
            "kiwis": obj.kiwis,
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            kiwis=payload["kiwis"]
        )
