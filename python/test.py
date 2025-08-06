import requests
from pprint import pprint
import base64

url = 'https://lab.iwhalecloud.com/llmdoc/v1/auth/login'
headers ={"Content-Type":'application/json'}
data ={"username": "h3c_yanshi","password": base64.b64encode(b'H3c@12345!')}
response =requests.post(url,headers=headers, json=data)
pprint(response.json())