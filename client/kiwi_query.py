from crypto_kiwis.model import KiwiModel

def init_kiwi_query(client, address):
    response = client.get_model_instance(
        model=KiwiModel,
        key='a',
        height=-1,
    )
    print("Your kiwi name is: " + str(response['name']))
    return response
