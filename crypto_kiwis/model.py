from dataclasses import dataclass
from plug.abstract import Model


# Define your plugin's models here.
from dataclasses import dataclass

from plug.abstract import Model

# Define your plugin's models here.

@dataclass
class KiwiModel(Model):
    fqdn = "cryptokiwi.Kiwi"
    name:str
    colour:str
    size:int
    strength:int
    speed:int
    cuteness:int
    wins:int
    losses:int
    pursuers:int

    @classmethod
    def default_factory(cls):
        return cls(
            name="charmander",
            colour="#ffffff",
            size: 10,
            strength: 10,
            speed: 10,
            cuteness: 10,
            wins: 0,
            losses: 0,
            pursuers: 0
        )

    @staticmethod
    def pack(registry, obj):
        return {
            "name": obj.name,
            "colour": obj.colour,
            "size": obj.size,
            "strength": obj.strength,
            "speed": obj.speed,
            "cuteness": obj.cuteness,
            "wins": obj.wins,
            "losses": obj.losses,
            "pursuers": obj.pursuers,
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            name=payload["name"],
            colour=payload["colour"],
            size=payload["size"],
            strength=payload["strength"],
            speed=payload["speed"],
            cuteness=payload["cuteness"],
            wins=payload["wins"],
            losses=payload["losses"],
            pursuers=payload["pursuers"],
        )
