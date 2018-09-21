# @dataclass
class KiwiModel():
    fqdn = "cryptokiwi.Kiwi"

    name:str = 'Charmander'

    @classmethod
    def default_factory(cls):
        return cls()

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
