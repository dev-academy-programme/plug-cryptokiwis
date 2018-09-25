from plug.error import PlugException
from plug.error import VerificationError


# Define your plugin's errors here.
class KiwiNotFoundError(VerificationError):
    fqdn = "cryptokiwi.error.KiwiNotFoundError"
    status_code = 404
