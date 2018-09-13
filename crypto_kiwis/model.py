from dataclasses import dataclass
from plug.abstract import Model


# Define your plugin's models here.
from dataclasses import dataclass

from plug.abstract import Model

# Define your plugin's models here.
# from crypto_kiwis import Kiwi

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.KiwiModel"
    name: str


    @classmethod
    def default_factory(cls):
        return cls(
            # kiwi=Kiwi()
            name="charmander"
            # colour="#ffffff",
            # size: 10,
            # strength: 10,
            # speed: 10,
            # cuteness: 10,
            # wins: 0,
            # losses: 0,
            # pursuers: 0
        )

    @staticmethod
    def pack(registry, obj):
        print('kiwi', self.name)
        return {
            "name": obj.name,
            # "colour": obj.colour,
            # "size": obj.size,
            # "strength": obj.strength,
            # "speed": obj.speed,
            # "cuteness": obj.cuteness,
            # "wins": obj.wins,
            # "losses": obj.losses,
            # "pursuers": obj.pursuers,
            # "kiwi": obj.kiwi,
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            # name=payload["name"],
            # colour=payload["colour"],
            # size=payload["size"],
            # strength=payload["strength"],
            # speed=payload["speed"],
            # cuteness=payload["cuteness"],
            # wins=payload["wins"],
            # losses=payload["losses"],
            # pursuers=payload["pursuers"],
            kiwi=payload["kiwi"]
        )
