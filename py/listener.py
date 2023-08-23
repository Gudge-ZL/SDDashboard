from flask import Flask, request
from flask_cors import CORS

import os
import re
import json

max_lapse = 5
count = 0
recent_memory = []

temp_threshold = 63
memory_threshold = 4900

app = Flask(__name__)
CORS(app, resources=r'/*')

@app.route('/get_temp', methods=['GET'])
def get_temp():
    global recent_memory
    command = 'nvidia-smi'
    p = os.popen(command)
    res = p.readlines()
    p.close()
    temp = re.compile('\d*C').findall(res[10])[0][:-1]
    memory = re.compile('\d*MiB').findall(res[10])[0][:-3]
    if len(recent_memory)==300:
        recent_memory = recent_memory[1:]
    recent_memory+=[eval(memory)]
    max_memory = max(recent_memory)
    
    try:
        print(request.headers.get('User-Agent'))
    except:
        pass
    return json.dumps({'Temperature':temp, 'Max_memory':max_memory, 'Memory':memory})

if __name__=='__main__':
    print(get_temp())
    app.run(host='0.0.0.0',port=4560,debug=True)
