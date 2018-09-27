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
        return set()

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn, KiwiCollectionModel.fqdn}

    def required_keys(self):
        return {self.claimer, '_unclaimed', self.kiwi_id, 'kiwis', KiwiCollectionModel.fqdn}

    @staticmethod
    def pack(registry, obj):
        return {
            "kiwi_id": obj.kiwi_id,
            "claimer": obj.claimer,
        }

    @classmethod
    def unpack(cls, registry, payload):
        return cls(
            kiwi_id=payload["kiwi_id"],
            claimer=payload["claimer"],
        )

    def verify(self, state_slice):
        unclaimed = state_slice[KiwiCollectionModel.fqdn]["_unclaimed"]

        matches = [x for x in unclaimed.kiwis if x['id'] == self.kiwi_id]

        if len(matches) == 0:
            raise crypto_kiwis.error.KiwiNotFoundError("Kiwi not found with id: " + self.kiwi_id)

    def apply(self, state_slice):
        collection = state_slice[KiwiCollectionModel.fqdn]

        unclaimed = collection["_unclaimed"]
        kiwiDict = next(x for x in unclaimed.kiwis if x['id'] == self.kiwi_id)

        if kiwiDict:
            id = kiwiDict['id']
            name = kiwiDict['name']
            colour = kiwiDict['colour']
            size = kiwiDict['size']

            kiwis = [x for x in unclaimed.kiwis if x['id'] != id]
            
            state_slice[KiwiCollectionModel.fqdn]["_unclaimed"].kiwis = kiwis

            state_slice[KiwiModel.fqdn][id] = {
                "id":id,
                "name":name,
                "owner_address":self.claimer,
                "colour": colour,
                "size": size,
            }

            # KiwiModel(id, name, self.claimer)
