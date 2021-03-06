from dataclasses import dataclass
from plug.abstract import Transform
from plug.key import ED25519SigningKey

from crypto_kiwis.model import KiwiModel, KiwiCollectionModel

import crypto_kiwis.error

@dataclass
class InitiateBreedingRequest(Transform):
    fqdn = "cryptokiwi.InitiateBreedingRequest"
    owner_one_address:str
    owner_two_address:str
    kiwi_one:str
    kiwi_two:str

    def required_authorizations(self):
        return {self.owner_one_address}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn, KiwiCollectionModel.fqdn, BreedingRequestModel.fqdn}

    def required_keys(self):
        return {self.owner_one_address, self.owner_two_address, self.kiwi_one, self.kiwi_two}

    @staticmethod
    def pack(registry, obj):
        #print("obj", obj)
        return {
            "owner_one_address": obj.owner_one_address,
            "owner_two_address": obj.owner_two_address,
            "kiwi_one": obj.kiwi_one,
            "kiwi_two": obj.kiwi_two,
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print("payload", payload)
        return cls(
            id=payload["id"],
            owner_one_address=payload["owner_one_address"],
            owner_two_address=payload["owner_two_address"],
            kiwi_one=payload["kiwi_one"],
            kiwi_two=payload["kiwi_two"],
        )

    def verify(self, state_slice):
        if self.kiwi_one is self.kiwi_two:
            raise crypto_kiwis.error.SoloBreedingError("Kiwis can not breed with themselves, no matter how hard they try.")

        if self.owner_one_address is self.owner_two_address:
            raise crypto_kiwis.error.SoloOwnerError("You are not allowed to make your own Kiwis breed for some reason!")


    def apply(self, state_slice):
        id = ED25519SigningKey.new()
        state_slice[BreedingRequest.fqdn][id] = BreedingRequestModel(id, owner_one_address, owner_two_address, kiwi_one, kiwi_two)

@dataclass
class RespondToBreedingRequest(Transform):
    fqdn = "cryptokiwi.RespondToBreedingRequest"
    request_id:str
    owner_one_address:str
    owner_two_address:str

    def required_authorizations(self):
        return {self.owner_two_address}

    @staticmethod
    def required_models():
        return {KiwiModel.fqdn, KiwiCollectionModel.fqdn, BreedingRequestModel.fqdn}

    def required_keys(self):
        return {self.request_id, self.owner_one_address, self.owner_two_address}

    @staticmethod
    def pack(registry, obj):
        #print("obj", obj)
        return {
            "request_id": obj.request_id,
            "owner_one_address": obj.owner_one_address,
            "owner_two_address": obj.owner_two_address,
        }

    @classmethod
    def unpack(cls, registry, payload):
        #print("payload", payload)
        return cls(
            request_id=payload["request_id"],
            owner_one_address=payload["owner_one_address"],
            owner_two_address=payload["owner_two_address"],
        )

    def verify(self, state_slice):
        pass

    def apply(self, state_slice):
        breeding_request = state_slice[BreedingRequest.fqdn][request_id]
        # create the new kiwis

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

        owned_ids = [x for x in state_slice[KiwiModel.fqdn]]
        if len(owned_ids) > 0:
            raise crypto_kiwis.error.KiwiAlreadyClaimedError("You have already claimed a kiwi!")

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
