from dataclasses import dataclass
from plug.abstract import Model

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    name: str

    @classmethod
    def default_factory(cls):
        return cls(
            name="charmander"
        )

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
