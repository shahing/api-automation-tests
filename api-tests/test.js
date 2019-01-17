{
	"info": {
		"name": "test",
		"_postman_id": "ec79e50a-3c8d-4e69-a438-d69b98d754d9",
		"description": "",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "test",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "f3f165d1-1382-4948-8afd-8fcbd67f0e26",
						"type": "text/javascript",
						"exec": [
							"var jsonData = JSON.parse(responseBody);",
							"",
							"",
							"tests[\"Successfull response code\"] = responseCode.code ===200 || responseCode.code === 202;",
							"if(responseCode.code == 200)",
							"{",
							"    tests[\"Status code is 200\"] = true;",
							"}else",
							"{",
							"    tests[\"Status code is not 200\"+\" Current code is\" +responseCode.code] = false;",
							"}",
							"",
							"tests[\"Response time is less than 200ms\"] = responseTime >=200;",
							"",
							""
						]
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://pixabay.com/api/?key=11309057-e6f7045464583f20da62be5ba&q=yellow+flowers&image_type=photo",
					"protocol": "https",
					"host": [
						"pixabay",
						"com"
					],
					"path": [
						"api",
						""
					],
					"query": [
						{
							"key": "key",
							"value": "11309057-e6f7045464583f20da62be5ba",
							"equals": true
						},
						{
							"key": "q",
							"value": "yellow+flowers",
							"equals": true
						},
						{
							"key": "image_type",
							"value": "photo",
							"equals": true
						}
					]
				},
				"description": ""
			},
			"response": []
		}
	]
}
