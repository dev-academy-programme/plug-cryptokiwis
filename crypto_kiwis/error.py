from plug.error import PlugException
from plug.error import VerificationError


# Define your plugin's errors here.
class KiwiNotFoundError(VerificationError):
    fqdn = "cryptokiwi.error.KiwiNotFoundError"
    status_code = 400

class KiwiAlreadyClaimedError(VerificationError):
    fqdn = "cryptokiwi.error.KiwiAlreadyClaimedError"
    status_code = 400

class SoloBreedingError(VerificationError):
    fqdn = "cryptokiwi.error.SoloBreedingError"
    status_code = 400

class SoloOwnerError(VerificationError):
    fqdn = "cryptokiwi.error.SoloOwnerError"
    status_code = 400
