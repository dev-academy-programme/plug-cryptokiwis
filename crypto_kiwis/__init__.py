from plug.abstract import Plugin

import crypto_kiwis.error
import crypto_kiwis.model
import crypto_kiwis.transform
import crypto_kiwis.indexer


class Crypto_KiwisPlugin(Plugin):
    @classmethod
    def setup(cls, registry):
        components = [
            crypto_kiwis.model.KiwiModel,
            crypto_kiwis.transform.GainKiwi,
            # crypto_kiwis.indexer.KiwiIndexer,
            # Include your plugin's models/transforms/errors etc here.
        ]
        for component in components:
            registry.register(component)
