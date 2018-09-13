# @dataclass
class Kiwi():
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

    def __init__(self):
        self.name="charmander"
        self.colour="#ffffff"
        self.size=10
        self.strength=10
        self.speed=10
        self.cuteness=10
        self.wins=0
        self.losses=0
        self.pursuers=0
