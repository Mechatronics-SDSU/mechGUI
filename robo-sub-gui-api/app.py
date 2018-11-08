from __future__ import print_function
from flask import Flask, json, jsonify, request
from flask_cors import CORS, cross_origin
import logging
import sys
#import './db.json'

logging.getLogger('flask_cors').level = logging.DEBUG

db = {
	"mode": ""
}


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def api_root():
	return 'Welcome'

@app.route('/mode', methods = ['POST'])
#@cross_origin()
def api_mode():
	if request.headers['Content-Type'] == 'application/json':
		print(request.json["mode"], file=sys.stderr)
		if request.json["mode"]:
			with open('db.json', 'r+') as f:
			    data = json.load(f)
			    data['mode'] = request.json["mode"] 
			    f.seek(0)       
			    json.dump(data, f, indent=4)
			    f.truncate() 
			    return jsonify({"success": True}), 202 
	else:
		return "415 Unsupported Media Type."	

@app.route('/ahrs', methods = ['POST'])
def api_ahrs():
	if request.headers['Content-Type'] == 'application/json':
		return "JSON Message:" + json.dumps(request.json)
	else:
		return "415 Unsupported Media Type."


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


if __name__ == '__main__':
	app.run(debug=True)